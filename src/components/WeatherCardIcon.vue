<template>
  <img class="icon" :src="iconPath" />
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

type WeatherMember = {
  [P in Abbreviation]: string;
};

export default defineComponent({
  props: {
    weatherStateAbbr: {
      type: String as PropType<Abbreviation>,
      required: true
    }
  },
  computed: {
    iconPath(): string {
      const abbrToFileName: WeatherMember = {
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
      // TODO: 動的requireは危険なので、多少冗長になっても直す
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
      return require(`../assets/${abbrToFileName[this.weatherStateAbbr]}.png`);
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.icon {
  width: 55px;
  margin: 0 auto;
}
</style>
