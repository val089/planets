<template>
  <section class="planets" id="planets">
    <Spinner v-if="loading" />
    <p class="planets__error" v-if="error">An error has occurred.</p>
    <div v-else>
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
        <PlanetItem v-for="planet in filteredPlanets" :planet="planet" v-bind:key="planet.id" />
      </section>
    </div>
  </section>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./component.js" />
