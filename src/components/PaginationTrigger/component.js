export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },

  methods: {
    onClick() {
      this.$emit('loadPage', this.pageNumber);
    },
  },
};
