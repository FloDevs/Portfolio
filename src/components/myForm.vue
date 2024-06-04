<template>
  <div class="contact-container">
    <h2>Contactez moi !</h2>
    <form id="contact-form" @submit.prevent="sendEmail">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" v-model="nom" required />

      <label for="email">Email :</label>
      <input type="email" id="email" name="email" v-model="email" required />

      <label for="objet">Objet :</label>
      <textarea id="objet" name="objet" v-model="objet" required></textarea>

      <label for="message">Message :</label>
      <textarea
        id="message"
        name="message"
        v-model="message"
        required
      ></textarea>

      <input type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const nom = ref("");
const email = ref("");
const message = ref("");
const objet = ref("");

function sendEmail() {
  const serviceID = "service_0fixbxm";
  const templateID = "template_bjawy5r";
  const publicKey = "X7KbQwkj9gSJNg6EE";

  emailjs.init(publicKey);

  emailjs.sendForm(serviceID, templateID, "#contact-form").then(
    () => {
      console.log("Message envoyé");
      alert("Votre message a été envoyé avec succès !");
      clearForm();
    },
    (error) => {
      console.log("erreur", error.text);
      alert("Il y a eu un problème lors de l'envoi :", error.text);
    }
  );
}

function clearForm() {
  nom.value = "";
  email.value = "";
  message.value = "";
  objet.value = "";
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&family=Roboto+Slab:wght@100..900&display=swap");
.contact-container {
  font-family: "Roboto Slab", serif;
  max-width: 40rem;
  margin: auto;
  padding: 2rem;
  padding-top: 0;
  background-color: #f9f9f9;
  border-radius: 2rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 1rem;
  color: #555;
}

input[type="text"],
input[type="email"],
textarea {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  width: 100%;
  box-sizing: border-box;
}
#message {
  height: 10rem;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
