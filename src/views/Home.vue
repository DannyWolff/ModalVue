<template>
  <div class="home">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Test Modal Vue App" />
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Modal,
  },
};
</script>
