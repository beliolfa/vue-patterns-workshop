export const state = {
  items: [],
}

export const mutations = {
  ADD_ITEM(state, item) {
    state.items.push(item)
  },

  DELETE_ITEM(state, item) {
    state.items = state.items.filter((i) => i !== item)
  },
}

export const getters = {}

export const actions = {
  addItem({ commit }, item) {
    commit('ADD_ITEM', item)
  },

  deleteItem({ commit }, item) {
    commit('DELETE_ITEM', item)
  },
}
