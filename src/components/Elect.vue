<template>
  <div class="container" :style="{ backgroundColor: party.party.color }">
    <img :src="require(`@/assets/parties/${party.party.icon}`)" />
    <div class="text">
      <div class="minor">
        {{ party.person }}
      </div>
      <div class="major" :style="{ color: party.party.color }">
        {{ party.party.fullname }}
      </div>
      <div class="small">{{ party.comment }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['party', 'electiontype'],
  data() {
    return {
      personal:
        this.electiontype == 2 ||
        this.party.personal ||
        this.party.party.fullname == 'Niezależny',
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  height: 100px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
}

img {
  width: 90px;
  height: 90px;
  background: #f3f3f3;
  padding: 18px;
}
.text {
  padding: 10px;
  background: #f3f3f3;
  flex-grow: 1;
  text-align: left;
}

.major {
  font-size: 17px;
  font-weight: 600;
  margin: 2px 0;
  text-transform: uppercase;
}

.minor {
  font-weight: 600;
  font-size: 20.5px;
}
</style>
