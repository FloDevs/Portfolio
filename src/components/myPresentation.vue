<template>
  <section>
    <h1>Bienvenue sur mon Portfolio !</h1>

    <p>
      Je me présente Florian Bouteiller développeur junior, actuellement en
      formation au
      <a
        href="https://www.centre-europeen-formation.fr/landing/dev-web/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gclid=Cj0KCQjwmMayBhDuARIsAM9HM8fI0abtDv3VhOzihapYTJGeiip82V9vIHMZgITPbQCBVUBm_RzVG3MaAkl_EALw_wcB"
        target="_blank"
        >C.E.F.</a
      >
    </p>

    <p>
      Ici vous pourrez retrouver mes créations, mes expériences, et de quoi me
      contacter.
    </p>

    <h2>À propos de moi</h2>

    <p>
      Je suis en reconversion professionelle, anciennement technicien dans le
      domaine de l'énergie, j'ai décidé de tenter ma chance dans un univers qui
      me passionne.
    </p>

    <aside>
      Après avoir suivi une formation complète sur le langage python, j'ai vu
      que le champ des possibles était extrêment large, non seulement pour le
      développement web, mais aussi pour l'analyse de données, l'intelligence
      artificielle et l'automatisation des tâches.
    </aside>
  </section>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&family=Roboto+Slab:wght@100..900&display=swap");

section {
  font-family: "Roboto Slab", serif;
  padding-top: 5rem;
  color: wheat;
  text-align: center;
}

a {
  color: wheat;
}
a:hover {
  color: #bba7d1;
}

h1 {
  margin-top: 0;
  font-size: 3rem;
  padding-bottom: 4rem;
}
h2 {
  font-size: 3rem;
  padding-top: 4rem;
}
p,
aside {
  font-size: 2rem;
  max-width: 85rem;
  margin: auto;
  margin-bottom: 2rem;
  line-height: 1.8;
}
</style>
