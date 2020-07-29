
const testQuestions = [
	{
			test: `Your spouse bought you an expensive gift, but you dislike it. What do you say?`,
			choice: [`Wow! I Love it, thank you`,`I appreprate this, but I dont realy like it. I would prefer to choose something else`, `You are so sweet, you spoil me a lot (But you didn't comment on the gift)`, `it's lovely, but not the right size. Can I get it exchaged?`],
			answerIndex: 1
	},
	{
		test: `You are so busy at work, your sister sends you a message asking that you call rightaway. What do you do?`,
		choice: [`Don't call, say later that you didn't see the text`, `Call straight away and listen to what she has to say`, `Don't call straight away untill you are less busy`,`Call and quickly say: Yes I am fine thank you. Then end the call.` ],
		answerIndex: 2
},
	{
			test: `A friend took you out to eat, but the food was cold. What will you do?`,
			choice: [`Don't say anything becuase you don't want your friend to feel bad` , `Praise the chef and say the food was great`, `Pretend you just started feeling unwell and don't eat the food`, `Ask politly if the chef could reheat your food`],
			answerIndex: 3
	},
	{
		test:`You've got an exam to write the next day, a friend who is abit down needs someone to talk to and calls you. What will you do? `,
		choice: [`Won't pick the call`, `Pick the call but tell her you are a bit down yourself`, `Pick the call and say you've got an exam but do your best to cheer your friend up`, 'Pick the call and spare your friend all the time your friend needs'],
		answerIndex: 2
},
{
	test: `You've paid for you shoping but didn't take your things out of the cart and went back to get something else. A store attendant isn't aware you've paid and returns your things back to the counter. You are asked to pick all you items because they couldn't find your receipt. What will you do?`,
	choice: [`Pick exaclty what you paid for`, `Change some items but stick to the same price as your previous items`, `My lucky day, pick things I wouldn't have bough with my money`,   `Pick my previous items and add some new items I didn't pay for`],
	answerIndex: 0
},
	{
			test: `You go with your boss to pick her wedding dress. She finds the one she loves and wants your opinion. You think it's awful. What do you say?`,
			choice: [`Call another shopper and ask their opinion`, `Appologise and say you don't realy have a nice taste`, ` Tell her she looks gorgeous`, `Say politly that it's a nice dress but doesn't look good on her`],
			answerIndex: 3
	},
	{
		test: `You see some one uprooting a flower planted to beatify a public area. What do you do`,
		choice: [`Try to make eye contact with the individual so that she feels guilty`, `Look for an official so you can report`, `Walk up and confront the individual`,`look away as if you didn't see`],
		answerIndex: 2
},
	{
			test: `Your neighbours letter was mistakengly droped in your letter box. What will you do?`,
			choice: [`Open it and tell your neighbour you found it opened`,  `Open it then seal it back as if it wan't opened`, `Take it to you neighbour without opening it`, `Open it but don't seal it back and take it to your neighbour(don't say anything about it been opened)`],
			answerIndex: 2
	},
	{
		test: `Yor borrowed you friend some money. it's over a year but she still claims she can't pay back yet. You currently need some money to pay for an exam then you suddenly see a transfer from her with an amount over what she owes you. She calls and ask you to refund the moeny that it was a mistake. What do you do?`,
		choice: [`keep all the money`, `take only what you'll need to pay for your exam and return the rest`, `Refund all the money`, `You take out the total money she owes you and refund only the excess`],
		answerIndex: 3
},
	{
			test: `Your house isn't far from where you do your grocceries but the tram takes a flat rate irrespective of your trip distance. You:`,
			choice: [`Try not to use the tram, but anytime you do you pay the flat rate`, `You use the tram sometimes you pay and sometime you aviod paying`, `You are so smart you use the tram always and never pay`, `You try to negotiate with the tram driver since you are a regular rider so that you pay less`],
			answerIndex: 0
	}
];

var currentTest = 0;
var rightAnswer = 0;
var testOver = false;
var counter=0;

window.addEventListener('DOMContentLoaded', function(e){
	
	showTestQuestion();
	
	var testPrompt = document.querySelector('.testPrompt');

			testPrompt.style.display = 'none';

	document.querySelector('.nextButton').addEventListener('click', function(){
			if(!testOver){
					const radioBtnsChecked = document.querySelector('input[type=radio]:checked');

					if (radioBtnsChecked === null){
							testPrompt.innerText = `You haven't selected an answer yet :)`;
							testPrompt.style.display = 'block';
					} else {
							testPrompt.style.display = 'none';
							if (parseInt(radioBtnsChecked.value) === testQuestions[currentTest].answerIndex){
									rightAnswer++;
							}
							
							currentTest++;
							

							if (currentTest < testQuestions.length){
									showTestQuestion();
									
							} else {
									showScore();
									document.querySelector('.nextButton').innerText = 'Try again!!';
									testOver = true;
							 }
							}   
			} else {
					testOver = false;
					document.querySelector('.nextButton').innerText = 'Next Question';
					resetTest();
					showTestQuestion();
					hideScore();
			}
	});
});

function showTestQuestion(){
	
	var test = testQuestions[currentTest].test;
	var questionDiv = document.querySelector('.testDiv > .test');
	var optionDiv = document.querySelector('.testDiv > .optionList');
	var choicesLength = testQuestions[currentTest].choice.length;
	questionDiv.innerText = test;

	//delet all li that exist
	optionDiv.innerHTML = '';

	var option;
	for (i = 0; i < choicesLength; i++){
			option = testQuestions[currentTest].choice[i];
			var li = document.createElement('li');
					li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + option + '</li>'
			optionDiv.appendChild(li);
			
	}
	counter ++;
	document.querySelector('.bar').innerText= `Question ${counter} of ${testQuestions.length}`;

}


function resetTest(){
	currentTest = 0;
	rightAnswer = 0;
	counter=0;
	hideScore();
}

function showScore(){
	document.querySelector('.testDiv > .result').innerText = 'Wow your are ' + `${(rightAnswer/10)*100 }` +'% honest';
	document.querySelector('.testDiv > .result').style.display = 'block';
}

function hideScore(){
	document.querySelector('.result').style.display = 'none';
}