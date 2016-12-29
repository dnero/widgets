// Return the path of characters hovered based on a list of directions run.
// wrapping works horizontally, but not vertically
// http://jsben.ch/#/1g55c

let streetFighterSelection = (fighters, position, moves) => {

	let row = position[0], // row
		col = position[1], // column
		fightersHovered = [], // list of fighters that have been hovered over
		rowLength = fighters[0].length - 1;
		
	moves.forEach( (move) => {
		'use strict';

		if (move === 'up') {
			row = Math.max(row - 1, 0);

		} else if (move === 'down') {
			row = Math.min(row + 1, 1);

		} else if (move === 'left') {
			col = (col === 0) ? rowLength : col - 1;

		} else if (move === 'right') {
			col = (col + 1) % 6;
		}
		
		fightersHovered.push(fighters[row][col]);
	});

	return fightersHovered;
};

let fighters = [
		['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
		['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
	],
	moves;

moves = ['up','left','down','right','up','left','down','right'];
streetFighterSelection(fighters, [1, 0], moves); // should return ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);