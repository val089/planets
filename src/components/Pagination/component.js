import PaginationButton from '@/components/PaginationButton';
import PaginationTrigger from '@/components/PaginationTrigger';

export default {
  components: {
    PaginationButton,
    PaginationTrigger,
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
    },

    pageCount: {
      type: Number,
      required: true,
    },

    visiblePagesCount: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1;
    },

    isNextButtonDisabled() {
      return this.currentPage === this.pageCount;
    },

    paginationTriggers() {
      const currentPage = this.currentPage;
      const pageCount = this.pageCount;
      const visiblePagesCount = this.visiblePagesCount;
      const visiblePagesThreshold = (visiblePagesCount - 1) / 2;
      const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(0);

      if (currentPage <= visiblePagesThreshold + 1) {
        pagintationTriggersArray[0] = 1;
        const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
          return pagintationTriggersArray[0] + index;
        });

        pagintationTriggers.push(pageCount);

        return pagintationTriggers;
      }

      if (currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
          return pageCount - index;
        });

        pagintationTriggers.reverse().unshift(1);

        return pagintationTriggers;
      }

      pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1;
      const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
        return pagintationTriggersArray[0] + index;
      });

      pagintationTriggers.unshift(1);
      pagintationTriggers[pagintationTriggers.length - 1] = pageCount;

      return pagintationTriggers;
    },
  },

  methods: {
    nextPage() {
      this.$emit('nextPage');
    },

    onLoadPage(value) {
      this.$emit('loadPage', value);
    },

    previousPage() {
      this.$emit('previousPage');
    },
  },
};
