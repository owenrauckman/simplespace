import Navigation from '../components/Navigation';

export default {
  name: 'hero',
  data() {
    return {
      heading: 'Take Control',
      copy: 'Simple Space offers home and office organization solutions with a minimalist mindset. Our goal is to help you organize, declutter, and dispose while encouraging you to realize what is essential to your life'
    };
  },
  components: {
    Navigation
  }
};
