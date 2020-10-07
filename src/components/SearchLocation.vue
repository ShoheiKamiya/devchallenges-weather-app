<template>
  <div class="search-location">
    <input
      class="input"
      type="text"
      placeholder="search location"
      @input="search"
      ref="locationInput"
    />
    <BaseLoading class="loading" v-if="isSearching" />
  </div>
  <ul>
    <li v-for="city in suggestedCities" :key="city.woeid">{{ city.title }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ComponentPublicInstance, PropType } from "vue";
import { fetchLocation } from "@/api/metaWeather";
import { debounce } from "throttle-debounce";
import { Location } from "../../models/Location";
import BaseLoading from "@/components/BaseLoading.vue";

export default defineComponent({
  components: {
    BaseLoading
  },
  data() {
    return {
      suggestedCities: [] as PropType<Location[]>,
      isSearching: false
    };
  },
  methods: {
    search: debounce(200, function(
      this: ComponentPublicInstance<
        {},
        {},
        { suggestedCities: Location[]; isSearching: boolean }
      >
    ): void {
      const locationInput = this.$refs.locationInput as HTMLInputElement;
      const city = locationInput.value;
      if (city === "") {
        this.suggestedCities = [];
        this.isSearching = false;
        return;
      }
      this.isSearching = true;
      fetchLocation(city).then(res => {
        this.suggestedCities = res.data;
        this.isSearching = false;
      });
    })
  }
});
</script>

<style lang="scss" scoped>
.search-location {
  position: relative;
  width: 268px;

  .input {
    width: 100%;
    height: 47px;
    padding: 15px;
    border: 1px solid #e7e7eb;
  }

  .loading {
    position: absolute;
    top: 13px;
    right: 13px;
  }
}
</style>
