import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abcdef', name: 'Adam' },
    categories: ['sport', 'news', 'history']
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event.data)
      })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  },
  modules: {}
})
