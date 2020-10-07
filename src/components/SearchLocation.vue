<template>
  <div class="search-location">
    <input
      ref="locationInput"
      class="input"
      type="text"
      placeholder="search location"
      @input="search"
    />
    <BaseLoading v-if="isSearching" class="loading" />
  </div>

  <div v-show="suggestedCities.length" class="balloon-top">
    <ul class="suggestions">
      <li
        v-for="city in suggestedCities"
        :key="city.woeid"
        class="suggested-city"
        @click="switchLocation(city)"
      >
        {{ city.title }}
      </li>
    </ul>
  </div>
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
  emits: ["switch-location"],
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
    }),
    switchLocation(city: Location): void {
      const locationInput = this.$refs.locationInput as HTMLInputElement;
      locationInput.value = city.title;
      this.suggestedCities = [];
      this.$emit("switch-location", city);
    }
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

.suggestions {
  line-height: 47px;
  max-height: 300px;
  overflow: scroll;
  margin-top: 10px;

  .suggested-city {
    padding: 0 15px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }
  }
}

.balloon-top {
  position: relative;
  display: inline-block;
  width: 268px;
  margin: 1.5em 0;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.3);

  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -15px;
    border: 10px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255, 0.3);
  }
}
</style>
