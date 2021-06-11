// @vue/component
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import PlanetItem from '@/components/PlanetItem';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';
Vue.use(VueAxios, axios);

export default {
  name: 'PlanetsList',
  static: {
    visibleItemsPerPageCount: 10,
  },
  data() {
    return {
      planets: [],
      loading: false,
      error: false,
      currentPage: 1,
      pageCount: 0,
      search: '',
    };
  },
  components: {
    PlanetItem,
    Pagination,
    Spinner,
  },
  async mounted() {
    try {
      this.loading = true;
      const { data } = await axios.get(`https://swapi.dev/api/planets/?page=1`);
      this.planets = data.results;
      console.log(data.results);
      this.loading = false;
      this.pageCount = Math.ceil(data.count / this.$options.static.visibleItemsPerPageCount);
    } catch (error) {
      this.loading = false;
      this.error = true;
    }
  },
  computed: {
    filteredPlanets() {
      return this.planets.filter((planet) => {
        return planet.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  methods: {
    async pageChangeHandle(value) {
      switch (value) {
        case 'next':
          this.currentPage += 1;
          break;
        case 'previous':
          this.currentPage -= 1;
          break;
        default:
          this.currentPage = value;
          break;
      }
      try {
        this.loading = true;
        const { data } = await axios.get(`https://swapi.dev/api/planets/?page=${this.currentPage}`);
        this.planets = data.results;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
  },
};
