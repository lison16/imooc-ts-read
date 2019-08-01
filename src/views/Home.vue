<template>
  <div class="home">
    <count-to @on-click="handleClick" ref="counter" :end="10000">
      <span>test</span>
      <span>test</span>
    </count-to>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CountTo from '@/components/CountTo'

@Component({
  name: 'HomePage',
  components: {
    CountTo
  }
})
export default class Home extends Vue {
  public handleClick(event) {
    console.log(event)
  }
  protected mounted() {
    setInterval(() => {
      (this.$refs.counter as CountTo).update(Math.random() * 10000)
    }, 2000)
  }
}
</script>
