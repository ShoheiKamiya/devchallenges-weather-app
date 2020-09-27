<template>
  <div id="nav"><router-link to="/">Home</router-link> |</div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap");
@import "@/assets/variables.scss";

#app {
  font-family: "Raleway", sans-serif;
  color: $color-text;
}
</style>
