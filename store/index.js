import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state : {
        client: null
    },
    mutations: {
        setClient(state, client) {
            state.client = client
        }
    }
  });
}

export default store