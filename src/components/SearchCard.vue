<template>
  <div class="search-card">
    <button class="close-button" @click="emitClose">
      <span class="material-icons icon clear">clear</span>
    </button>
    <SearchLocation />
  </div>
</template>

<script lang="ts">
import SearchLocation from "@/components/SearchLocation.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    SearchLocation
  },
  methods: {
    emitClose(): void {
      this.$emit("close");
    }
  }
});
</script>

<style lang="scss">
.search-card {
  display: flex;
  flex-direction: column;
  .close-button {
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    font-size: 12px;
    align-self: flex-end;
    margin-bottom: 20px;
    .clear {
      line-height: 30px;
    }
    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
