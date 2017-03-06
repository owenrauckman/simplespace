export default {
  name: 'slider',
  data() {
    return {
      minimizeAmount : null,
      heading: 'Are You Looking to Minimize or Organize?',
      formContinue: 'Continue',
      progressBar: '40%'
    };
  },
  methods: {
    updateSlider(){
      this.$store.commit('setSlider', this.minimizeAmount);
    },
    verifyForms: function(){
      $('html, body').animate({
        scrollTop: $('#js__scale').offset().top
      }, 500);

      this.$router.push('/info');
    }
  },
  computed: {
    dynamicHeading: function(){
      if(this.minimizeAmount > 75){
        return "Organize";
      }
      else if(this.minimizeAmount >= 50 && this.minimizeAmount <= 75){
        return "Tidy Up";
      }
      else if(this.minimizeAmount >= 25 && this.minimizeAmount <= 50){
        return "Declutter";
      }
      else{
        return "Minimze";
      }
    },
    dynamicCopy: function(){
      if(this.minimizeAmount > 75){
        return "I have lots of stuff that I want to keep and get organized";
      }
      else if(this.minimizeAmount >= 50 && this.minimizeAmount <= 75){
        return "I want to get organized and get rid of a few things that I don't need";
      }
      else if(this.minimizeAmount >= 25 && this.minimizeAmount <= 50){
        return "I would like to take steps toward simplifying my possessions";
      }
      else{
        return "I have a lot of stuff and I want to get rid of everything";
      }
    }
  },
  mounted(){
    this.$store.commit('setProgress', this.progressBar);

    // Set Data from Vuex State if available
    this.minimizeAmount = this.$store.state.minimizeAmount;
  }
};
