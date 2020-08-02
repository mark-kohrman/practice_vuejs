var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    cool: "This is where the cool stuff is",
    exit: "Exit page here"
  },
  methods: {
    changeMessage: function () {
      console.log('changing message..');
      console.log(this.$data);
      this.message = "Goodbye from Ruby";
    }
  }

});