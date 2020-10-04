<template>
  <div class="root">
    <template v-if="!isLoading">
      <nav class="nav">
        <WeatherToday
          :title="title"
          :weather="weatherToday"
          v-show="!isSearching"
          @search="openSearch"
        />
        <SearchCard v-show="isSearching" @close="this.closeSearch" />
      </nav>
      <Main class="main" :weatherList="weatherList" />
    </template>
  </div>
</template>

<script lang="ts">
import Main from "@/views/Main.vue";
import { fetchWeather } from "@/api/metaWeather";
import { Weather } from "../models/Weather";
import { defineComponent } from "vue";
import WeatherToday from "@/components/WeatherToday.vue";
import SearchCard from "@/components/SearchCard.vue";

export default defineComponent({
  components: {
    Main,
    WeatherToday,
    SearchCard
  },
  data() {
    return {
      isLoading: true,
      isSearching: false,
      weatherList: [] as Weather[],
      title: ""
      // weatherList: data.consolidatedWeather as Weather[]
    };
  },
  mounted() {
    // TODO: いったん固定値(東京)にしておく
    fetchWeather("1118370").then(res => {
      this.weatherList = res.data.consolidatedWeather;
      this.title = res.data.title;
      this.isLoading = false;
    });
  },
  computed: {
    weatherToday(): Weather {
      return this.weatherList[0];
    }
  },
  methods: {
    openSearch(): void {
      this.isSearching = true;
    },
    closeSearch(): void {
      this.isSearching = false;
    }
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap");
@import "@/assets/variables.scss";

#app {
  font-family: "Raleway", sans-serif;
  color: $color-text;
  background: $color-background;
  font-size: 16px;
  height: 100vh;
}

.root {
  display: flex;

  .nav {
    width: 459px;
    height: 100vh;
    background: $color-base;
  }

  .main {
    height: 100vh;
    width: 100%;
    max-width: 981px;
    padding: 42px 123px 50px 154px;
  }
}
</style>
