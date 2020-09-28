<template>
  <div class="hightlight-card">
    <slot />
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

.hightlight-card {
  width: 328px;
  padding: 22px;
  background: $color-base;
  text-align: center;
}
</style>
