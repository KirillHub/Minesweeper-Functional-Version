'use strict';

// import { timer } from '../src/modules/timer.js';
// import { arrayGameModeStates } from "../src/modules/gameStatesData.js";
// import { activatorGameStatesMode } from "../src/modules/activatorGameDataStates.js";





const easyGameMode = {
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
};

const normalGameMode = {
	"WIDTH": 15,
	"HEIGHT": 15,
	"BOMBS_COUNT": 35,
};

const hardGameMode = {
	"WIDTH": 20,
	"HEIGHT": 20,
	"BOMBS_COUNT": 80,
};


const arrayGameModeStates = [easyGameMode, normalGameMode, hardGameMode];

const buttonsParentDiv = document.querySelector('.buttons-config');
const field = document.querySelector('.field');
const fieldStyle = field.style;

let i = 0;


/*
buttonsParentDiv.addEventListener('click', function an(event) {
	// if (event.target.textContent === 'Easy')

	if (event.target.textContent === '1') {
		console.log("here");
	}

});
*/




// startGame(arrayGameModeStates[i].WIDTH,
// 	arrayGameModeStates[i].HEIGHT,
// 	arrayGameModeStates[i].BOMBS_COUNT)

startGame(15, 15, 35);


/*============================================================================================================*/


function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {

	if (!WIDTH, !HEIGHT, !BOMBS_COUNT) {
		console.log('here !!!');
		return
	}

	document.addEventListener('contextmenu', event => event.preventDefault());

	const flag = document.querySelector('.main-title__flags-counter');
	const endGameText = document.querySelector('.end-game');
	const field = document.querySelector('.field');

	const cellsCount = WIDTH * HEIGHT;
	// responsible for the max range when randomizing min by index



	let cells = [];

	const keysPairArray = [];
	const keysUnpairArray = [];

	let bombs;

	let flagsCounter = BOMBS_COUNT;
	flag.innerText = flagsCounter;
	let flagsLocationCoords = new Set();

	let hoverClassEffectsArray = new Set();

	//! next version

	// const fieldStyle = field.style;


	// let countFieldsChildrenBlocks = cells.length;
	// let countFieldsChildrenBlocks = 32;


	function board() {
		const buttonsParentDiv = document.querySelector('.buttons-config');
		const fieldStyle = field.style;

		//? создание доски по умолчанию (normal)


		buttonsParentDiv.addEventListener('click', event => {

			while (field.hasChildNodes()) {
				field.removeChild(field.firstChild)
			};

			let counter = -1;

			for (let i = 0; i < WIDTH; i++) {
				for (let j = 0; j < HEIGHT; j++) {
					counter++;
					const number = i + j + 2;
					const unpairMaskBlock = document.createElement('div');
					const pairMaskBlock = document.createElement('div');

					unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
					pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

					if (number % 2 === 0) {
						pairMaskBlock.style.backgroundColor = '#a9d751';
						// pairMaskBlock.textContent = counter;
						field.append(pairMaskBlock);
						keysPairArray.push(counter);
					}
					if (number % 2 !== 0) {
						unpairMaskBlock.style.backgroundColor = '#a2d049';
						// unpairMaskBlock.textContent = counter;
						field.append(unpairMaskBlock);
						keysUnpairArray.push(counter);
					}
					cells = [...field.children];
					console.log(cells);
				}
			}


			/*
				if (event.target.textContent === 'Normal') {
					let counter = -1
					// window.location.reload();
	
					for (let i = 0; i < WIDTH; i++) {
						for (let j = 0; j < HEIGHT; j++) {
							counter++;
							const number = i + j + 2;
							const unpairMaskBlock = document.createElement('div');
							const pairMaskBlock = document.createElement('div');
	
							unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
							pairMaskBlock.classList.add('fields__hover-class', "fields__cell");
	
							if (number % 2 === 0) {
								pairMaskBlock.style.backgroundColor = '#a9d751';
								// pairMaskBlock.textContent = counter;
								field.append(pairMaskBlock);
								keysPairArray.push(counter);
							}
							if (number % 2 !== 0) {
								unpairMaskBlock.style.backgroundColor = '#a2d049';
								// unpairMaskBlock.textContent = counter;
								field.append(unpairMaskBlock);
								keysUnpairArray.push(counter);
							}
							if (cells.length !== 0) {
								cells = 0;
							}
							cells = [...field.children];
						}
					};
	
					fieldStyle.setProperty('grid-template-columns', `repeat(15, 27px)`);
	
					field.childNodes.forEach(item => {
						item.style.fontSize = "22px";
						item.style.height = "27px";
					});
					} 
			*/

			if (event.target.textContent === 'Easy') {
				let counter = -1;
				flag.innerHTML = 10; //! брать потом кл-во бомб из innerHTML

				WIDTH = 10; HEIGHT = 10; BOMBS_COUNT = 12;

				for (let i = 0; i < WIDTH; i++) {
					for (let j = 0; j < HEIGHT; j++) {
						counter++;
						const number = i + j + 2;
						const unpairMaskBlock = document.createElement('div');
						const pairMaskBlock = document.createElement('div');

						unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
						pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

						if (number % 2 === 0) {
							pairMaskBlock.style.backgroundColor = '#a9d751';
							// pairMaskBlock.textContent = counter;
							field.append(pairMaskBlock);
							keysPairArray.push(counter);
						}
						if (number % 2 !== 0) {
							unpairMaskBlock.style.backgroundColor = '#a2d049';
							// unpairMaskBlock.textContent = counter;
							field.append(unpairMaskBlock);
							keysUnpairArray.push(counter);
						}
						if (cells.length !== 0) {
							cells = 0;
						}
						cells = [...field.children];
					}
				};
				fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);

				field.childNodes.forEach(item => {
					item.style.fontSize = "30px";
					item.style.height = "40px";
				});

			} else if (event.target.textContent === 'Normal') {
				window.location.reload();

			} else if (event.target.textContent === 'Hard') {
				let counter = -1;
				flag.innerHTML = 80; //! брать потом кл-во бомб из innerHTML

				WIDTH = 20; HEIGHT = 20; BOMBS_COUNT = 80;

				for (let i = 0; i < WIDTH; i++) {
					for (let j = 0; j < HEIGHT; j++) {
						counter++;
						const number = i + j + 2;
						const unpairMaskBlock = document.createElement('div');
						const pairMaskBlock = document.createElement('div');

						unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
						pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

						if (number % 2 === 0) {
							pairMaskBlock.style.backgroundColor = '#a9d751';
							// pairMaskBlock.textContent = counter;
							field.append(pairMaskBlock);
							keysPairArray.push(counter);
						}
						if (number % 2 !== 0) {
							unpairMaskBlock.style.backgroundColor = '#a2d049';
							// unpairMaskBlock.textContent = counter;
							field.append(unpairMaskBlock);
							keysUnpairArray.push(counter);
						}
						if (cells.length !== 0) {
							cells = 0;
						}
						cells = [...field.children];
					}
				};

				fieldStyle.setProperty('grid-template-columns', `repeat(20, 23px)`);

				field.childNodes.forEach(item => {
					item.style.fontSize = "18px";
					item.style.height = "23px";
				});
			}

		});

	}
	board();

	//? sounds effects
	class MusicComponents {

		static musicSounds(audioPath) {
			this.audioPath = audioPath;
			this.audio = new Audio();
			this.audio.src = this.audioPath;
			this.audio.play();
		};
	};

	//?  first click
	field.addEventListener('click', (event) => {
		if (event.target.tagName !== 'DIV') return;

		bombsAnimation();
		MusicComponents.musicSounds('../music/first-click.wav');
		return
	}, { once: true });


	function bombsAnimation() {
		const index = cells.indexOf(event.target);
		let bombsRandomArrayGenerated = new Array();
		let arrayBombNeighboursOnFirstClick = new Array();
		let setObjectOfRandomMines = new Set();
		const column = index % WIDTH;
		const row = Math.floor(index / WIDTH);

		function pushNeighborFieldsIndex(row, column) {
			if (!isValid(row, column)) return false;

			const index = row * WIDTH + column;
			return arrayBombNeighboursOnFirstClick.push(index);
		}

		function openNeighborsFields(row, column) {
			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					(pushNeighborFieldsIndex(row + y, column + x))
				}
			}
		};

		openNeighborsFields(row, column);

		arrayBombNeighboursOnFirstClick.forEach(neighbors => setObjectOfRandomMines.add(neighbors));

		// console.log(typeof ); //! countFieldsChildrenBlocks
		countFieldsChildrenBlocks = 200 //! del
		console.log(flag.innerHTML);

		do {
			setObjectOfRandomMines.add(randomizerMinesIndex(0, +flag.innerHTML));
		} while (setObjectOfRandomMines.size < (BOMBS_COUNT + arrayBombNeighboursOnFirstClick.length)
			&& setObjectOfRandomMines.size <= +flag.innerHTML);

		setObjectOfRandomMines.forEach(item => bombsRandomArrayGenerated.push(item));

		bombsRandomArrayGenerated = bombsRandomArrayGenerated
			.slice(arrayBombNeighboursOnFirstClick.length, bombsRandomArrayGenerated.length);
		return bombs = bombsRandomArrayGenerated;
	};


	function randomizerMinesIndex(minArrayIndex, maxArrayIndex) {
		minArrayIndex = Math.ceil(minArrayIndex);
		maxArrayIndex = Math.floor(maxArrayIndex);
		return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
	};


	//? click's animation
	field.addEventListener('click', (event) => {
		event.preventDefault();

		const selector = event.target;
		const index = cells.indexOf(selector);
		const column = index % WIDTH;
		const row = Math.floor(index / WIDTH);

		console.log(event.target);

		field.addEventListener("mousedown", function (event) { event.preventDefault(); });
		field.addEventListener("mouseup", function (event) { event.preventDefault(); });

		if (selector.tagName !== 'DIV') return;

		if (selector.style.backgroundColor == 'rgb(169, 215, 81)' ||
			selector.style.backgroundColor == 'rgb(162, 208, 73)') {
			MusicComponents.musicSounds('../music/clicks.wav');
		};

		open(row, column);
	});


	// right click animation
	field.addEventListener('contextmenu', (event) => {
		event.preventDefault();
		flagCounter();
	});

	function flagCounter() {
		const index = cells.indexOf(event.target);
		const selector = event.target;

		// console.log(selector.style.textContent);
		console.log(selector);

		if (bombs) {
			if (flagsCounter > 0
				&& selector.style.backgroundColor !== 'rgb(228, 194, 159)'
				&& selector.style.backgroundColor !== 'rgb(215, 184, 153)') {

				if (selector.innerHTML !== '🚩') {
					flag.innerHTML = --flagsCounter;
					selector.innerHTML = '🚩';
					MusicComponents.musicSounds('../music/tick.mp3');
					flagsLocationCoords.add(index);

				} else if (selector.innerHTML == '🚩') {
					flag.innerHTML = ++flagsCounter;
					selector.innerHTML = '';
					MusicComponents.musicSounds('../music/tick.mp3');
					flagsLocationCoords.delete(index);

				} else if (flagsCounter === 1 && selector.innerHTML == '🚩') {
					flagsCounter++;
					selector.innerHTML = '';
					MusicComponents.musicSounds('../music/tick.mp3');
				};

			} else if (flagsCounter >= 0 && selector.innerHTML == '🚩' &&
				selector.style.backgroundColor !== 'rgb(228, 194, 159)' &&
				selector.style.backgroundColor !== 'rgb(215, 184, 153)') {
				flag.innerHTML = ++flagsCounter;
				selector.innerHTML = '';
				MusicComponents.musicSounds('../music/tick.mp3');
			} else return //? 

			function checkingFlagsSet() {
				const pullFlagsCoord = new Array();
				bombs.forEach(bombsLocation => {
					flagsLocationCoords.forEach(flagsCord => {
						if (bombsLocation === flagsCord) pullFlagsCoord.push(flagsCord);
						if (pullFlagsCoord.length === bombs.length) {
							endGameText.innerText = 'YOU WIN !';
							MusicComponents.musicSounds('../music/win.mp3');
							setTimeout(() => { window.location.reload() }, 2000);
						}
					});
				});
			}
			checkingFlagsSet();
		};
	};

	function isValid(row, column) {
		return row >= 0 && row < HEIGHT
			&& column >= 0 && column < WIDTH;
	};

	function getCount(row, column) {
		let count = 0;
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				if (isBomb(row + y, column + x)) {
					count++
				};
			};
		};
		return count;
	};

	function open(row, column) {
		if (!isValid(row, column)) return;

		const index = row * WIDTH + column;
		const cell = cells[index];

		if (cell.disabled === true) return;

		cell.disabled = true;

		if (index >= 0) {
			keysPairArray.forEach(items => {
				if (items === index) {
					hoverClassEffectsArray.add(items);
					cell.style.background = '#e4c29f';
				}
			});

			keysUnpairArray.forEach(items => {
				if (items === index) {
					hoverClassEffectsArray.add(items);
					cell.style.background = '#d7b899';
				}
			});

			function clearHoverEffect() {
				if (hoverClassEffectsArray.size > 0) {
					hoverClassEffectsArray.forEach(fieldsNumber => {
						if (fieldsNumber === index) {
							cell.classList.remove('fields__hover-class')
						}
					})
				}
			}
			clearHoverEffect();

			const colorNumberArray = ['blue', 'green', 'red', 'purple', 'black',
				'darkslategray', 'rgb(64, 25, 90)', 'rgb(15, 81, 119)'];

			colorNumberArray.forEach((item, index) => {
				++index;
				if (getCount(row, column) > 0) {
					if (getCount(row, column) == index) {
						cell.style.color = item;
					}
				}
			});

			if (isBomb(row, column)) {

				cell.innerHTML = '💣';

				MusicComponents.musicSounds('../music/beep-bomb.mp3');
				endGameText.innerText = 'YOU LOSE!';
				setTimeout(() => { window.location.reload() }, 1500);
				return;
			}

			const count = getCount(row, column);

			if (count !== 0) {
				cell.innerHTML = count;
				return;
			};

			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					open(row + x, column + y);
				}
			}
		};
	}

	function isBomb(row, column) {
		if (!isValid(row, column)) return false;

		const index = row * WIDTH + column;
		return bombs.includes(index)
	};

}
