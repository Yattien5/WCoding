// Let's code together!
var words = ["bug","cat","cow","dog","hen","pig","rat"];

// adding images to the end of the array
var length = words.length;
for (let i=0; i<length; i++) {

    words.push("./images/" + words[i] + ".jpeg")
}

// shuffling the array
for (let i = words.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    // generate a random number from 0 to i
    [words[i], words [j]] = [words[j], words [i]];
}

var container = document.getElementById('cards-container');

// loop through the array and generate cards
for (let i=0; i<words.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');

    if (words [i] [0] === ".") {
        var img = document.createElement('img');
        img.src = words [i];
        img.draggable = false;
        card.appendChild(img);
    } else {
        var h1 = document.createElement('h1');
        h1.textContent = words [i]; 
        card.appendChild(h1);
    }

    container.appendChild(card);

    card.onclick = function() {
        flipCard(this, words [i]);
    }
}

var flippedCardText = "";
var flippedCard = "";

function flipCard(card, text) {
    console.log("flippedCard: ", flippedCard);
if (flippedCardText == "") {
    card.classList.add('flipped');
    flippedCardText = text;
    flippedCard = card;
} else {
    card.classList.add('flipped');
    if (flippedCardText.includes(text) || text.includes(flippedCardText) ) {
        setTimeout(function(){
            card.classList.remove("flipped");
            card.classList.add('hidden');
            flippedCard.classList.remove("flipped");
            flippedCard.classList.add('hidden');
            flippedCard = "";
            flippedCardText = "";
        }, 2000);

    } else {
        setTimeout(function() {
            card.classList.remove("flipped");
            flippedCard.classList.remove("flipped");
            flippedCard = "";
            flippedCardText = "";
        }, 2000);
    }
}

}