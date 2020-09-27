<template>
  <div>
    <template v-if="!isLoading">
      <WeatherCard
        v-for="weather in weathers"
        :key="weather.id"
        :weather="weather"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchWeather } from "../api/fetchWeather";
import WeatherCard from "../components/WeatherCard.vue";
import { Weather } from "../../models/Weather";

export default defineComponent({
  components: {
    WeatherCard
  },
  data() {
    return {
      isLoading: true,
      weathers: [] as Weather[]
    };
  },
  mounted() {
    // TODO: いったん固定値にしておく
    fetchWeather("2487956").then(res => {
      this.weathers = res.data.consolidatedWeather;
      this.isLoading = false;
    });
  }
});
</script>
