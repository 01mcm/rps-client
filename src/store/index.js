import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        SEND_MESSAGE(state, payload) {
            state.messages.push(payload)
        }
    },
    actions: {
        sendMessage(context, payload) {
            context.commit('SEND_MESSAGE', payload)
        
            this.$socket.emit('message', {
                screen: payload.screen
            })
        }
    }
})

export default store