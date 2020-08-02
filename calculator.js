var app = new Vue({
  el: "#app",
  data: {
    message: "hello from Vue",
    number1: 0,
    number2: 0,
    number3: 0,
    product: ""
  },

  methods: {
    computeProduct: function () {
      console.log('computing product...');
      console.log(this.number1, this.number2, this.number3);
      this.product = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);

    }
  }
});