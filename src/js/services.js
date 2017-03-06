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
          list: ['Simplify Your Wardrobe', 'Make your closet more accessible', 'Presentable Layout'],
          display: 'block'
        },
        {
          heading:'Photo Organization',
          photo: 'photo',
          list: ['Scan old photos', 'Upload your photos to the cloud', 'Organize hard copies of photos'],
          display: 'block'
        },
        {
          heading: 'Kitchen Organization',
          photo: 'kitchen',
          list: ['Get rid of unused appliances', 'Declutter your cabinets', 'More efficient storage'],
          display: 'block'
        },
        {
          heading: 'Office Space',
          photo: 'office',
          list: ['Create a productive workspace', 'Fix your drawer clutter', 'Cut down on unused items'],
          display: 'block'
        },
        {
          heading: 'Kitchen Organization',
          photo: 'kitchen',
          list: ['Get rid of unused appliances', 'Declutter your cabinets', 'More efficient storage'],
          display: 'none'
        },
        {
          heading: 'Office Space',
          photo: 'office',
          list: ['Create a productive workspace', 'Fix your drawer clutter', 'Cut down on unused items'],
          display: 'none'
        }
      ]
    };
  },
  methods: {
    scrollToTop(){
      $('html, body').animate({
        scrollTop: $('#Signup').offset().top
      }, 500);
    },
    showAllServices(e){
      $(e.currentTarget).hide();
      $('.services__box').slideDown();
    }
  }
};
