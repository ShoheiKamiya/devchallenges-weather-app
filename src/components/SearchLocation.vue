<template>
  <input
    class="search-location"
    type="text"
    placeholder="search location"
    @input="search"
    ref="locationInput"
  />
  <ul>
    <li v-for="city in suggestedCities" :key="city.woeid">{{ city.title }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ComponentPublicInstance, PropType } from "vue";
import { fetchLocation } from "@/api/metaWeather";
import { debounce } from "throttle-debounce";
import { Location } from "../../models/Location";

export default defineComponent({
  data() {
    return {
      suggestedCities: [] as PropType<Location[]>
    };
  },
  methods: {
    search: debounce(1000, function(
      this: ComponentPublicInstance<{}, {}, { suggestedCities: Location[] }>
    ): void {
      const locationInput = this.$refs.locationInput as HTMLInputElement;
      const city = locationInput.value;
      if (city === "") {
        this.suggestedCities = [];
        return;
      }
      fetchLocation(city).then(res => {
        this.suggestedCities = res.data;
      });
    })
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
