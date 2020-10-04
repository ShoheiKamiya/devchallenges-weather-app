<template>
  <div>
    search
    <button @click="emitClose">close</button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    emitClose(): void {
      this.$emit("close");
    }
  }
};
</script>
