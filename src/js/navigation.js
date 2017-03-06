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
      $('.nav__mobile').hide();
      $('html, body').animate({
        scrollTop: $(`#${menuItem}`).offset().top
      }, 500);
    },
    closeMenu(){
      $('.nav__mobile').fadeOut();
    },
    showMenu(){
      $('.nav__mobile').fadeIn();
    }
  }
};
