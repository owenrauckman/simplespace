export default {
  name: 'confirmation',
  data() {
    return {
      message : 'Thanks for booking your appointment! Check your email for 2 emails: a confirmation and further instructions on how to prepare. We will be in contact with you soon!',
      progressBar: '100%'
    };
  },
  mounted(){
    this.$store.commit('setProgress', this.progressBar);
  }
};
