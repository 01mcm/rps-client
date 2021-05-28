<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
          //messages: [],
          socketId: ''
      }
  },
  computed: {
      messages() {
        return this.$store.state.messages
      }
  },
  components: {
  },
  sockets: {
      connect() {
        this.socketId = this.$socket.id
      },
      socket_serverMessage (context, payload) {
        context.commit('SEND_MESSAGE', payload)
      },
      socket_serverMessages (context, payload) {
        context.commit('SEND_MESSAGES', payload)
    },
    SEND_MESSAGES(state, payload) {
        state.messages = payload
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
