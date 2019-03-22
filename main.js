const moveForward = (playerName) => {
	const car = document.querySelector(`#player${playerName}_race td.active`);
	if (car.nextElementSibling) {
		car.nextElementSibling.classList.add('active');
		car.classList.remove('active');
	} else {
		alert(`Player ${playerName} wins ! Congrat's !!! Play again ?`);
		window.location.reload();
	};
};

const moveCars = (event) => {
	if (event.key === "a") {
		moveForward(1);
	} else if (event.key === "p") {
		moveForward(2);
	};
};

document.addEventListener("keyup", moveCars);