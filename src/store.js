import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        work: {
            minute:0,
            seconds:25
        },
        cycles:8,
        rest:{
            minute:0,
            seconds:10
        }
    },
    getters: {
       
        getWork: state => {
            let minute = (state.work.minute <= 9)? `0${state.work.minute}`:state.work.minute;
            let seconds = (state.work.seconds <= 9)? `0${state.work.seconds}`:state.work.seconds;

            return `${minute}:${seconds}`;
        },
        getRest: state => {
            let minute = (state.rest.minute <= 9)? `0${state.rest.minute}`:state.rest.minute;
            let seconds = (state.rest.seconds <= 9)? `0${state.rest.seconds}`:state.rest.seconds;

            return `${minute}:${seconds}`;
        },
        getTime: state =>{
            let seconds = state.work.seconds + state.rest.seconds;
            let minute  = state.work.minute  + state.rest.minute;

            let total_minute = minute * state.cycles;
            let total_seconds = seconds * state.cycles;

            while(total_seconds >= 60){
                total_seconds = total_seconds - 60;
                total_minute = total_minute + 1;
            }
            total_minute = (total_minute <= 9)? `0${total_minute}`:total_minute;
            total_seconds = (total_seconds <= 9)? `0${total_seconds}`:total_seconds;
            return `${total_minute}:${total_seconds}`
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
            
        },
        addWorkTime(state){
            let seconds = state.work.seconds;
            let minute  = state.work.minute;

            if(seconds == 59){
                state.work.seconds = 0;
                state.work.minute = minute + 1;
            }else{
                state.work.seconds = seconds + 1;
            }

            if(minute == 59){
                state.work.seconds = 25;
                state.work.minute = 0;
            }
        },
        deleteWorkTime(state){
            let seconds = state.work.seconds;
            let minute  = state.work.minute;

            if(seconds == 0){
                state.work.minute = minute - 1;
                state.work.seconds = 59;
            }else if(seconds == 0 && minute == 0){
                state.work.minute = 0;
                state.work.seconds = 25;
            }else{
                state.work.seconds = seconds - 1;
            }
        },
        addRestTime(state){
            let seconds = state.rest.seconds;
            let minute  = state.rest.minute;

            if(seconds == 59){
                state.rest.seconds = 0;
                state.rest.minute = minute + 1;
            }else{
                state.rest.seconds = seconds + 1;
            }

            if(minute == 59){
                state.rest.seconds = 25;
                state.rest.minute = 0;
            }
        },
        deleteRestTime(state){
            let seconds = state.rest.seconds;
            let minute  = state.rest.minute;

            if(seconds == 0){
                state.rest.minute = minute - 1;
                state.rest.seconds = 59;
            }else if(seconds == 0 && minute == 0){
                state.rest.minute = 0;
                state.rest.seconds = 25;
            }else{
                state.rest.seconds = seconds - 1;
            }
        }
    }
});

export default store;