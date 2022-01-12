import { createStore } from 'vuex'

export default createStore({
    state: {
        persons: [],
    },
    getters: {
        getPersons(state) {
            return state.persons
        }
    },
    mutations: {
        setPersons(state, persons) {
            state.persons = persons
        },
    },
    actions: {
        setPersons({ commit }, persons) {
            commit('getPersons', persons)
        },
    },
})