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
    <div class="container__card" data-name="${img}">
        <img class="front-face" src="IMG/${img}">
        <img class="back-face" src="IMG/js-badge.svg">
    </div>`
});

cardBoard.innerHTML = cardHTML + cardHTML;

let firstCard;
let secondCard;
let selectedTwoCards = false;

//Animação com a class flip
const cards = document.querySelectorAll(".container__card");

function flipCard(){
    if(selectedTwoCards) return false;
    this.classList.add("flip");

    //definição das cartas;
    if(!firstCard){
        firstCard = this;
        return false;
    }

    secondCard = this;

    checkForMatch ();

}

cards.forEach(card => card.addEventListener("click", flipCard));

//checando a iguladade das cartas pelo data-card;
function checkForMatch (){
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    
    !isMatch? differentCards() : keepPlaying(isMatch);
}

function differentCards(){
    selectedTwoCards = true;
    console.log("não são iguais");

    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        keepPlaying();
    },1000);
    
}

function keepPlaying(isMatch = false){
    if(isMatch){
        firstCard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);
    }
    [firstCard, secondCard, selectedTwoCards] = [null, null, false];
}

