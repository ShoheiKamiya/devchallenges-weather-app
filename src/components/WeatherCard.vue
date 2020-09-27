<template>
  <div class="weather_card">
    <div>
      <p class="weather_card__date">
        {{ weather.applicableDate }}
      </p>
      <WeatherCardIcon :weatherStateAbbr="abbr" />
    </div>
    <div class="weather_card__temp_wrapper">
      <div class="weather_card__temp_wrapper--max">{{ maxTemp }}℃</div>
      <div class="weather_card__temp_wrapper--min">{{ minTemp }}℃</div>
    </div>
  </div>
</template>

<script lang="ts">
import WeatherCardIcon from "@/components/WeatherCardIcon.vue";
import { defineComponent, PropType } from "vue";
import { Weather } from "../../models/Weather";

export default defineComponent({
  components: {
    WeatherCardIcon
  },
  props: {
    weather: {
      type: Object as PropType<Weather>,
      required: true
    }
  },
  computed: {
    maxTemp(): number {
      return Math.round(this.weather.maxTemp);
    },
    minTemp(): number {
      return Math.round(this.weather.minTemp);
    },
    abbr(): string {
      return this.weather.weatherStateAbbr;
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.weather_card {
  width: 120px;
  height: 177px;
  padding: 20px 18px;
  background: $color-base;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  &__date {
    margin-bottom: 10px;
  }

  &__icon {
    width: 55px;
    margin: 0 auto;
  }

  &__temp_wrapper {
    display: flex;
    justify-content: space-between;
    &--min {
      color: #a09fb1;
    }
  }
}
</style>
