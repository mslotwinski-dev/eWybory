<template>
  <div class="main" :key="election" v-for="election in elections">
    <header>Wybory {{ name[election.type] }} {{ election.year }}</header>
    <Elect
      v-for="party in election.elections"
      :key="party"
      :party="party"
      :electiontype="election.type"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Elect from '@/components/Elect.vue'
import elections from '@/static/choices'

export default defineComponent({
  components: {
    Elect,
  },
  data() {
    return {
      elections,
      name: ['samorządowe', 'europejskie', 'prezydenckie', 'parlamentarne'],
    }
  },
})
</script>

<style lang="scss">
.main {
  max-width: 1000px;
  margin: 10px auto;
}

header {
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 19px;
  font-weight: 500;
}
</style>
