<template>
  <div class="weather_card">
    <div>
      <p class="date">
        {{ date }}
      </p>
      <WeatherCardIcon :weatherStateAbbr="abbr" />
    </div>
    <div class="temp_wrapper">
      <div class="temp_wrapper--max">{{ maxTemp }}℃</div>
      <div class="temp_wrapper--min">{{ minTemp }}℃</div>
    </div>
  </div>
</template>

<script lang="ts">
import WeatherCardIcon from "@/components/WeatherCardIcon.vue";
import { defineComponent, PropType } from "vue";
import { Weather } from "../../models/Weather";
import dayjs from "dayjs";
import isTomorrow from "dayjs/plugin/isTomorrow";

dayjs.extend(isTomorrow);

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
    },
    date(): string {
      const d = dayjs(this.weather.applicableDate);
      if (d.isTomorrow()) {
        return "Tomorrow";
      }

      return d.format("ddd, D, MMM");
    }
  }
});
</script>

<style scoped lang="scss">
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

  .date {
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .temp_wrapper {
    display: flex;
    justify-content: space-between;
    .temp_wrapper--min {
      color: #a09fb1;
    }
  }
}
</style>
