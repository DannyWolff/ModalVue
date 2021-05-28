<template>
  <div class="modal">
    <div class="modal-overlay">
      <div class="modal-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          perspiciatis!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,</p>
        <p>perspiciatis!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-overlay {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(75, 108, 255, 0.2);
}

.modal-content {
  margin-top: 0;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  background-color: rgba(250, 235, 215, 0.4);
}
</style>
