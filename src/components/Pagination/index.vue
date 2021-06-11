<template>
  <div class="pagination">
    <PaginationButton :disabled="isPreviousButtonDisabled" @click.native="previousPage">
      ←
    </PaginationButton>

    <PaginationTrigger
      v-for="paginationTrigger in paginationTriggers"
      :class="{
        'pagination__description--current': paginationTrigger === currentPage,
      }"
      :key="paginationTrigger"
      :pageNumber="paginationTrigger"
      class="pagination__description"
      @loadPage="onLoadPage"
    />

    <PaginationButton :disabled="isNextButtonDisabled" @click.native="nextPage">
      →
    </PaginationButton>
  </div>
</template>
<script src="./component.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
