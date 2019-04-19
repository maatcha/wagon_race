const timer = document.querySelector('.timer');
const messageContainer = document.querySelector('.message-to-players');
const message = document.querySelector('.message-to-players p');

const moveForward = (playerName) => {
	const car = document.querySelector(`#player${playerName}_race td.active`);
	if (car.nextElementSibling.nextElementSibling) {
		car.nextElementSibling.classList.add('active');
		car.classList.remove('active');
	} else {
		document.removeEventListener("keyup", moveCars);
		car.nextElementSibling.classList.add('active');
		car.classList.remove('active');
		setTimeout(() => {
			alert(`Player ${playerName} wins ! Congrat's !!! Play again ?`);
			window.location.reload();
		}, 2000);
		timer.innerText = '';
		message.innerText = `CONGRAT'S PLAYER ${playerName}! YOU WON THE RACE !!!`;
		const gif = "<img src='images/feu_dartifice.gif' alt=''>";
		messageContainer.insertAdjacentHTML('afterbegin', gif );
	};
};
const moveCars = (event) => {
	if (event.key === "a") {
		moveForward(1);
	} else if (event.key === "p") {
		moveForward(2);
	};
};

setTimeout(() => {
	document.addEventListener("keyup", moveCars);
}, 3000);

setTimeout(() => {
	timer.innerText = "2";
}, 1000);

setTimeout(() => {
	timer.innerText = "1";
}, 2000);

setTimeout(() => {
	timer.innerText = "GO !!!";
}, 3000);