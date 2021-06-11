<template>
  <div class="home">
    <Header />
    <PlanetsList />
  </div>
</template>

<script>
import Header from '@/components/Header';
import PlanetsList from '@/components/PlanetsList';

export default {
  name: 'Home',
  components: {
    Header,
    PlanetsList,
  },
};
</script>
<style src="./style.scss" lang="scss" scoped></style>
