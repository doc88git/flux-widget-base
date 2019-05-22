<template>
  <section class="container">
    <div>
      <h1 class="title">core-base</h1>
      <h2 class="subtitle">Flux</h2>
      <div>Sum: {{ sum }}</div>
      <div>
        <button @click="addToSum">+add</button>
      </div>
      <div>
        <f-icon name="extension" type="outlined" lib="material" />
        <f-button label="label" icon="close" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters({ sum: ['counter/sum'] })
  },
  mounted() {
    this.addToSum()
    console.log(this.$f)
  },
  methods: {
    addToSum() {
      this.$store.dispatch('counter/increment')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
