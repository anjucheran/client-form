<template>
  <div>
    <div>
      <label for="fieldName:ACTUAL.NIC.NO">Actual NIC no</label>
      <input v-model="actual_nic_no" @focus="focused" @blur="blured" type="text" id="fieldName:ACTUAL.NIC.NO">
    </div>
    <div>
      <label for="fieldName:GIVEN.NAMES">Given Name</label>
      <input v-model="given_names" type="text" id="fieldName:GIVEN.NAMES">
    </div>
    <div>
      <label for="fieldName:FAMILY.NAME">Family Name</label>
      <input v-model="family_name" type="text" id="fieldName:FAMILY.NAME">
    </div>
    <div>
      <label for="fieldName:SHORT.NAME:1">GB Name with Initial</label>
      <input v-model="short_name_1" type="text" id="fieldName:SHORT.NAME:1">
    </div>
    <div>
      <label for="fieldName:DATE.OF.BIRTH">Date of Birth</label>
      <input v-model="date_of_birth" type="text" id="fieldName:DATE.OF.BIRTH">
    </div>
    <div>
      <label for="fieldName:NAME.2:1">Mailing Add 1</label>
      <input v-model="name_2_1" type="text" id="fieldName:NAME.2:1">
    </div>
    <div>
      <label for="fieldName:STREET:1">Address 2</label>
      <input v-model="street_1" type="text" id="fieldName:STREET:1">
    </div>
    <div>
      <label for="fieldName:ADDRESS:1:1">Address 3</label>
      <input v-model="address_1_1" type="text" id="fieldName:ADDRESS:1:1">
    </div>
    <div>
      <label for="fieldName:TOWN.COUNTRY:1">GB Town City</label>
      <input v-model="town_country_1" type="text" id="fieldName:TOWN.COUNTRY:1">
    </div>
    <div>
      <label for="fieldName:ACCOUNT.OFFICER">Account Officer</label>
      <input v-model="account_officer" type="text" id="fieldName:ACCOUNT.OFFICER">
    </div>
    <div>
      <label for="fieldName:GENDER">Gender</label>
      <select v-model="gender" id="fieldName:GENDER">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div>
      <button @click.prevent="submit">submit</button>
    </div>
  </div>
</template>

<script>

const W3CWebSocket = require('websocket').w3cwebsocket;
const emitter = require('emitter-io');

import { mapState } from 'vuex'

export default {
  data() {
    return {
      actual_nic_no: '',
      given_names: '',
      family_name: '',
      short_name_1: '',
      date_of_birth: '',
      name_2_1: '',
      street_1: '',
      address_1_1: '',
      town_country_1: '',
      account_officer: '',
      gender: 'male',
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
    blured(event) {
      const data = {
        type: `blur`,
        id: event.target.id
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    submit() {
      const data = {
        type: 'submit'
      }
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    focused(event) {
      const data = {
        type: `focus`,
        id: event.target.id
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    }
  },
  watch: {
    actual_nic_no: function(actual_nic_no) {
      const data = {
        type: 'actual_nic_no',
        value: actual_nic_no
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    given_names: function(given_names) {
      const data = {
        type: 'given_names',
        value: given_names
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    family_name: function(family_name) {
      const data = {
        type: 'family_name',
        value: family_name
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    short_name_1: function(short_name_1) {
      const data = {
        type: 'short_name_1',
        value: short_name_1
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    date_of_birth: function(date_of_birth) {
      const data = {
        type: 'date_of_birth',
        value: date_of_birth
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    name_2_1: function(name_2_1) {
      const data = {
        type: 'name_2_1',
        value: name_2_1
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    street_1: function(street_1) {
      const data = {
        type: 'street_1',
        value: street_1
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    address_1_1: function(address_1_1) {
      const data = {
        type: 'address_1_1',
        value: address_1_1
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    town_country_1: function(town_country_1) {
      const data = {
        type: 'town_country_1',
        value: town_country_1
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    account_officer: function(account_officer) {
      const data = {
        type: 'account_officer',
        value: account_officer
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    },
    gender: function(gender) {
      const data = {
        type: 'gender',
        value: gender
      }
      // this.client.send(JSON.stringify(data));
      this.client.publish({
        key: "lllg395SK8GCxZz0dQA0H4JTD2cUE-ie",
        channel: "chat/filler/",
        message: JSON.stringify(data)
      });
    }
  }
}
</script>

<style>
  div {
    margin: 1rem 1rem;
  }
  label {
    margin-right: 2rem; 
  }
</style>
