<template>
  <div>
    <div class="weather_cards" v-if="!isLoading">
      <WeatherCard
        v-for="weather in weatherList5days"
        :key="weather.id"
        :weather="weather"
      />
    </div>
    <HightlightCardHumidity :humidity="todayHumidity" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Weather } from "../../models/Weather";
import WeatherCard from "../components/WeatherCard.vue";
import HightlightCardHumidity from "@/components/HightlightCardHumidity.vue";

export default defineComponent({
  props: {
    weatherList: {
      type: Array as PropType<Weather[]>,
      required: true
    }
  },
  components: {
    WeatherCard,
    HightlightCardHumidity
  },
  computed: {
    weatherList5days(): Weather[] {
      return [...this.weatherList].splice(1, 5);
    },
    todayHumidity(): number {
      return this.weatherList[0].humidity;
    }
  }
});
</script>

<style lang="scss">
.weather_cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
}
</style>
