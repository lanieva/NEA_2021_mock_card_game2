function createdeck() { //creates array of 30 objects with a colour and value
    let colours = ['R','B','Y']; //creates the colours for the cards
    let values = ['1','2','3','4','5','6','7','8','9','10']; //creates the numbers for the cards

    let deck = []; //[] is called array literal, used instead of = new Array()
    for (let i= 0; 1 < colours.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {suit: colours[i], value: values[j]}; //merges colours and values so one card = 1 value + 1 colour
            deck.push(card); //pushes each card to end of deck
        }
    }
    return deck; //returns the array of 30 records
}

function shuffle(deck){ //rearranges deck through position swapping
    for (let i = deck.length - 1; i > 0; i--){ //finds a random position between 0 and 29
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; //swaps the positions of the values
    }
}
function showdeck(){
    let deckhtml = '<table><tr>';
    let card;
    for (let i = 0; i < deck.length; i++){
        card = deck.html[i].suit + deck[i].value;
        deckhtml = deckhtml + '<td>${card}</td>';
        deckhtml += '</tr></table>';
        document.getElementById("deck").innethtml = deckhtml;
    }
}

/*
function showdeck(deck, i){ //prints card at position 'i'
   let x, card = "";
   let cards = deck[i];
   for (x in cards){ //loops through fields and adds each record to string 'cards'
       card += cards[x] + " ";
   }
   document.getElementById("showcards").innerHTML = card;
} */

function play(){
    document.getElementById("start").style.visibility = "hidden";
    let deck = createdeck();
    shuffle(deck)
    console.log(deck);
    document.getElementById("header1").innerHTML = "The First Card is: ";
    showdeck(deck,1);
}
