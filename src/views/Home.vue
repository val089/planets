<template>
  <div class="home">
    <PlanetsList />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList';

export default {
  name: 'Home',
  components: {
    PlanetsList,
  },
};
</script>
<style src="./style.scss" lang="scss" scoped></style>
