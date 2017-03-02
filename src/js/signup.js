import Rooms from '../components/forms/Rooms';
import Questions from '../components/forms/Questions';
import Slider from '../components/forms/Slider';
import Calendar from '../components/forms/Calendar';


export default {
  name: 'signup',
  data() {
    return {
      heading: 'Take Control',
      copy: 'Simple Space offers home and office organization solutions with a minimalist mindset. Our goal is to help you organize, declutter, and dispose while encouraging you to realize what is essential to your life',
      formContinue: 'Continue',
      formBack: 'back',
    };
  },
  components: {
    Rooms,
    Questions,
    Slider,
    Calendar
  }
};
