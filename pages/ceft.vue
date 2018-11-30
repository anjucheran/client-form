<template>
<div>
    <div>
      <label for="fieldName:ACTUAL.NIC.NO">Amount</label>
      <input v-model="fieldName_credit_amount" type="text">
    </div>
    <button @click.prevent="validate">Validate</button>
</div>
</template>

<script>
    const emitter = require('emitter-io');
    import { mapState } from 'vuex'
    
    export default {
        data() {
            return {
                fieldName_credit_amount: ''
            }
        },
        computed: {
            ...mapState({client: 'client'})
        },
        mounted(){
            if(!this.client) {
                console.log('Helloooo')
                let client = emitter.connect({ host: '127.0.0.1' });
                this.$store.commit('setClient', client)
            }
        },
        watch: {
            fieldName_credit_amount: function(value) {
                const data = {
                    type: 'fieldName_credit_amount',
                    value: value
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            }
        },
        methods: {
            validate() {
                const data = {
                    type: 'ceft-validate'
                }
                this.client.publish({
        key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
        channel: "user/user2/",
        message: JSON.stringify(data)
      });
            }
        }
    }
</script>