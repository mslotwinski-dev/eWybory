<template>
  <div class="h"></div>
  <nav>eWybory</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.h {
  height: 60px;
}
nav {
  height: 60px;
  width: 100vw;
  background: theme(main);
  position: fixed;
  top: 0;
  color: theme(light);
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-left: 10vw;
}
</style>
