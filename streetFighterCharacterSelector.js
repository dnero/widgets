// Return the path of characters hovered based on a list of directions run.
// wrapping works horizontally, but not vertically

let streetFighterSelection = (fighters, position, moves) => {

	let row = position[0], // row
		col = position[1], // column
		fightersHovered = []; // list of fighters that have been hovered over
	
	moves.forEach( (move) => {
		'use strict';

		if (move === 'up' && row !== 0) { // trying to move up and not on top row
			row--;

		} else if (move === 'down' && row < fighters.length - 1) {
			row++;
			console.log('row++', row);

		} else if (move === 'left') {
			col = (col === 0) ? fighters[0].length - 1 : col - 1;
			
		} else if (move === 'right') {
			col = (col === fighters[0].length - 1) ? 0 : col + 1;
		}
		
		fightersHovered.push(fighters[row][col]);
		console.log(`Row: ${row}, Col: ${col}`);
		console.log(fighters[row][col]);
		console.log('fightersHovered: ', fightersHovered);
	});
	
};

let fighters = [
		['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
		['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
	],
	moves;

// moves = ['up','left','down','right','up','left','down','right'];
// streetFighterSelection(fighters, [1, 0], moves); // should return ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);