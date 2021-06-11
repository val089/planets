<template>
  <section class="planets">
    <Spinner v-if="loading" />
    <p v-if="error">An error has occurred.</p>
    <div class="planets__search-group">
      <input class="planets__search" type="text" v-model="search" placeholder="Search planet" />
    </div>
    <Pagination
      :current-page="currentPage"
      :page-count="pageCount"
      class="planets__pagination"
      @nextPage="pageChangeHandle('next')"
      @previousPage="pageChangeHandle('previous')"
      @loadPage="pageChangeHandle"
    />
    <section class="planets__list">
      <PlanetItem v-for="(planet, index) in filteredPlanets" :planet="planet" v-bind:key="index" />
    </section>
  </section>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./component.js" />
