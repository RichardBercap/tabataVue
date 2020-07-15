<template>
  <div class="options-tabata">
    <section class="options">
       <Option :option_name="{name:'Cycles'}" >
         <h5 slot="value">{{cycles}}</h5>
         <template slot="options">
           <button type="button" @click="addCycles">+</button>
           <button type="button" @click="deleteCycles">-</button>
         </template>
       </Option>
       <Option :option_name="{name:'Work'}">
         <h5 slot="value">{{workTime}}</h5>
         <template slot="options">
           <button type="button" @click="addWorkTime">+</button>
           <button type="button" @click="deleteWorkTime">-</button>
         </template>
       </Option>
       <Option :option_name="{name:'Rest'}">
         <h5 slot="value">{{restTime}}</h5>
         <template slot="options">
           <button type="button" @click="addRestTime">+</button>
           <button type="button" @click="deleteRestTime">-</button>
         </template>
       </Option>
       <Option :option_name="{name:'Time'}">
         <h5 slot="value">{{getTime}}</h5>
       </Option>
    </section>
     
  </div>
</template>

<script>
import Option from './Option';
import { mapState } from 'vuex'
export default {
  name: 'Options',
  props: {
    //msg: String
  },
  components:{
      Option
  },
  computed:{
      ...mapState(['work','cycles','rest','time']),
      workTime(){
        return this.$store.getters.getWork;
      },
      restTime(){
        return this.$store.getters.getRest;
      },
      getTime(){
        return this.$store.getters.getTime;
      }
  },
  methods:{
    addCycles(){
      this.$store.commit('addCycles');
    },
    deleteCycles(){
      this.$store.commit('deleteCycles');
    },
    addWorkTime(){
      this.$store.commit('addWorkTime');
    },
    deleteWorkTime(){
      this.$store.commit('deleteWorkTime');
      
    },
    addRestTime(){
      this.$store.commit('addRestTime');
    },
    deleteRestTime(){
      this.$store.commit('deleteRestTime');
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .options{
        display: flex;
        margin: 5% 10%;
    }
</style>
