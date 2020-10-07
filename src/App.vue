<template>
  <div class="root">
    <div v-if="isLoading" class="loading-page">
      <BaseLoading class="spinner" />
    </div>
    <template v-if="!isLoading">
      <nav class="nav">
        <WeatherToday
          v-show="!isSearching"
          :title="title"
          :weather="weatherToday"
          @search="openSearch"
        />
        <SearchCard
          v-show="isSearching"
          @close="closeSearch"
          @switch-location="fetchWeather"
        />
      </nav>
      <Main class="main" :weather-list="weatherList" />
    </template>
  </div>
</template>

<script lang="ts">
import Main from "@/views/Main.vue";
import { fetchWeather } from "@/api/metaWeather";
import { Weather } from "../models/Weather";
import { Location } from "../models/Location";
import { defineComponent } from "vue";
import WeatherToday from "@/components/WeatherToday.vue";
import SearchCard from "@/components/SearchCard.vue";
import BaseLoading from "@/components/BaseLoading.vue";

export default defineComponent({
  components: {
    Main,
    WeatherToday,
    SearchCard,
    BaseLoading
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
  computed: {
    weatherToday(): Weather {
      return this.weatherList[0];
    }
  },
  mounted() {
    // TODO: いったん固定値(東京)にしておく
    fetchWeather("1118370").then(res => {
      this.weatherList = res.data.consolidatedWeather;
      this.title = res.data.title;
      this.isLoading = false;
    });
  },
  methods: {
    openSearch(): void {
      this.isSearching = true;
    },
    closeSearch(): void {
      this.isSearching = false;
    },
    fetchWeather(city: Location): void {
      const woeid = String(city.woeid);
      this.isLoading = true;
      fetchWeather(woeid).then(res => {
        this.weatherList = res.data.consolidatedWeather;
        this.title = res.data.title;
        this.isLoading = false;
        this.isSearching = false;
      });
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

  .loading-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .spinner {
      font-size: 30px;
    }
  }

  .nav {
    width: 459px;
    height: 100vh;
    padding: 20px 47px;
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
