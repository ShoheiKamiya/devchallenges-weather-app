<template>
  <div>
    search
    <SearchLocation />
    <button @click="emitClose">close</button>
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
