export default {
  name: 'questions',
  data() {
    return {
      heading: 'Answer a few questions for us',
      formContinue: 'Continue',
      progressBar: '60%',
      personalInfoHeading: 'Who are you?',
      addressHeading: 'What is your address?',

      // Placeholders
      fullNamePlaceholder: 'Full Name*',
      emailAddressPlaceholder: 'Email Address*',
      phoneNumberPlaceholder: 'Phone Number*',
      addressPlaceholder: 'Address*',
      cityPlaceholder: 'City*',
      statePlaceholder: 'State*',
      zipPlaceholder: 'Zip Code*',

      // Data for Placeholders
      personalInfo: {
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      },

      showError: false,
      errorMessage: '',
      supportedZipCodes: [66204,66225,66282,66283,66285,66208,66276,66222,66250,66202,66203,66201,66212,66207,66205,66214,66206,64113,66216,64114,64112,66211,66215,66160,66251,66210,64131,66103,64110,64111,66106,66217,64132,66105,66209,66213,64130,64109,64190,66219,64144,64102,64108,64137,66118,66102,64171,64188,64101,66218,64105,64128,66110,66119,66220,64145,64999,64141,64148,64170,64179,64180,64184,64187,64191,64196,64197,64198,64199,66101,66117,66223,64106,64146,66111,66224,64127,66221,66112,64129,66113,66115,64138,66226,64124,64133,64134,64030,64123,66104,64126,66051,66063,66227,66062,64116,64125,66286,64147,64120,64150,64121,64052,64168,66085,64053,64149,64139,64117,64136,64065,66012,64054,64055,66061,66109,64051,64151,64081,64012,64118,64152,64050,64161,66031,64082,66018,64119,64092,64064,64063,66013,64083,66007,64015,64158,64057,66030,64154,66052,66083,64013,64056,64086,64153,64156,64155,64069,64195,64028,66043,64014,64157,64078,64164,64034,64058,64165,64163,64166,64068,66086,66025,64029,64734,64167,66036,66021,64072,64016,64080,64079,66048,64088,64746,64075,64089,66027,64070,66053,66044,64073,66046,64066,64060]
    };
  },
  mounted(){
    this.$store.commit('setProgress', this.progressBar);
    this.$store.commit('setPersonalInfo', this.personalInfo);

    // Set Data from Vuex State if available
    this.personalInfo = this.$store.state.rooms;

  },
  methods: {
    dashifyNumber: function(){
      this.phoneNumber = this.phoneNumber.replace(/(\d{3})(\d{3})\-?/g,'$1-$2');
    },
    verifyForms: function(){
      if(this.personalInfo.fullName == undefined || this.personalInfo.emailAddress == undefined || this.personalInfo.phoneNumber == undefined || this.personalInfo.address == undefined || this.personalInfo.city == undefined || this.personalInfo.state == undefined || this.personalInfo.zip == undefined){
        this.errorMessage = 'Please fill out all of the fields above.'
        this.showError = true;
      }
      else if(!this.supportedZipCodes.includes(parseInt(this.personalInfo.zip))){
        this.errorMessage = "Sorry, we don't support your area yet. Contact us to let us know you are interested!"
        this.showError = true;
      }
      else{
        this.showError = false;
        this.$router.push('/book');
      }
    }
  }
};
