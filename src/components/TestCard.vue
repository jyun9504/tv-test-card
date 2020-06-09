<template>
  <div class="test-card">
    <div class="border__top">
      <div class="border__box" :key='i' v-for="i in 25"></div>
    </div>
    <div class="border__left">
      <div class="border__box" :key='i' v-for="i in 11"></div>
    </div>
    <div class="container">
      <div v-bind:class="['bg-block', 'bg-block--' + i]" v-for="i in 13*23" :key="i"></div>
      <div v-bind:class="['corner', 'corner--' + i]" v-for="i in 4" :key="i">
        <div class="circle">
          <div class="circle__block" v-for="i in 4" :key="i"></div>
        </div>
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
export default {
  name: 'TestCard',
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
  &--1{
    grid-row: 1 / span 4;
    grid-column: 1 / span 4;
  }
  &--2{
    grid-row: 1 / span 4;
    grid-column: -5 / span 4;
  }
  &--3{
    grid-row: 10 / span 4;
    grid-column: 1 / span 4;
  }
  &--4{
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

</style>
