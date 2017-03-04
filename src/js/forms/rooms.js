export default {
  name: 'rooms',
  data() {
    return {
      heading: 'Choose a few areas to organize',
      formContinue: 'Continue',
      progressBar: '20%',
      options: [
        'Closet Space',
        'Garage / Storage',
        'Office Space',
        'Documents / Photos',
        'Electronics',
        'Other',
        'Gift Supplies',
        'Kitchen',
        'Bedroom',
        'Bathrooms',
        'Cleaning Supplies',
        'Medicine Cabinet'
      ],
      checkedRooms: [],
      showError: false,
      errorMessage: 'Please check at least one room to organize.'
    };
  },
  methods: {
    addRooms(event){
      this.$store.commit('setRooms', this.checkedRooms);
    },
    verifyForms: function(){
      if(this.checkedRooms.length == 0){
        this.showError = true;
      }
      else{
        this.showError = false;
        this.$router.push('/organization-amount');
      }

    }
  },
  computed: {
    count () {
      return this.$store.state.rooms
    }
  },
  mounted(){
    this.$store.commit('setProgress', this.progressBar);
    
    // Set Data from Vuex State if available
    this.checkedRooms = this.$store.state.rooms;
  }
};
