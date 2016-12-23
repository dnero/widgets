// 'rows' is an array containing 9 arrays of 9 numbers
function isValidSudoku(rows){

	var columns = [],
		regions = [],
		i = 0,
		j,
		k,
		isValid = (nums) => nums.sort().join('') === '123456789'; // check if array of nums is 1 - 9

	for(; i < 9; i++){
		columns[i] = []; // set columns array at each position

		for(j = 0; j < 9; j++){
			k = Math.floor(j / 3) + (Math.floor(i / 3) * 3); // build a regional array grouping by square blocks of 3
			//console.log('i:', i, 'j:', j, 'k:', k);

			regions[k] = regions[k] || []; // default regions array
			regions[k].push( rows[i][j] ); // add the node to calculated region
			columns[i].push( rows[j][i] ); // use the inner loop's iterating to add all column nodes (vertically)
		}
	}

	return regions.every(isValid) && columns.every(isValid) && rows.every(isValid);
}