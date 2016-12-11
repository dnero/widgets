function towerBuilder(nFloors) {

	var base = 2 * nFloors - 1, // calculate the maximum width
		level = 1, // what floor we're currently building
		floor = '*', // flooring
		padding = (base - floor.length) / 2, // padding to apply to sides
		tower = []; // final tower

	for(; level <= nFloors; level++){ // build top to bottom
		padding = ' '.repeat((base - floor.length) / 2); // determine padding needed
		floor = '*'.repeat(floor.length); // build floor

		tower.push(padding + floor + padding); // lay floor

		floor += '**'; // prepare for the next level
	}

	return tower;
}

// console.log(towerBuilder(10));