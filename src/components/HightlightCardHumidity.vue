<template>
  <HighlightCard class="humidity-card">
    <p class="humidity-card__title">Humidity</p>
    <p class="humidity-card__data">
      {{ humidity }}<span class="humidity-card__data--unit">%</span>
    </p>
    <div class="humidity-card__indicator">
      <div class="humidity-card__indicator--scale-wrapper">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div class="humidity-card__indicator--bar">
        <div class="humidity-card__indicator--bar-inner" />
      </div>
      <div class="humidity-card__indicator--percentage">%</div>
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
  }
};
</script>

<style lang="scss">
.humidity-card {
  &__title {
    margin-bottom: 11px;
  }
  &__data {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 12px;
    &--unit {
      font-size: 40px;
      font-weight: 200;
      margin-left: 5px;
    }
  }
  &__indicator {
    width: 229px;
    margin: 0 auto;
    color: #a09fb1;
    &--scale-wrapper {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
    }
    &--bar {
      width: 100%;
      height: 8px;
      background: #fff;
      margin: 0 auto 4px;
      border-radius: 4px;
      &-inner {
        width: 84%;
        height: 8px;
        border-radius: 4px;
        background: #ffec65;
      }
    }
    &--percentage {
      text-align: right;
    }
  }
}
</style>
