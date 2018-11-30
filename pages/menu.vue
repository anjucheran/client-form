<template>
<div>
    <button @click.prevent="localDeposit">Local Deposit</button>
    <button @click.prevent="foreignDeposit">Foreign Deposit</button>
    <button @click.prevent="savingsWithdrawal">Savings Account Withdrawal</button>
    <button @click.prevent="currentWithdrawal">Current Account Withdrawal</button>
    <button @click.prevent="utilityBill">Utility Bill</button>
    <button @click.prevent="creditCard">Credit Card</button>
    <button @click.prevent="ceft">CEFT</button>
    <button @click.prevent="fundTransfer">Fund Transfer</button>
    <button @click.prevent="customer">Customer</button>
    <button @click.prevent="minorCustomer">Minor Customer</button>
    <button @click.prevent="dbu">DBU</button>
    <button @click.prevent="dbuCurrent">DBU Current</button>
    <button @click.prevent="dbuDays">DBU Days</button>
    <button @click.prevent="dbuMonthly">DBU Monthly</button>
    <button @click.prevent="dbuMaturity">DBU Maturity</button>
    <button @click.prevent="dbuQuarterly">DBU Quarterly</button>
    <button @click.prevent="dbuAnnual">DBU Annual</button>
    <button @click.prevent="addHolder">Add Joint Holder</button>
    <button @click.prevent="fillHolder">Fill Joint Holder</button>
    <button @click.prevent="idbuFixed">IDBU Fixed</button>
    <button @click.prevent="signOff">Sign Off</button>
    <div>
      <label>CID</label>
      <input v-model="fieldName_customer" type="text">
    </div>
</div>
</template>

<script>
    const emitter = require('emitter-io');
    import { mapState } from 'vuex'
    
    export default {
        data() {
            return {
                fieldName_customer: '',
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
            fieldName_customer(cid) {
                const data = {
                    type: 'fieldName_customer',
                    value: cid
                }
                const data1 = {
                    type: 'fieldName_customer_id',
                    value: cid
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data1)
                });
            }
        },
        methods: {
            localDeposit() {
                const data = {
                    type: 'local-deposit'
                }
                this.client.publish({
        key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
        channel: "user/user2/",
        message: JSON.stringify(data)
      });
            },
            foreignDeposit() {
                const data = {
                    type: 'foreign-deposit'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            savingsWithdrawal() {
                const data = {
                    type: 'savings-withdrawal'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            currentWithdrawal() {
                const data = {
                    type: 'current-withdrawal'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            utilityBill() {
                const data = {
                    type: 'utility-bill'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            ceft() {
                const data = {
                    type: 'ceft'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            fundTransfer() {
                const data = {
                    type: 'fund-transfer'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            customer() {
                const data = {
                    type: 'customer'
                }
                this.client.publish({
        key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
        channel: "user/user2/",
        message: JSON.stringify(data)
      });
            },
            minorCustomer() {
                const data = {
                    type: 'minor-customer'
                }
                this.client.publish({
        key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
        channel: "user/user2/",
        message: JSON.stringify(data)
      });
            },
            dbu() {
                const data = {
                    type: 'savings',
                    company: 'dbu',
                    value: 600
                }
                this.client.publish({
        key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
        channel: "user/user2/",
        message: JSON.stringify(data)
      });
            },
            creditCard() {
                const data = {
                    type: 'credit-card'
                }
                this.client.publish({
                    key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
                    channel: "chat/filler/",
                    message: JSON.stringify(data)
                });
            },
            signOff() {
                const data = {
                    type: 'sign-off'
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            addHolder() {
                const data = {
                    type: 'joint-holders-count',
                    value: 4
                }
                this.client.publish({
        key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
        channel: "user/user2/",
        message: JSON.stringify(data)
      });
            },
            fillHolder() {
                const data = {
                    type: 'joint-holders',
                    value: [{ id: 234565, code: 1}, { id: 234566, code: 2}, { id: 234567, code: 3}]
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            dbuCurrent() {
                const data = {
                    type: 'idbu-current',
                    value: 750
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            dbuDays() {
                const data = {
                    type: 'dbu-days',
                    value: 868
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            dbuMonthly() {
                const data = {
                    type: 'dbu-monthly',
                    value: 896
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            dbuMaturity() {
                const data = {
                    type: 'dbu-maturity',
                    value: 832
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            dbuQuarterly() {
                const data = {
                    type: 'dbu-quarterly',
                    value: 853
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            dbuAnnual() {
                const data = {
                    type: 'annual',
                    value: 882,
                    company: 'fcbu'
                }
                this.client.publish({
                    key: "maCPQlaqFditoSWmR9rCKHeFwLtTO3ar",
                    channel: "user/user2/",
                    message: JSON.stringify(data)
                });
            },
            idbuFixed() {
                const data = {
                    type: 'idbu-fixed'
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
