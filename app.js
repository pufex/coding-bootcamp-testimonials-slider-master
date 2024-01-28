const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const slides = document.querySelectorAll(".slide")

let index = 0

prev.addEventListener("click", () => {
  if(index > 0){
    slides[index].classList.add("hidden")
    index = (index - 1) % slides.length
    slides[index].classList.remove("hidden")
  }
})

next.addEventListener("click", () => {
  if(index != slides.length - 1){
    slides[index].classList.add("hidden")
    index = (index + 1) % slides.length
    slides[index].classList.remove("hidden")
  }
})
