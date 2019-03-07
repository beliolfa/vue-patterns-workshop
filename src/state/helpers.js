import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const authMethods = mapActions('auth', ['logIn', 'logOut'])

export const shoppingComputed = {
  ...mapState('shoppingList', {
    items: (state) => state.items,
  }),
}

export const shoppingListMethods = mapActions('shoppingList', [
  'addItem',
  'deleteItem',
])
