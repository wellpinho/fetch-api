const app = Vue.createApp({
  data() {
    return {
      title: 'Meu Banco VueJS',
      saldo: 1000,
    }
  },
  methods: {
    getMoney(value) {
      this.saldo -= value
    },
    sendMoney(value) {
      this.saldo += value

    }
  }
})