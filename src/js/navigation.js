export default {
  name: 'vue__navigation',
  data() {
    return {
      nav: [
        {title: 'Services', link: '#'},
        {title: 'Pricing', link: '#'},
        {title: 'Instructions', link: '#'},
        {title: 'Blog', link: 'https://medium.com/@getsimplespace'}
      ]
    };
  },
  methods: {
    scrollToSection(menuItem){
      $('html, body').animate({
        scrollTop: $(`#${menuItem}`).offset().top
      }, 500);
    }
  }
};
