export default {
  name: 'rooms',
  data() {
    return {
      heading: 'Choose a few areas to organize',
      formContinue: 'Continue',
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
      checkedRooms: []
    };
  },
  methods: {
    addRooms(event){
      this.$store.commit('setRooms', this.checkedRooms);
      console.log(this.$store.state.rooms);
    }
  },
  computed: {
    count () {
      return this.$store.state.rooms
    }
  }
};
