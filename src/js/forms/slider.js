export default {
  name: 'slider',
  data() {
    return {
      heading: 'Are You Looking to Minimize or Organize?',
      formContinue: 'Continue',
      messages: {
        minimal: {
          heading: 'Minimize',
          copy: 'I have a lot of stuff and I want to get rid of everything'
        }
      }
    };
  },
  props: ['msg'],
};
