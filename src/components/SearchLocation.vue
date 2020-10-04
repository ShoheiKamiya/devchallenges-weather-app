<template>
  <input
    class="search-location"
    type="text"
    placeholder="search location"
    @input="search"
    ref="locationInput"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchLocation } from "@/api/metaWeather";

export default defineComponent({
  methods: {
    search(): void {
      const LocationInput = this.$refs.locationInput as HTMLInputElement;
      const city = LocationInput.value;
      // TODO: use throttle
      fetchLocation(city).then(res => {
        console.log(res.data);
      });
    },
    hoge(test: string) {
      console.log(test);
    }
  }
});
</script>

<style lang="scss" scoped>
.search-location {
  width: 268px;
  height: 47px;
  padding: 15px;
  border: 1px solid #e7e7eb;
}
</style>
