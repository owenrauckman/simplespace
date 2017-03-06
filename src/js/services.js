export default {
  name: 'services',
  data() {
    return {
      heading: 'Our Services',
      getStarted: 'Get Started',
      viewMore: 'View More',
      services: [
        {
          heading: 'Closet Organization',
          photo: 'closet',
          list: ['Simplify Your Wardrobe', 'Make your closet more accessible', 'Presentable Layout']
        },
        {
          heading:'Photo Organization',
          photo: 'photo',
          list: ['Scan old photos', 'Upload your photos to the cloud', 'Organize hard copies of photos']
        },
        {
          heading: 'Kitchen Organization',
          photo: 'kitchen',
          list: ['Get rid of unused appliances', 'Declutter your cabinets', 'More efficient storage']
        },
        {
          heading: 'Office Space',
          photo: 'office',
          list: ['Create a productive workspace', 'Fix your drawer clutter', 'Cut down on unused items']
        }
      ]
    };
  },
  methods: {
    scrollToTop(){
      $('html, body').animate({
        scrollTop: $('#Signup').offset().top
      }, 500);
    }
  }
};
