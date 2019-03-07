<script>
import { shoppingComputed, shoppingListMethods } from '@state/helpers'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },

  components: { Layout },

  data() {
    return {
      product: '',
    }
  },

  computed: {
    ...shoppingComputed,
  },

  methods: {
    ...shoppingListMethods,

    add() {
      this.addItem(this.product)
      this.product = ''
    },
  },
}
</script>

<template>
  <Layout>
    <h1>Shoping List</h1>
    <ul>
      <li v-for="item in items" :key="item"
        >{{ item }} <button @click="deleteItem(item)">X</button></li
      >
    </ul>
    <div>
      <div><input v-model="product" name="product"/></div>
      <button @click="add()">Add Product</button>
    </div>
  </Layout>
</template>
