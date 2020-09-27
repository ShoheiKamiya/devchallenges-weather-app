<template>
  <div>
    <img class="weather_card__icon" :src="iconPath" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Abbreviation =
  | "sn"
  | "sl"
  | "h"
  | "t"
  | "hr"
  | "lr"
  | "s"
  | "hc"
  | "lc"
  | "c";

export default defineComponent({
  props: {
    weatherStateAbbr: {
      type: String as PropType<Abbreviation>,
      required: true
    }
  },
  computed: {
    iconPath(): string {
      const abbrToFileName = {
        sn: "Snow",
        sl: "Sleet",
        h: "Hail",
        t: "Thunderstorm",
        hr: "HeavyRain",
        lr: "LightRain",
        s: "Shower",
        hc: "HeavyCloud",
        lc: "LightCloud",
        c: "Clear"
      };
      return require(`../assets/${abbrToFileName[this.weatherStateAbbr]}.png`);
    }
  }
});
</script>
