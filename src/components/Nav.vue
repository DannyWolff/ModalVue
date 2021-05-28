<template>
  <nav id="nav" class="bg-green-200">
    <router-link @click="doSomething" to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/faq">FAQ</router-link>
  </nav>
</template>

<script>
export default {
  name: "Faq",
  props: {
    msg: String,
  },
  methods: {
    doSomething() {
      console.log("Console Log :>> ");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
