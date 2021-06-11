<template>
  <div class="planet-item">
    <img class="planet-item__image" :src="image" />
    <h2 class="planet-item__name">{{ planet.name }}</h2>
    <p class="planet-item__text">
      Rotation period: <span class="planet-item__data">{{ planet.rotation_period }}</span>
    </p>
    <p class="planet-item__text">
      Climate: <span class="planet-item__data">{{ planet.climate }}</span>
    </p>
    <p class="planet-item__text">
      Gravity: <span class="planet-item__data">{{ planet.gravity }}</span>
    </p>
    <p class="planet-item__text">
      Created: <span class="planet-item__data">{{ convertDate(planet.created) }}</span>
    </p>
    <p class="planet-item__text">
      Url:
      <span class="planet-item__data"
        ><a
          class="planet-item__link"
          :href="planet.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ planet.url }}</a
        >
      </span>
    </p>
  </div>
</template>
<script src="./component.js" />
<style src="./style.scss" lang="scss" scoped></style>
