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