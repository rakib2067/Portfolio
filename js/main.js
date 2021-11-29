const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let carouselPosition = 0;

const projects = document.getElementsByClassName("carousel__item");
const totalProjects = projects.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateProjectPosition() {
  for (let project of projects) {
    project.classList.remove("carousel__item--visible");
    project.classList.add("carousel__item--hidden");
  }
  projects[carouselPosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (carouselPosition === totalProjects - 1) {
    carouselPosition = 0;
  } else {
    carouselPosition++;
  }
  updateProjectPosition();
}
function moveToPrevSlide() {
  if (carouselPosition === 0) {
    carouselPosition = totalProjects - 1;
  } else {
    carouselPosition--;
  }
  updateProjectPosition();
}
