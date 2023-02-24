const card = document.querySelector(".cardWrap");

card.addEventListener("click", function(e) {
  card.classList.toggle('is-flipped');
});