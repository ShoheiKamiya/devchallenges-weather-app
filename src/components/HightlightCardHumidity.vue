<template>
  <HighlightCard class="humidity-card">
    <p class="title">Humidity</p>
    <p class="data">{{ humidity }}<span class="unit">%</span></p>
    <div class="indicator">
      <div class="scale-wrapper">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div class="bar">
        <div class="bar-inner" :style="styleObject" />
      </div>
      <div class="percentage">%</div>
    </div>
  </HighlightCard>
</template>

<script>
import HighlightCard from "@/components/HightlightCard";

export default {
  components: {
    HighlightCard
  },
  props: {
    humidity: {
      type: Number,
      required: true
    }
  },
  computed: {
    styleObject() {
      return {
        width: `${this.humidity}%`
      };
    }
  }
};
</script>

<style scoped lang="scss">
.humidity-card {
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
  .indicator {
    width: 229px;
    margin: 0 auto;
    color: #a09fb1;
    .scale-wrapper {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
    }
    .bar {
      width: 100%;
      height: 8px;
      background: #fff;
      margin: 0 auto 4px;
      border-radius: 4px;
      .bar-inner {
        width: 84%;
        height: 8px;
        border-radius: 4px;
        background: #ffec65;
      }
    }
    .percentage {
      text-align: right;
    }
  }
}
</style>
