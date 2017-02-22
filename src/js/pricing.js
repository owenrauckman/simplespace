export default {
  name: 'pricing',
  data() {
    return {
      heading: 'Pricing',
      copy: 'We keep our pricing simple. We charge by the hour for our services, but offer an optional pre-appointment checklist so that we can save you money.',
      getStarted: 'Get Started',
      prices: [
        {
          cost: '$40',
          costMeasure: '/hr',
          appointment: 'Regular Appointment',
          organizers: '1-2 Organizers',
          color: 'dark'
        },
        {
          cost: '$70',
          costMeasure: '/hr',
          appointment: 'Large Appointment',
          organizers: '3-4 Organizers',
          color: 'dark'
        },
        {
          cost: '$25',
          costMeasure: '/trip',
          appointment: 'Recycle/Donate <br>old items',
          organizers: '',
          color: 'light'
        }
      ]
    };
  },
};
