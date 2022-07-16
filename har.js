let buttonCheck = null;
function waitForButtons() {
	let buttonsDiv = document.evaluate('/html/body/main/div[7]/div/div/div[2]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);
	if(!buttonsDiv) return;
	buttonsDiv.append(revealButton);
	clearInterval(buttonCheck);
}
buttonCheck = setInterval(waitForButtons, 1000);

let userStats = JSON.parse(localStorage.getItem('userStats'));
let todaysEntry = userStats[userStats.length - 1];
let correctAnswer = todaysEntry['correctAnswer'];

let revealButton = document.createElement('button');
revealButton.className += " px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm bg-custom-negative";
revealButton.innerHTML = "Reveal";
revealButton.onclick = function() {
	// Find input field, set to correct answer
	let inputField = document.querySelector('input');
	inputField.value = correctAnswer;
	inputField.dispatchEvent(new InputEvent('input', {'data': correctAnswer}));
};
