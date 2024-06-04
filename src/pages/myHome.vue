<template>
  <div class="border">
    <myHeader />
    <div class="background">
      <myPresentation />
      <myCreations2 />
      <myForm />
    </div>
    <myFooter />
    <myButton />
  </div>
</template>

<script setup>
import myHeader from "@/components/myHeader.vue";
import myButton from "@/components/myButton.vue";
import myFooter from "@/components/myFooter.vue";
import myCreations2 from "@/components/myCreations(2).vue";
import myPresentation from "@/components/myPresentation.vue";
import myForm from "@/components/myForm.vue";
</script>

<style scoped>
.background {
  background-image: url(../assets/img.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 5rem;
}
.border {
  border: 1rem solid black;
}
</style>
