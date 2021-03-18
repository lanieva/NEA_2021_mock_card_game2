function createdeck() { //creates array of 30 objects with a colour and value
    let colours = ['Red','Black','Yellow']; //creates the colours for the cards
    let values = ['1','2','3','4','5','6','7','8','9','10']; //creates the numbers for the cards

    let deck = []; //[] is called array literal, used instead of = new Array()
    for (let i= 0; i < colours.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {suit: colours[i], value: values[j]}; //merges colours and values so one card = 1 value + 1 colour
            deck.push(card); //pushes each card to end of deck
        }
    }
    return deck; //returns the array of 30 records
}
function shuffle(deck) {
    for (let i = 0; i < 1000; i++) {
        let random1 = Math.floor(Math.random() * deck.length);//generates a random, whole number between 1 and 29.97
        let random2 = Math.floor(Math.random() * deck.length);
        let temp = deck[random1];
        deck[random1] = deck[random2]; //the values are the generated index swap places
        deck[random2] = temp;
    }
}

function showdeck(deck){
    let deckhtml = '<table><tr>'; //creates a string of table tags; tr = table row, td = table data
    let card;
    for (let i = 0; i < deck.length; i++) { //loops through array and builds string of cards to display
        card = deck[i].suit + deck[i].value;
        deckhtml = deckhtml + `<td>${card}</td>`; //template literal allows the card value to be added to the string, separated by backticks
        deckhtml += '</tr></table>'; //
        document.getElementById("deck").innerhtml = deckhtml;
        //takes in deck and builds HTML element (line 34)
        //loops through deck and appends each card to HTML table (line 36)
        //HTML table displayed in file id="deck" (line 40)
    }
}


function play(){
    document.getElementById("start").style.visibility = "hidden";
    let deck = createdeck();
    shuffle(deck)
    console.log(deck);
    //document.getElementById("header1").innerHTML = "The First Card is: ";
    showdeck(deck,1);
}



/*function showdeck(deck, i){ //prints card at position 'i'
    let x, card = "";
    let cards = deck[i];
    for (x in cards){ //loops through fields and adds each record to string 'cards'
        card += cards[x] + " ";
    }
    document.getElementById("showcards").innerHTML = card;*/

//returns the array of 30 records


/* function getdeck(colours, values){

    let deck = []; //[] is called array literal, used instead of = new Array()
    for (let i= 0; 1 < colours.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {suit: colours[i], value: values[j]}; //merges colours and values so one card = 1 value + 1 colour
            deck.push(card); //pushes each card to end of deck
        }
    }
    return deck;
} */


/*
function shuffle(deck){ //rearranges deck through position swapping
            for (let i = deck.length - 1; i > 0; i--){ //finds a random position between 0 and 29
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]]; //swaps the positions of the values
            debugger;
            }
        } */