import image from '../../assets/images/small-planet.png';

export default {
  data() {
    return {
      image,
    };
  },
  props: {
    planet: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertDate(str) {
      const date = str.slice(0, 10);
      const time = str.slice(11, 19);
      return `${date}, ${time}`;
    },
  },
};
