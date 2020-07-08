import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        work: 0,
        cycles:0,
        rest:0,
        time:0
    },
    getters: {
        getWork: state => {
          return state.work;
        }
    },
    mutations:{
        addCycles(state){
            state.cycles++;
        },
        deleteCycles(state){
            if(state.cycles > 0){
                state.cycles--;
            }else{
                state.cycles = 0;
            }
            
        }
    }
});

export default store;