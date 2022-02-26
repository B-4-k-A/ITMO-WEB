import * as functions from "./modules/functions.js";
// import { like } from "./modules/like.js";
import {fetch} from './modules/fetch.js';

functions.isWebp();

var liked_films = [];

function setButton() {
  const slides = document.querySelectorAll(".slider__item");
  slides.forEach((slide) => {
    const imgSrc = slide.querySelector("img").src;
    const button = slide.querySelector("button");
    if (liked_films.includes(imgSrc)) {
      console.log(imgSrc);
      button.classList.add("unlike");
    } else {
      button.classList.add("like");
    }
  });
}

window.onload = () => {
  if (JSON.parse(localStorage.getItem("liked-films") != null)) liked_films = liked_films.concat(JSON.parse(localStorage.getItem("liked-films")));
  setTimeout(setButton, 200)
  if (document.querySelector("title").text == "Liked") {
    if (JSON.parse(localStorage.getItem("like-films")) != null) films = JSON.parse(localStorage.getItem("like-films"));
    display();
  }

};

var likeBtn = document.querySelectorAll(".like-button");
likeBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let classList = elem.classList;
    const parent = elem.closest(".slider__item");
    const imgSrc = parent.firstElementChild.src;
    if (classList.contains("like")) {
      classList.remove("like");
      classList.add("unlike");
      liked_films.push(imgSrc);
    } else {
      classList.remove("unlike");
      classList.add("like");
      liked_films = liked_films.filter((value, index, arr) => {
        return value != imgSrc;
      });
    }

    localStorage.setItem("liked-films", JSON.stringify(liked_films));
  });
});

function display() {
  if (document.querySelector("title").text == "Liked") {
    const main = document.querySelector("main");
    main.innerHTML += `
      <div class="slider-container">
        <div class="slider">
        </div>
      </div>`;
    const slider = main.querySelector(".slider");
    var films = JSON.parse(localStorage.getItem("liked-films"));
    console.log(films);
    films.forEach((imgSrc) => {
      slider.innerHTML += `  
        <div class="slider__item">
          <img class="slider__item_img" src="${imgSrc}" alt="" />
          <button class="like-button"></button>
        </div>`;
    });
  }
}

// fetch();