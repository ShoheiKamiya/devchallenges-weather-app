<template>
  <div>
    <div v-if="!isLoading" class="weather_cards">
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
  components: {
    WeatherCard,
    HightlightCardHumidity,
    HightlightCardWind
  },
  props: {
    weatherList: {
      type: Array as PropType<Weather[]>,
      required: true
    }
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
