// Questions that will be asked
const Questions = [{
	q: "Which of these is another word for ninja?",
	a: [{ text: "Genjutsu", isCorrect: false },
	{ text: "Arigato", isCorrect: false },
	{ text: "Shinobi", isCorrect: true },
	{ text: "Gelato", isCorrect: false }
	]

},
{
	q: "What is Samehada?",
	a: [{ text: "A giant possum", isCorrect: false, isSelected: false },
	{ text: "A talking hat", isCorrect: false },
	{ text: "Naruto's dad", isCorrect: false },
	{ text: "A mystical sword", isCorrect: true }
	]

},
{
	q: "What's Naruto's mum's name?",
	a: [{ text: "Kuruma", isCorrect: false },
	{ text: "Haruno", isCorrect: false },
	{ text: "Kushina", isCorrect: true },
	{ text: "Carol", isCorrect: false }
	]

},
{
	q: "How many tails does kuruma have?",
	a: [{ text: "3", isCorrect: false },
	{ text: "7", isCorrect: false },
	{ text: "9", isCorrect: true },
	{ text: "1", isCorrect: false }
	]

},
{
	q: "What team is kakashi leader of?",
	a: [{ text: "Team 7", isCorrect: true },
	{ text: "Twelve Guardian Ninja", isCorrect: false },
	{ text: "Taka", isCorrect: false },
	{ text: "Team Rocket", isCorrect: false }
	]

}

]

var images = [
    'image1.webp',
    'image2.webp',
    'image3.webp',
    'image4.webp',
    'image5.gif'

];


let currQuestion = 0
let score = 0
var index = 0

// Adding a image for each question
function makeImage() {
  var img = document.createElement('img');
  img.src = images[index];
  document.getElementById('content').appendChild(img);
}

function nextImage() {
  var img = document.getElementById('content').getElementsByTagName('img')[0];
  index++;
  index = index % images.length;
  img.src = images[index];
}

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`

}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();

	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}

// function playSound(){
//     var audio = new Audio('https://www.youtube.com/watch?v=zVgKnfN9i34');
//     audio.play();
// }
