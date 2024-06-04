<template>
  <footer>
    <div class="logo">
      <div></div>
      <!-- barre stylisé -->
      <img
        src="../assets/mylogo.png"
        alt="Logo de Florian Bouteiller représentant la lettre F en violet, et D en orange, collé avec un style graphique"
        v-on:click="scrollTop"
      />
      <div></div>
      <!-- barre stylisé -->
    </div>
    <h3>Rejoignez-moi !</h3>
    <nav>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/channel/UCiXNG14xwF47CNZb5T6HTMA"
            target="_blank"
            ><img
              src="../assets/youtube.png"
              alt="YouTube Logo avec redirection vers le profil au click"
          /></a>
        </li>
        <li>
          <a href="https://github.com/FloDevs" target="_blank"
            ><img
              src="../assets/signe-github.png"
              alt="GitHub logo avec redirection vers le profil au click"
          /></a>
        </li>
        <li>
          <a href="https://x.com/FloWDevl" target="_blank"
            ><img
              src="../assets/twitter.png"
              alt="Twitter logo avec redirection vers le profil au click"
          /></a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/creations">Créations</router-link></li>
        <li><router-link to="/error">Expérience</router-link></li>
        <li><router-link to="/error">À propos</router-link></li>
        <li><router-link to="/contacts">Contacts</router-link></li>
      </ul>
    </nav>
    <small
      >Dernière mise à jour :
      <time datetime="2024-06-04">04 Juin 2024</time></small
    >
  </footer>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&family=Roboto+Slab:wght@100..900&display=swap");

footer {
  height: 100%;
  background-color: #bba7d1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Slab", serif;
  color: #ffa600;
}
img {
  height: 7rem;
  width: 7rem;
}
nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav ul li {
  margin-right: 3rem;
  list-style: none;
}

h3 {
  font-size: 3rem;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo div {
  width: 30rem;
  height: 0.2rem;
  background-color: orange;
  margin: 0 20px;
}
.logo {
  margin-top: 3rem;
}
small {
  color: blueviolet;
}
</style>
