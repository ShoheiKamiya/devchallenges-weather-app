<template>
  <div class="root">
    <nav class="nav">nav</nav>
    <Main class="main" />
  </div>
</template>

<script lang="ts">
import Main from "@/views/Main.vue";

export default {
  components: {
    Main
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap");
@import "@/assets/variables.scss";

#app {
  font-family: "Raleway", sans-serif;
  color: $color-text;
  background: $color-background;
  font-size: 16px;
}

.root {
  display: flex;

  .nav {
    width: 459px;
    background: $color-base;
  }

  .main {
    padding: 42px 123px 50px 154px;
  }
}
</style>
