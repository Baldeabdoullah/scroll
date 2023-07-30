// Créer un événément au scroll
const navbar = document.querySelector("#navbar");

let lastScroll = 0;
// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte
window.addEventListener("scroll", (e) => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = -60 + "px";
  }
  lastScroll = window.scrollY;
});

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
