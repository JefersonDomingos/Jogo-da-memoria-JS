const cardBoard = document.querySelector(".container");
const images = [
    "angular.svg",
    "aurelia.svg",
    "backbone.svg",
    "ember.svg",
    "react.svg",
    "vue.svg"
];


let cardHTML = "";
images.forEach(img => {
    cardHTML +=`
    <div class="container__card">
        <img class="card__front-face" src="IMG/${img}">
        <img class="card__back-face" src="IMG/js-badge.svg">
    </div>`
});

cardBoard.innerHTML = cardHTML + cardHTML;

//Animação com a class flip
const cards = document.querySelectorAll(".container__card");

function flipCard(){
    this.classList.add("flip");
    console.log(this);
}

cards.forEach(card => card.addEventListener("click", flipCard));