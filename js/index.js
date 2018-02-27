//@ts-check
"use strict";


let state = {}

//starts a new game when the page loads
newGame();

/**
 * Shuffles an array in-place.
 * Source: https://bost.ocks.org/mike/shuffle/
 * @param {[]} array 
 * @returns {[]} the shuffled input array
 */
function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}


function newGame() {
    let playerCards = shuffle(WHITE_CARDS).slice(0,5);
    let cards = document.querySelector("#player-hand");
    for(let i = 0; i < playerCards.length; i++) {
        cards.appendChild(makeCard(playerCards[i]))
    }
}

function makeCard(card) {
    let div = document.createElement("div");
    div.classList.add("white-card", "col", "m-2");
    div.textContent = card.answer;
    return div;
}
