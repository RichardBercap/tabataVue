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
         <h5 slot="value">{{work}}</h5>
       </Option>
       <Option :option_name="{name:'Rest'}">
         <h5 slot="value">{{rest}}</h5>
       </Option>
       <Option :option_name="{name:'Time'}">
         <h5 slot="value">{{time}}</h5>
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
    
  },
  methods:{
    addCycles(){
      this.$store.commit('addCycles');
    },
    deleteCycles(){
      this.$store.commit('deleteCycles');
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
