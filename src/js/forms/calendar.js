// only import the component that we need from jQuery
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/datepicker';
import 'moment';

export default {
  name: 'calendar',
  formContinue: 'Continue',
  data() {
    return {
      heading: 'Set up your first appointment. Choose a date and time',
      messages: {
        minimal: {
          heading: 'Minimize',
          copy: 'I have a lot of stuff and I want to get rid of everything'
        }
      },
      appointmentTimes: [],
    };
  },
  methods: {
    // ---------- Get Formatted Date ---------- //
    getFormattedDate(date){
      var year = date.getFullYear();
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      return year + '-' + month + '-' + day;
    },
    // ---------- Get Available Dates ---------- //
    getAvailableDates(year,month){
      return new Promise(function(resolve,reject){
        let availableDates = [];

        // Logic to handle padded addition of days and rollover to new year //
        let nextMonth = month;
        let nextYear = year;
        if(month < 10){
          nextMonth = ('0' + (+month + 1));
        }
        else if(month == 10 || month == 11){
          nextMonth = month + 1;
        }
        else if(month === 12){
          nextMonth = '01';
          nextYear = year + 1;
        }

        // Promises (2 promises because we don't want to show dates more than 2 months in advance)
        $.getJSON(`http://localhost:3000/api/dates?month=${nextYear}-${nextMonth}`).then(function(results){
          $.each(results, function(index, value){
            availableDates.push(results[index].date);
          });
        }).then(function(){
          $.getJSON(`http://localhost:3000/api/dates?month=${year}-${month}`).then(function(results){
            $.each(results, function(index, value){
              availableDates.push(results[index].date);
            });
            resolve(availableDates); //return the promise here or it won't work correct
          });
        });
      });
    },
    // ---------- Render Dates ---------- //
    renderDates(year, month){
      var initDates;
      this.getAvailableDates(year, month).then(function(response){
        initDates = response;
        // console.log(initDates);
      }).then(function(){
        $(".datepicker").datepicker({
          dateFormat: "yy-mm-dd",
          beforeShowDay: function(date) {
            var formattedDate = this.getFormattedDate(date);
            if ($.inArray(formattedDate, initDates) > -1) {
              // console.log(formattedDate);
                return [true, 'calendar__day--available', null];
            } else {
                return [false, 'calendar__day--available', null]; //no special class here
            }
          }.bind(this),
          onSelect: function(selectedDate){
            // Get possible times based on day
            let appointmentTimes = [];
            $.getJSON(`http://localhost:3000/api/times?date=${selectedDate}`)
            .then(function(results){
              $.each(results, function(index, value){
                // convert date string to time
                let time = results[index].time;
                // time = `${time.getHours()}:${time.getMinutes()}`
                console.log(this.formatTime(time));
                appointmentTimes.push(this.formatTime(time));
              }.bind(this));
              this.appointmentTimes = appointmentTimes;
            }.bind(this));
          }.bind(this),
          prevText: '<span class="calendar__arrow calendar__arrow--left"><svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><clipPath id="a"><path d="M0 0h40.052v40.052H0z"/></clipPath><g clip-path="url(#a)"><path d="M35.052 18.75H5.668M17.75 6L5 18.75 17.75 31.5" fill="none" stroke="#000" stroke-width="1.9967818"/></g></svg></span>',
          nextText: '<span class="calendar__arrow calendar__arrow--right"><svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><clipPath id="a"><path d="M0 0h40.052v40.052H0z"/></clipPath><g clip-path="url(#a)"><path d="M35.052 18.75H5.668M17.75 6L5 18.75 17.75 31.5" fill="none" stroke="#000" stroke-width="1.9967818"/></g></svg></span>',
        });
      }.bind(this));
    },
    formatTime(time){
      return moment(time).format('h:mm a MMM D');
    },
    // ---------- Init Calendar ---------- //
    initCalendar(){
      let date = new Date();
      let month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      let year = date.getFullYear();

      this.renderDates(year, month);
    }
  },
  mounted(){

    this.initCalendar();

  }
};
