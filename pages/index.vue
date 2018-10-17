<template>
<div>
  <div>
    <label for="username">Username</label>
    <input v-model="username" type="text">
  </div>
  <div>
    <label for="password">Password</label>
    <input v-model="password" type="password">
  </div>
  <div>
    <button @click.prevent="login">Login</button>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

const emitter = require('emitter-io');

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState({client: 'client'})
  },
  mounted(){
    // this.client = new W3CWebSocket('ws://localhost:5665', 'echo-protocol');
    if(!this.client) {
      console.log('Helloooo')
      let client = emitter.connect({ host: '127.0.0.1' });
      this.$store.commit('setClient', client)
    }
  },
  methods: {
    login() {
      // this.$router.push('form');
      const data = {
        type: 'login'
      }
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    }
  },
  watch: {
    username: function(name) {
      const data = {
        type: 'username',
        value: name
      }
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    password: function(pass) {
      const data = {
        type: 'password',
        value: pass
      }
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    }
  }
}
</script>
