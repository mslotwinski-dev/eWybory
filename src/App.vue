<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
  },
})
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
