<template>
  <section>
    <h2>Mes differentes créations</h2>

    <div class="container">
      <div class="portfolio-item" v-on:click="openModal(0)">
        <img
          src="../assets/CvWeb(1).png"
          alt="Image dans une fenêtre du Curriculum Vitæ de Florian Bouteiller"
        />
        <h3>CV réalisé en HTML et CSS</h3>
        <span
          >Réalisé le <time datetime="2024-02-28">28 Février 2024</time></span
        >
      </div>
      <div class="portfolio-item" v-on:click="openModal(2)">
        <img
          src="../assets/CahierDesCharges.png"
          alt="Image dans une fenêtre du cahier des charges réalisé par Florian Bouteiller"
        />
        <h3>Cahier des charges de la Socketterie</h3>
        <span>Réalisé le <time datetime="2024-03-22">22 Mars 2024</time></span>
      </div>
      <div class="portfolio-item" v-on:click="openModal(5)">
        <img
          src="../assets/Commentary.png"
          alt="Image dans une fenêtre d'une section commentaire réalisé par Florian Bouteiller"
        />
        <h3>Espace commentaire dynamique en Javascript</h3>
        <span>Réalisé le <time datetime="2024-04-05">05 Avril 2024</time></span>
      </div>

      <!-- Modal -->
      <div id="modal" class="modal">
        <div class="modal-content">
          <span class="close" v-on:click="closeModal()">&times;</span>
          <div class="modal-body">
            <span class="prev" v-on:click="changeSlide(-1)">&#10094;</span>
            <img id="modal-image" src="" alt="Modal Image" />
            <span class="next" v-on:click="changeSlide(1)">&#10095;</span>
          </div>
          <div id="modal-caption" class="modal-caption"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let currentSlide = 0;
const images = [
  {
    src: "/src/assets/CvWeb(1).png",
    caption: "Header du CV",
  },
  {
    src: "/src/assets/CvWeb(2).png",
    caption: "Partie principal du CV",
  },
  {
    src: "/src/assets/CahierdesCharges(1).png",
    caption: "Introduction du cahier des charges",
  },
  {
    src: "/src/assets/CahierdesCharges(3).png",
    caption: "Wireframe du cahier des charges",
  },
  {
    src: "/src/assets/CahierdesCharges(2).png",
    caption: "Maquette du cahier des charges",
  },
  {
    src: "/src/assets/Commentary(1).png",
    caption: "Section commentaire fonctionnel",
  },
  {
    src: "/src/assets/Commentary(2).png",
    caption: "Avec gestion d'erreur",
  },
];

function openModal(index) {
  currentSlide = index;
  document.getElementById("modal").style.display = "block";
  showSlide(currentSlide);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide(currentSlide);
}

function showSlide(index) {
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  modalImage.src = images[index].src;
  modalCaption.innerText = images[index].caption;
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poetsen+One&family=Roboto+Slab:wght@100..900&display=swap");
section {
  font-family: "Roboto Slab", serif;

  color: wheat;
  text-align: center;
}
h2 {
  font-size: 3rem;
  padding-bottom: 3rem;
}
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 2rem;
  margin-bottom: 10rem;
}

.portfolio-item {
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 40rem;
  height: 40rem;
}
.portfolio-item:hover {
  box-shadow: 10rem 10rem 10rem rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s ease;
}
.portfolio-item img {
  max-width: 40rem;
  height: 40rem;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  display: flex;
  flex-direction: column;

  position: relative;
  margin: auto;

  width: 80%;
  max-width: 60rem;
  background-color: #fefefe;
  border: 1rem solid #888;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
}

.close {
  color: red;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.modal-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-body img {
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  color: black;
  font-weight: bold;
  font-size: 3rem;
  user-select: none;
  -webkit-user-select: none;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.prev:hover,
.next:hover {
  color: #999;
}

.modal-caption {
  text-align: center;
  color: black;
  font-size: 3rem;
  padding: 10px 0;
}
</style>
