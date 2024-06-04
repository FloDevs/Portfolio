<template>
  <div class="scroll-to-top" v-on:click="scrollTop">
    <img
      src="../assets/mylogo.png"
      alt="Logo de Florian Bouteiller qui permet de remonter en haut de la page au click"
    />
  </div>
</template>

<script setup>
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
}
.scroll-to-top img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
