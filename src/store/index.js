import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    addedItems: 0,
    cart: [],
    items: [
      {
        avail: 5,
        quantity2: 1,
        id: 1,
        photo: 'assets/blue.jpg',
        title: 'socks',
        amount: 50,
      },
      {
        avail: 5,
        quantity2: 1,
        id: 2,
        photo: 'assets/tshirt.jpg',
        title: 't-shirt',
        amount: 150,
      },
      {
        avail: 5,
        quantity2: 1,
        id: 3,
        photo: 'assets/heels.jpg',
        title: 'Heels',
        amount: 550,
      },
      {
        avail: 5,
        quantity2: 1,
        id: 4,
        photo: 'assets/green.jpg',
        title: 'green Socks',
        amount: 50,
      },
      {
        avail: 5,
        quantity2: 1,
        id: 5,
        photo: 'assets/head.jpg',
        title: 'HeadePhone',
        amount: 150,
      },
      {
        avail: 5,
        quantity2: 1,
        id: 6,
        photo: 'assets/kurti2.jpg',
        title: 'Kurties',
        amount: 405,
      },
    ],
  }),
  getters: {
    allItems: (state) => {
      return state.items
    },

    cartItems: (state) => {
      return state.cart
    },
    total: (state) => {
      var sum = 0
      state.cart.filter((item) => {
        sum += item.amount * item.quantity2
      })
      return sum
    },
  },
  actions: {
    add(item) {
      var findProduct = this.cart.find((e) => e.id == item.id)
      if (findProduct) {
        findProduct.quantity2 += 1
        findProduct.avail = findProduct.avail - 1
        return
      }
      this.cart.push(item)
    },
  },
})
