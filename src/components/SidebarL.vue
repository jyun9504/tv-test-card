<template>
  <div class="sidebar-l">
    <div class="sidebar-l--1"></div>
    <div class="sidebar-l--2"></div>
    <div class="sidebar-l--3"></div>
    <div class="sidebar-l--4"></div>
  </div>
</template>

<script>
export default {
  name: 'SidebarL',
};
</script>

<style scoped lang="scss">
.sidebar-l{
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
</style>
