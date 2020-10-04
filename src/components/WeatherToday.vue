<template>
  <div class="weahter-today">
    <div class="header">
      <button class="search-button">Search for places</button>
      <span class="material-icons my-location-icon">my_location</span>
    </div>
    <WeatherCardIcon :weatherStateAbbr="abbr" class="weather-icon" />
    <p class="temp">{{ theTemp }}<span class="unit">℃</span></p>
    <p class="weather-state">{{ weather.weatherStateName }}</p>
    <div class="footer">
      <p class="date">
        <span>Today</span>
        <span> ・ </span>
        <span>{{ today }}</span>
      </p>
      <p class="location">
        <span class="material-icons icon">place</span>
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import WeatherCardIcon from "@/components/WeatherCardIcon.vue";
import { Weather } from "../../models/Weather";
import dayjs from "dayjs";

export default defineComponent({
  components: {
    WeatherCardIcon
  },
  props: {
    weather: {
      type: Object as PropType<Weather>,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    theTemp(): number {
      return Math.round(this.weather.theTemp);
    },
    abbr(): string {
      return this.weather.weatherStateAbbr;
    },
    today(): string {
      const d = dayjs(this.weather.applicableDate);
      return d.format("ddd, D, MMM");
    }
  }
});
</script>

<style lang="scss" scoped>
.weahter-today {
  width: 100%;
  height: 100%;
  padding: 42px 46px 52px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > .header {
    display: flex;
    justify-content: space-between;
    > .search-button {
      background: #6e707a;
      padding: 10px 18px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    > .my-location-icon {
      font-size: 22px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      text-align: center;
      background: #6e707a;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  > .weather-icon {
    width: 180px;
    margin: 0 auto;
  }
  > .temp {
    font-size: 120px;
    > .unit {
      font-size: 48px;
      color: #88869d;
    }
  }
  > .weather-state {
    font-size: 36px;
    font-weight: 600px;
    color: #88869d;
  }
  > .footer {
    color: #88869d;

    > .date {
      margin-bottom: 32px;
    }
    > .location {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      vertical-align: middle;
      > .icon {
        margin-right: 9px;
      }
    }
  }
}
</style>
