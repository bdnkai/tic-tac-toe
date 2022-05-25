/*----- constants -----*/

/*----- app's state (variables) -----*/

/*-----cached element references-----*/
const playBtnEl = document.querySelector('#play');
const cell1El = document.querySelector('#cell1');
const cell2El = document.querySelector('#cell2');
const cell3El = document.querySelector('#cell3');
const cell4El = document.querySelector('#cell4');
const cell5El = document.querySelector('#cell5');
const cell6El = document.querySelector('#cell6');
const cell7El = document.querySelector('#cell7');
const cell8El = document.querySelector('#cell8');
const cell9El = document.querySelector('#cell9');

/*-----event <listeners----->*/
playBtnEl.addEventListener('click', init);
cell1El.addEventListener('click', buttonTest);
cell2El.addEventListener('click', buttonTest);
cell3El.addEventListener('click', buttonTest);
cell4El.addEventListener('click', buttonTest);
cell5El.addEventListener('click', buttonTest);
cell6El.addEventListener('click', buttonTest);
cell7El.addEventListener('click', buttonTest);
cell8El.addEventListener('click', buttonTest);
cell9El.addEventListener('click', buttonTest);

/*----- functions -----*/

function buttonTest() {
	console.log('this button works!');
}

function init() {}

let grid = {
	row1: [0, 0, 0],
	row2: [0, 0, 0],
	row3: [0, 0, 0],
};

// function newGrid(){
//     grid.row1 = [0,0,0],
//     grid.row2 = [0,0,0],
//     grid.row3 = [0,0,0],
// }

const winCheck = {
	A: [0, 1, 2],
	B: [3, 4, 5],
	C: [6, 7, 8],
	D: [0, 3, 6],
	E: [1, 4, 7],
	F: [2, 5, 8],
	G: [0, 4, 8],
	H: [2, 4, 6],
};
