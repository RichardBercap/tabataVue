<template>
  <div id="app">
    <h1>Tabata Timer</h1> 
    <section class="container">
      <Options/>
      <button type="button">Start</button>
    </section>
    
  </div>
</template>

<script>
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
    Options
  }
}
</script>

<style>

h1{
  text-align:center;
}
.container{
  margin:5% 10%;
}
</style>
