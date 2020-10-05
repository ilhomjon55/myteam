const ham = document.querySelector(".hamburger")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  ham.classList.toggle("hamburger--active")
}