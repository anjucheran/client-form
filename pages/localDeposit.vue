<template>
<div>
    <div>
      <label for="fieldName:ACTUAL.NIC.NO">Amount</label>
      <input v-model="fieldName_amount_local_1_1" type="text">
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
                fieldName_amount_local_1_1: ''
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
            fieldName_amount_local_1_1: function(value) {
                const data = {
                    type: 'fieldName_amount_local_1_1',
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
                    type: 'validate'
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