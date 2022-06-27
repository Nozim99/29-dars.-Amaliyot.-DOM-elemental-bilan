const reklama = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const bg = document.querySelector(".promo__bg");
const seriesList = document.querySelector(".promo__interactive-list");

const interactiveItems = [
  "omar",
  "the final legacy",
  "ertugrul",
  "magnificent century",
  "great seljuks: guardians...",
];

reklama.forEach((items) => {
  items.remove();
});

genre.textContent = "Komediya";
bg.style.backgroundImage = "url(img/1.jpg)";

// li qo'shish

// 3-usul
interactiveItems.forEach((item, index) => {
  seriesList.innerHTML += `<li class='promo__interactive-item'>${
    index + 1
  }. ${item} <div class='delete'></div> </li>`;
});

// 1-usul
// for (let i = 0; i < interactiveItems.length; i++) {
//   const item = document.createElement("li");
//   item.textContent = `${i + 1}. ${interactiveItems[i]}`;
//   document.querySelector(".promo__interactive-list").append(item);
//   item.classList.add("promo__interactive-item");
// }

// 2-usul
// interactiveItems.forEach((li, index) => {
//   const item = document.createElement("li");
//   item.textContent = `${index + 1}. ${li}`;
//   seriesList.append(item);
//   item.classList.add("promo__interactive-item");
// });

