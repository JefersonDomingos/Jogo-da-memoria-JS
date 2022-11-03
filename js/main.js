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
let lookCard = false;

//Animação com a class flip
const cards = document.querySelectorAll(".container__card");

function flipCard(){
    if(lookCard)

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
    
    isMatch? true : differentCards();
}

function differentCards(){
    console.log("não são iguais");
    
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    },1000);
    
}


