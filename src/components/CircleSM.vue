<template>
  <div class="circle-sm">
    <div class="circle-sm__block" v-for="i in 4" :key="i"></div>
  </div>
</template>

<script>
export default {
  name: 'CircleSM',
};
</script>

<style scoped lang="scss">
.circle-sm{
  @include whiteCircle;
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
