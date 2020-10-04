<template>
  <HightlightCard class="hightlight-card">
    <p class="title">Wind status</p>
    <p class="data">{{ speed }}<span class="unit">mph</span></p>

    <div class="direction">
      <span class="material-icons icon" :style="styleObject">navigation</span>
      <span>{{ wind.directionCompass }}</span>
    </div>
  </HightlightCard>
</template>

<script lang="ts">
import HightlightCard from "@/components/HightlightCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HightlightCard
  },
  props: {
    wind: {
      type: Object,
      required: true
    }
  },
  computed: {
    speed(): number {
      return Math.round(this.wind.speed);
    },
    styleObject(): object {
      return {
        transform: `rotate(${this.wind.direction}deg)`
      };
    }
  }
});
</script>

<style scoped lang="scss">
.hightlight-card {
  .title {
    margin-bottom: 11px;
  }
  .data {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 12px;
    .unit {
      font-size: 40px;
      font-weight: 200;
      margin-left: 5px;
    }
  }
  .direction {
    .icon {
      display: inline-block;
      text-align: center;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.3);
      color: #e7e7eb;
      margin-right: 10px;
    }
  }
}
</style>
