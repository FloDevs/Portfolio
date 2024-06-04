<template>
  <header>
    <img
      src="../assets/20200802_151723.jpg"
      alt="Photo de Florian Bouteiller, jeune homme blond avec des yeux bleu"
      class="picture"
    />

    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/creations">Créations</router-link></li>
        <li><router-link to="/error">Expérience</router-link></li>
        <li><router-link to="/error">À propos</router-link></li>
        <li><router-link to="/contacts">Contacts</router-link></li>
      </ul>
    </nav>

    <img
      src="../assets/mylogo.png"
      alt="Logo de Florian Bouteiller représentant la lettre F en violet et D en orange , collé avec un style graphique "
      class="logo"
    />
  </header>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap");
header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poetsen One", sans-serif;
  background-color: #bba7d1;
  height: 15rem;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.picture {
  width: 10rem;
  height: 14rem;
  border-radius: 50%;
  margin-right: auto;
  margin-left: 10%;
}
nav ul {
  list-style: none;
  display: flex;
}
nav li {
  font-size: 3rem;
  padding: 2rem;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}
nav li:hover {
  border-color: rgb(115, 5, 241);
}
.logo {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 10%;
}
</style>
