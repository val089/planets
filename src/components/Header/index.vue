<template>
  <header class="header">
    <div class="header__title-container">
      <h1 class="header__title">The Planets</h1>
      <p class="header__description">Find your favourite planet.</p>
      <div class="header__cta-container">
        <a class="header__cta" href="#planets">Let's start</a>
      </div>
    </div>
    <div class="header__image-container">
      <img class="header__image" :src="image" />
    </div>
  </header>
</template>
<script src="./component.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
