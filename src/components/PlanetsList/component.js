import axios from 'axios';
import { uuid } from 'vue-uuid';
import PlanetItem from '@/components/PlanetItem';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';

export default {
  name: 'PlanetsList',
  data() {
    return {
      planets: [],
      loading: false,
      error: false,
      currentPage: 1,
      pageCount: 0,
      search: '',
      visibleItemsPerPageCount: 10,
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
      this.planets = this.addId(data.results);
      this.loading = false;
      this.pageCount = Math.ceil(data.count / this.visibleItemsPerPageCount);
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
        this.planets = this.addId(data.results);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
    addId(data) {
      return data.map((el) => ({ ...el, id: uuid.v4() }));
    },
  },
};
