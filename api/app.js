'use strict';

const AcuityScheduling = require('acuityscheduling');
const Mailchimp = require('mailchimp-api-v3')
const express = require('express');
const app = express();
const mailchimp = new Mailchimp('cad942e8e91332ddb601dd31427005c0-us15');
const nodemailer = require('nodemailer');
const cors = require('cors');


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// Cors, yo
app.use(function(req, res, next) {
  var allowedOrigins = ['http://localhost:8080', 'https://localhost:8080', 'http://getsimple.space', 'http://www.getsimple.space', 'https://getsimple.space', 'httsp://www.getsimple.space'];
   var origin = req.headers.origin;
   if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
   }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json({extended: false})); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// Create an instance of Acuity for accessing the API:
let acuity = AcuityScheduling.basic({
  "userId": '13337121',
  "apiKey": 'a3e5a972256b509d4992a64813d9b17c'
});
let appointmentTypeID = '2644071';


// http://localhost:3000/api/dates?month=2017-02
app.get('/api/dates', (req, res)=> {
  acuity.request(`/availability/dates?appointmentTypeID=${appointmentTypeID}&month=${req.query.month}`, function (err, response) {
    if (err) {
      return console.error(err);
    }
    res.json(response.body);
  });

});


// http://localhost:3000/api/times?date=2017-02-15
app.get('/api/times', (req, res)=> {

  acuity.request(`/availability/times?&appointmentTypeID=${appointmentTypeID}&date=${req.query.date}`, function (err, response) {
    if (err) {
      return console.error(err);
    }
    res.json(response.body);
  });

});

// http://localhost:3000/api/times?date=2017-02-15
app.post('/api/book', (req, res)=> {

  // Create appontment options:
  var options = {
    method: 'POST',
    body: {
      appointmentTypeID : 2511021,
      datetime          : req.body.datetime,
      firstName         : req.body.firstName,
      lastName          : req.body.lastName,
      email             : req.body.email
    }
  };

  // Make the create appointment request:
  var booking = new Promise(
    function(resolve, reject){
      acuity.request('/appointments', options, function (err, appointment) {
        if (appointment.body.err){
          reject('There was an error processing your request. Please try again.');
        }
        if(appointment.body.status_code === 400){
          reject('We were unable to make an appointment at that time');
        }
        else{
          resolve('Thanks for booking your appointment!');
        }
      });
    }
  );

  booking.then(
    function(val){
      // Add customer to mailchimp list
      mailchimp.post('/lists/f33c427a77/members', {
        email_address : req.body.email,
        status : 'subscribed',
        merge_fields: {
          FNAME: req.body.firstName,
          LNAME: req.body.lastName
        }
      })
      .then(function(results) {
        console.log('Thank you for subscribing!');
      })
      .catch(function (err) {
        if(err.title == 'Member Exists'){
          console.log('You are already subscribed!');
        }
        else{
          console.log('Something went wrong while subscribing you to our mailing list.')
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Simple Space" <simplespacemail@gmail.com>', // sender address
          to: 'getsimplespace@gmail.com', // list of receivers
          subject: 'New Appointment Scheduled', // Subject line
          html: `Name: <b>${req.body.firstName} ${req.body.lastName}</b><br>Email: <b>${req.body.email}</b><br>Phone: <b>${req.body.phoneNumber}</b><br><br>Time: <b>${req.body.prettyDate}</b><br><br>Address: <b>${req.body.address}</b><br>City: <b>${req.body.city}</b><br>State: <b>${req.body.state}</b><br>Zip: <b>${req.body.zip}</b><br><br>Rooms: <b>${req.body.rooms}</b><br>Minimize Amount: <b>${req.body.minimizeAmount}</b><br>`
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });

      // Send response
      res.status(200).send('Thanks for booking your appointment!');
    })
    .catch(
      function(reason){
        res.status(500).send('Something went wrong booking your appointment, please try again.');
      }
    );

});



/* Start the server */
app.listen(3001, ()=> { console.log('listening on port 3001!'); });
