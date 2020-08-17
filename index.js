let _arr = [
    ['#6F98A8', 1],
    ['#2B8EAD', 2],
    ['#2F454E', 3],
    ['#2B8EAD', 4],
    ['#2F454E', 5],
    ['#BFBFBF', 6],
    ['#BFBFBF', 7],
    ['#6F98A8', 8],
    ['#2F454E', 9],        
];

/*function to sort the cards*/
let sortCards = function() {
    _arr.sort((x,y) => x[1] - y[1]);
    displayCards(_arr);
}

/*function to Shuffle the cards*/
let shuffleCards = function(){
    let array = _arr;
    let shufflePosition, tempPosition;
    for (let i = array.length - 1; i > 0; i--){
        shufflePosition = Math.floor(Math.random() * (i + 1));
        tempPosition = array[i];
        array[i] = array[shufflePosition];
        array[shufflePosition] = tempPosition;
    }
    // return array;
    displayCards(array);
};

/*function to display cards after sort and shuffle the cards*/
let displayCards = function(array){
    let cardsDiv = document.getElementById("cardsDiv");
    cardsDiv.innerHTML = "";
    for(i = 0; j = _arr.length, i < j; i++){
        let card = _arr[i];
        let cardDiv = document.createElement("div");
        cardDiv.innerHTML = card[1];
        cardDiv.style.backgroundColor = card[0];
        cardDiv.style.borderLeftColor = card[0];
        cardsDiv.appendChild(cardDiv);
    }
}

displayCards(_arr);
