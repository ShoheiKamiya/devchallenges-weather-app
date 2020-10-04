<template>
  <div>
    <div class="weather_cards" v-if="!isLoading">
      <WeatherCard
        v-for="weather in weatherList5days"
        :key="weather.id"
        :weather="weather"
      />
    </div>
    <div class="hightlight-card-wrapper">
      <HightlightCardWind :wind="todayWind" />
      <HightlightCardHumidity :humidity="todayHumidity" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Weather } from "../../models/Weather";
import WeatherCard from "../components/WeatherCard.vue";
import HightlightCardHumidity from "@/components/HightlightCardHumidity.vue";
import HightlightCardWind from "@/components/HightlightCardWind.vue";

type Wind = {
  speed: number;
  direction: number;
  directionCompass: string;
};

export default defineComponent({
  props: {
    weatherList: {
      type: Array as PropType<Weather[]>,
      required: true
    }
  },
  components: {
    WeatherCard,
    HightlightCardHumidity,
    HightlightCardWind
  },
  computed: {
    weatherList5days(): Weather[] {
      return this.weatherList.slice(0, 5);
    },
    today(): Weather {
      // FYI: TS4.1では、コンパイルオプションによってはこのコードは通らないはず
      // https://github.com/microsoft/TypeScript/issues/13778
      return this.weatherList[0];
    },
    todayHumidity(): number {
      return this.today.humidity;
    },
    todayWind(): Wind {
      return {
        speed: this.today.windSpeed,
        direction: this.today.windDirection,
        directionCompass: this.today.windDirectionCompass
      };
    }
  }
});
</script>

<style scoped lang="scss">
.weather_cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
}

.hightlight-card-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
