// By using ctrl + / you will be able to put a note
// Will retrieve a random word from the wordsList array
// Functions are reusable code!
function getRandomWord() {
	var randomNum = Math.floor(Math.random() * wordsList.length);
	return wordsList[randomNum];
}

// console.log("Hello World!"); //"" is a string for text while "" vs '' are the same
var winningWord = getRandomWord(); //save in a container with var for JS;  multiword put lower case the upper case
var roundNum = 0;

console.log(winningWord);

// addEventListener to detect 'Enter' keypress

document.addEventListener('keydown', submitWord); //keydown vs keyup as events

function submitWord(event) {
	//console.log(event.key);
	if (event.key == 'Enter') {
 		checkWord();
		roundNum++;
	
	} //condition code with == to check (single = is value to variable)
}

function checkWord() {
	var numCorrectLetters = 0;

	//1, 2, 3, 4, 5
	for (var loopNum = 1; loopNum <=5; loopNum = loopNum + 1) {    //create a loop using for
		//console.log(loopNum)
		var box = document.getElementById ("box" + (loopNum + roundNum * 5)); 
		//loopNum is 1 + 0 -- box1
		//loopNum is 1 + 1*roundNum -- box6
		letter = box.value; //target with getElementByID

		if (winningWord[loopNum - 1] == letter) { //going inside a WORD by using [] *ZERO INDEX is character 0!!*
			box.className = 'green';
			numCorrectLetters = numCorrectLetters + 1; //++ adds one to the value auto
		} else if (winningWord.includes(letter)) {
			box.className = 'yellow';
		} else{
			box.className = 'gray';
		}
	}
	if (numCorrectLetters == 5) {
		alert('You Win!'); //creates a message box in the webpage but repaints/batches so color delays
	}
}
