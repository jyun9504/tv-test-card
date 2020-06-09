<template>
  <div class="circle-xl">
    <div class="circle-row-1"></div>
    <div class="circle-row-2">
      <div :class="'circle-row-2__block-' + i" v-for="i in 3" :key="i"></div>
    </div>
    <div class="circle-row-3">
      <div :class="'circle-row-3__block-' + i" v-for="i in 3" :key="i"></div>
    </div>
    <div class="circle-row-4">
      <div :class="'circle-row-4__block-' + i" v-for="i in 16" :key="i"></div>
    </div>
    <div class="circle-row-5">
      <div :class="'circle-row-5__block-' + i" v-for="i in 6" :key="i"></div>
    </div>
    <div class="circle-row-6">
      <div :class="'circle-row-6__block-' + i" v-for="i in 26" :key="i"></div>
    </div>
    <div class="circle-row-7">
      <div class="circle-row-7__block-1"></div>
    <div class="circle-row-7__block-2">
      <div :class="'circle-row-7__block-2-' + i" v-for="i in 10" :key="i"></div>
    </div>
    <div class="circle-row-7__block-3">
      <div :class="'circle-row-7__block-3-' + i" v-for="i in 12" :key="i"></div>
    </div>
    <div class="circle-row-7__block-4">
      <div :class="'circle-row-7__block-3-' + i" v-for="i in 16" :key="i"></div>
    </div>
    <div class="circle-row-7__block-5">
      <div :class="'circle-row-7__block-3-' + i" v-for="i in 22" :key="i"></div>
    </div>
    <div class="circle-row-7__block-6">
      <div :class="'circle-row-7__block-3-' + i" v-for="i in 30" :key="i"></div>
    </div>
    <div class="circle-row-7__block-7">
      <div :class="'circle-row-7__block-3-' + i" v-for="i in 40" :key="i"></div>
    </div>
    <div class="circle-row-7__block-8"></div>
    </div>
    <div class="circle-row-8">
      <div :class="'circle-row-8__block-' + i" v-for="i in 6" :key="i"></div>
    </div>
    <div class="circle-row-9">
      <div :class="'circle-row-9__block-' + i" v-for="i in 3" :key="i"></div>
    </div>
    <div class="circle-row-10">
      <div :class="'circle-row-10__block-' + i" v-for="i in 3" :key="i"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleXL',
};
</script>

<style scoped lang="scss">
.circle-xl{
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  background-color: $color-white;
  border-radius: 50%;
  width: calc(24rem + 12px);
  height: calc(24rem + 12px);
  overflow: hidden;
  display: grid;
  grid-template-columns: calc(24rem + 12px);
  // add 1px for each rows to replace 1px row gap
  grid-template-rows: calc(1rem + 1px) repeat(3, calc(2rem + 1px)) calc(
    4rem + 2px) 2rem calc(4rem + 2px) repeat(2, calc(2rem + 1px)) calc(3rem + 2px);
  justify-items: center;
}
.circle-row-2 {
  grid-row: 2;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4rem 8rem 4rem;
  gap: 1px;

  &__block-2 {
    background-color: $color-black;
    grid-row: 1;
    grid-column: 2;
  }
}

.circle-row-3 {
  grid-row: 3;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4rem 12rem 4rem;

  &__block-1 {
    background-color: $color-black;

    grid-column: 1;
    grid-row: 1;
  }

  &__block-3 {
    background-color: $color-black;

    grid-column: 3;
    grid-row: 1;
  }
}

.circle-row-4 {
  grid-row: 4;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(16, calc((22rem + 10px) / 16));

  @for $i from 1 to 17 {
    $color: $color-black;
    @if $i % 2 == 0 {
      $color: $color-blue-green-1;
    }
    .circle-row-4__block-#{$i} {
      background-color: $color;
      grid-row: 1;
      grid-column: $i;
    }
  }
}

.circle-row-5 {
  grid-row: 5;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, calc(4rem + 2px));

  @for $i from 1 to 7 {
    $row-colors: $color-yellow, $color-cyan, $color-green, $color-purple,
      $color-red-1, $color-blue;
    .circle-row-5__block-#{$i} {
      background-color: nth($row-colors, $i);

      grid-row: 1;
      grid-column: $i;
    }
  }
}

.circle-row-6 {
  grid-row: 6;
  grid-column: 1;

  display: grid;
  grid-template-rows: repeat(2, 1rem);
  grid-template-columns: repeat(13, 2rem);
  gap: 1px;

  & > * {
    background-color: $color-black;
  }
}

.circle-row-7 {
  background-color: $color-black;

  grid-row: 7 / 8;
  grid-column: 1 / -1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4rem repeat(6, 3rem) 4rem;

  @for $i from 1 through 8 {
    .circle-row-7__block-#{$i} {
      grid-row: 1;
      grid-column: $i;

      & > * {
        background-color: $color-white;
      }
    }
  }

  &__block-2 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(10, calc(3rem / 10 / 2));
    grid-auto-flow: row;
    gap: calc(3rem / 10 / 2);
  }

  &__block-3 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(12, calc(3rem / 12 / 2));
    grid-auto-flow: row;
    gap: calc(3rem / 12 / 2);
  }

  &__block-4 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(16, calc(3rem / 16 / 2));
    grid-auto-flow: row;
    gap: calc(3rem / 16 / 2);
  }

  &__block-5 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(22, calc(3rem / 22 / 2));
    grid-auto-flow: row;
    gap: calc(3rem / 22 / 2);
  }

  &__block-6 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(30, calc(3rem / 30 / 2));
    grid-auto-flow: row;
    gap: calc(3rem / 30 / 2);
  }

  &__block-7 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(40, calc(3rem / 40 / 2));
    grid-auto-flow: row;
    gap: calc(3rem / 40 / 2);
  }
}

.circle-row-8 {
  grid-row: 8;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 4rem);

  @for $i from 1 through 6 {
    $color-val: 51 * ($i - 1);
    .circle-row-8__block-#{$i} {
      grid-row: 1;
      grid-column: $i;
      background-color: rgb($color-val, $color-val, $color-val);
    }
  }
}

.circle-row-9 {
  grid-row: 9;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4rem 12rem 4rem;

  &__block-2 {
    background-color: $color-black;

    grid-row: 1;
    grid-column: 2;
  }
}

.circle-row-10 {
  grid-row: 10;
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 8rem 2rem 8rem;

  &__block-1 {
    background-color: $color-yellow;

    grid-row: 1;
    grid-column: 1;
  }

  &__block-2 {
    background-color: $color-red-2;

    grid-row: 1;
    grid-column: 2;
  }

  &__block-3 {
    background-color: $color-yellow;

    grid-row: 1;
    grid-column: 3;
  }
}
</style>
