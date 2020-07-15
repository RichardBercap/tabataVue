<template>
  <div id="app">
    <h1>Tabata Timer</h1> 
    <Options/>
    <section class="main">
      <div class="time_work" v-if="(!show_rest && !show_work)">
          <h3>
            {{work_cycle}}
          </h3>
      </div>
      <div class="time_work" v-if="show_work">
        <h3 class="text-center">Work</h3>
        <h3 class="text-center">{{timer_work}}</h3>  
      </div>
      <div class="time_work" v-if="show_rest">
        <h3 class="text-center">Rest</h3>
        <h3 class="text-center">{{timer_rest_web}}</h3>  
      </div>
    </section>
    <section class="container">
      
      <button type="button" @click="start">Start</button>
    </section>
  </div>
</template>

<script>
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
    Options
  },
  computed:{
    
    workTime(){
        return this.$store.getters.getWork;
      },
    work(){
      return this.$store.state.work;
    },
    timer_work(){
       let minute = (this.timer.minute <= 9)? `0${this.timer.minute}`:this.timer.minute;
       let seconds = (this.timer.seconds <= 9)? `0${this.timer.seconds}`:this.timer.seconds;

        return `${minute}:${seconds}`;
    },
    timer_rest_web(){
      let minute = (this.timer_rest.minute <= 9)? `0${this.timer_rest.minute}`:this.timer_rest.minute;
       let seconds = (this.timer_rest.seconds <= 9)? `0${this.timer_rest.seconds}`:this.timer_rest.seconds;

        return `${minute}:${seconds}`;
    }
  },
  watch:{
    workTime(){
      this.work_cycle = this.workTime
    },
    
  },
  data(){
    return{
      work_cycle:this.$store.getters.getWork,
      timer:{
        minute:0,
        seconds:0
      },
      timer_rest:{
        minute:0,
        seconds:0
      },
      cycles:this.$store.state.cycles,
      show_work:false,
      show_rest:false
    }
  },
  methods:{
    work_start(){
     
      
        if(this.timer.seconds == 0 && this.timer.minute > 0){
          this.timer.minute = this.timer.minute  - 1;
      
        }else if(this.timer.seconds == 0  && this.timer.minute == 0){
          this.timer.minute = this.$store.state.work.minute;
          this.timer.seconds = this.$store.state.work.seconds;
          this.show_rest = true;
          this.show_work = false;
          this.cycles--;
        }else if(this.timer.seconds > 0){
         
          this.timer.seconds--;
        }
        

     
    },
    rest_start(){
      
        if(this.timer_rest.seconds == 0 && this.timer_rest.minute > 0){
          this.timer_rest.minute = this.timer_rest.minute  - 1;
        }else if(this.timer_rest.seconds == 0 && this.timer_rest.minute == 0){
          this.timer_rest.minute = this.$store.state.rest.minute;
          this.timer_rest.seconds = this.$store.state.rest.seconds;
          this.show_rest = false;
          this.show_work = true;
        }else if(this.timer_rest.seconds > 0){
          this.timer_rest.seconds--;
        }

      
    },
    start(){
      this.timer.minute = this.$store.state.work.minute;
      this.timer.seconds = this.$store.state.work.seconds;
      this.timer_rest.minute = this.$store.state.rest.minute;
      this.timer_rest.seconds = this.$store.state.rest.seconds;
      
      this.show_work = true;
      let interval = setInterval(()=>{
        
        if(this.cycles == 0){
          
          this.cycles = this.$store.state.cycles;

          this.timer.minute = this.$store.state.work.minute;
          this.timer.seconds = this.$store.state.work.seconds;
          this.timer_rest.minute = this.$store.state.rest.minute;
          this.timer_rest.seconds = this.$store.state.rest.seconds;
          this.show_work = false;
          this.show_rest = false;
          clearInterval(interval);
        }
        if(this.show_rest){
          this.rest_start();
         
        }
        if(this.show_work){
          this.work_start();
          
        }
        
      },1000);
    }
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
