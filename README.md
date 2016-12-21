## Synopsis

These widgets are a gathering of algorithms that solve random issues one may come across in the app development.


## Code Example

// towerBuilder creates a "Christmas Tree" with **n** floors
// http://jsben.ch/#/0Cl6P
function towerBuilder(nFloors) {

	var floor = '*'.repeat(2 * nFloors - 1), // build foundation
		padding = '', // padding to apply to sides
		tower = []; // final tower

	for(; nFloors > 0; nFloors--){ // build from the ground up
		tower.unshift(padding + floor + padding); // stack floors
		padding += ' '; // padding increases on each new floor
		floor = floor.substr(2); // floor width decreases on each new floor
	}

	return tower;
}
