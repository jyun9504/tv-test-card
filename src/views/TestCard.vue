<template>
  <div class="test-card">
    <div class="border__top">
      <div class="border__box" :key='i' v-for="i in 25"></div>
    </div>
    <div class="border__left">
      <div class="border__box" :key='i' v-for="i in 11"></div>
    </div>
    <div class="container">
      <div class="bg-block" v-bind:class="'bg-block--' + i" v-for="i in 13*23" :key="i"></div>
      <div class="corner" v-bind:class="'corner--' + i" v-for="i in 4" :key="i">
        <div class="circle">
          <div class="circle__block" v-for="i in 4" :key="i"></div>
        </div>
      </div>
      <div class="left-sidebar">
          <div class="left-sidebar--1"></div>
          <div class="left-sidebar--2"></div>
          <div class="left-sidebar--3"></div>
          <div class="left-sidebar--4"></div>
      </div>
      <div class="main-block">
        <CircleXL />
        <div class="circle-center-block">
          <div class="circle-center-block__top"></div>
          <div class="circle-center-block__bottom"></div>
        </div>
      </div>
      <div class="right-sidebar">
        <div class="right-sidebar--1"></div>
        <div class="right-sidebar--2"></div>
        <div class="right-sidebar--3"></div>
        <div class="right-sidebar--4"></div>
      </div>
    </div>
    <div class="border__right">
      <div class="border__box" :key='i' v-for="i in 11"></div>
    </div>
    <div class="border__bottom">
      <div class="border__box" :key='i' v-for="i in 25"></div>
    </div>
  </div>
</template>

<script>
import CircleXL from '../components/CircleXL.vue';

export default {
  name: 'TestCard',
  components: {
    CircleXL,
  },
};
</script>

<style scoped lang="scss">
// Test card image - https://imgur.com/a/aTPcamE
.test-card {
  background-color: $color-white;
  border: 1px solid $color-white;
  display: grid;
  grid-template-columns: 0.8rem repeat(23, 2rem) 0.8rem;
  grid-template-rows: 0.4rem repeat(13, 2rem) 0.4rem;
  gap: 1px;
}
.border {
  &__box:nth-child(odd){
    background-color: $color-black;
  }

  &__top {
    display: grid;
    grid-template-columns: 0.8rem repeat(23, 2rem) 0.8rem;
    gap: 1px;
  }

  &__left {
    display: grid;
    grid-row: 3/14;
    gap: 1px;
  }

  &__right {
    display: grid;
    grid-row: 3/14;
    grid-column-start: 25;
    gap: 1px;
  }

  &__bottom {
    display: grid;
    grid-column-start: 1;
    grid-row: 15;
    grid-template-columns: 0.8rem repeat(23, 2rem) 0.8rem;
    gap: 1px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
.circle{
  background-color: $color-white;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: grid;
  grid-template-rows: repeat(2, 2rem);
  grid-template-columns: repeat(2, 2rem);
  gap: 1px;
  align-content: center;
  justify-content: center;
  &__block{
    background-color: $color-black;
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
.left-sidebar{
  grid-row: 2 / -2;
  grid-column: 5 / span 2;
  display: grid;
  grid-template-rows: repeat(2, calc(11rem+2px));
  grid-template-columns: repeat(2, 2rem);
  &--1 {
    background-color: $color-blue-green-2;
    grid-row: 1;
    grid-column: 1;
  }
  &--2 {
    background-color: $color-red-3;
    grid-row: 2;
    grid-column: 1;
  }
  &--3 {
    background-color: $color-blue-light;
    height: 4rem;
    align-self: start;
    grid-row: 1;
    grid-column: 2;
  }
  &--4 {
    background-color: $color-brown;
    height: 4rem;
    align-self: end;
    grid-row: 2;
    grid-column: 2;
  }
}
.right-sidebar{
  grid-row: 2 / -2;
  grid-column: -7 / span 2;
  display: grid;
  grid-template-rows: repeat(2, calc(11rem+2px));
  grid-template-columns: repeat(2, 2rem);
  &--1 {
    background-color: $color-blue-light;
    height: 4rem;
    align-self: start;
    grid-row: 1;
    grid-column: 1;
  }
  &--2 {
    background-color: $color-brown;
    height: 4rem;
    align-self: end;
    grid-row: 2;
    grid-column: 1;
  }
  &--3 {
    background-color: $color-green-dark;
    grid-row: 1;
    grid-column: 2;
  }
  &--4 {
    background-color: $color-blue-purple;
    grid-row: 2;
    grid-column: 2;
  }
}
</style>
