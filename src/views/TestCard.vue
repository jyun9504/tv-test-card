<template>
  <div class="test-card">
    <div class="border border__top">
      <div class="border__box" :key='i' v-for="i in 25"></div>
    </div>
    <div class="border border__left">
      <div class="border__box" :key='i' v-for="i in 11"></div>
    </div>
    <div class="container">
      <div class="bg-block" v-bind:class="'bg-block--' + i" v-for="i in 13*23" :key="'b' + i"></div>
      <div class="corner" v-bind:class="'corner--' + i" v-for="i in 4" :key="i">
        <CircleSM />
      </div>
      <SidebarL />
      <div class="main-block">
        <CircleXL />
        <div class="circle-center-block">
          <div class="circle-center-block__top"></div>
          <div class="circle-center-block__bottom"></div>
        </div>
      </div>
      <SidebarR />
    </div>
    <div class="border border__right">
      <div class="border__box" :key='i' v-for="i in 11"></div>
    </div>
    <div class="border border__bottom">
      <div class="border__box" :key='i' v-for="i in 25"></div>
    </div>
  </div>
</template>

<script>
import CircleXL from '../components/CircleXL.vue';
import CircleSM from '../components/CircleSM.vue';
import SidebarL from '../components/SidebarL.vue';
import SidebarR from '../components/SidebarR.vue';

export default {
  name: 'TestCard',
  components: {
    CircleXL,
    CircleSM,
    SidebarL,
    SidebarR,
  },
};
</script>

<style scoped lang="scss">
.test-card {
  background-color: $color-white;
  border: 1px solid $color-white;
  display: grid;
  grid-template-columns: 0.8rem repeat(23, 2rem) 0.8rem;
  grid-template-rows: 0.4rem repeat(13, 2rem) 0.4rem;
  gap: 1px;
}
.border {
  display: grid;
  gap: 1px;

  &__box:nth-child(odd){
    background-color: $color-black;
  }

  &__top {
    grid-template-columns: 0.8rem repeat(23, 2rem) 0.8rem;
  }
  &__left {
    grid-row: 3/14;
  }
  &__right {
    grid-row: 3/14;
    grid-column-start: 25;
  }
  &__bottom {
    grid-column-start: 1;
    grid-row: 15;
    grid-template-columns: 0.8rem repeat(23, 2rem) 0.8rem;
  }
}

.container{
  display: grid;
  gap: 1px;
  grid-column-start: 2;
  grid-row-start: 2;
  grid-template-columns: repeat(23, 2rem);
  grid-template-rows: repeat(13, 2rem);
}

.bg-block {
  background-color: $color-grey;
}

@for $i from 1 through 299 {
  $row: floor(($i - 1) / 23) + 1;
  $column: ($i - 1) % 23 + 1;

  .bg-block--#{$i} {
    grid-row: $row/span 1;
    grid-column: $column / span 1;
  }
}

.corner{
  @include flexCenter;

  &--1{ //left top
    grid-row: 1 / span 4;
    grid-column: 1 / span 4;
  }
  &--2{ //right top
    grid-row: 1 / span 4;
    grid-column: -5 / span 4;
  }
  &--3{ //left btm
    grid-row: 10 / span 4;
    grid-column: 1 / span 4;
  }
  &--4{ //right btm
    grid-row: 10 / span 4;
    grid-column: -5 / span 4;
  }
}

.main-block{
  grid-row: 1 / -1;
  grid-column: 6 / 19;
  display: grid;
  grid-template-rows: repeat(13, 2rem);
  grid-template-columns: repeat(13, 2rem);
  gap: 1px;
}

.circle-center-block {
  background-color: $color-black;
  grid-row: 6 / span 3;
  grid-column: 7 / span 1;

  display: grid;
  grid-template-rows: 6rem;
  grid-template-columns: 1rem 1rem;

  &__top {
    grid-row: 1;
    grid-column: 1;
    border-right: 0.5px solid $color-white;
  }

  &__bottom {
    grid-row: 1;
    grid-column: 2;
    border-left: 0.5px solid $color-white;
  }
}
</style>
