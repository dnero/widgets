// 'board' is an array containing 9 arrays of 9 numbers

function doneOrNot(board){

	var
		startRow,
		startCol,
		tmpRegion,
		oneToNine = '123456789',
		row,
		col1 = [],
		col2 = [],
		col3 = [],
		col4 = [],
		col5 = [],
		col6 = [],
		col7 = [],
		col8 = [],
		col9 = [],
		i,
		k,
		l;

	// check to see if all 9 regions have unique numbers
	for(startRow = 0; startRow < 9; startRow += 3){

		for(startCol = 0; startCol < 9; startCol += 3){

			tmpRegion = [];
			for(k = 0; k < 3; k++){
				for(l = 0; l < 3; l++){
					tmpRegion.push(board[startRow + k][startCol + l]);
				}
			}
		} // end startCol loop

		if(tmpRegion.sort().join('') !== oneToNine) {
			return 'Try again!';
		}
	} // end starRow loop

	// check to see if all 9 rows/cols have unique numbers
	for(i = 0; i < 9; i++){
		row = board[i];

		// create columns of numbers
		col1.push(row[0]);
		col2.push(row[1]);
		col3.push(row[2]);
		col4.push(row[3]);
		col5.push(row[4]);
		col6.push(row[5]);
		col7.push(row[6]);
		col8.push(row[7]);
		col9.push(row[8]);

		// row check
		if(row.sort().join('') !== oneToNine) {
			return 'Try again!';
		}
	}; // end for

	// check to see if cols are unique
	if(
		col1.sort().join('') !== oneToNine ||
		col2.sort().join('') !== oneToNine ||
		col3.sort().join('') !== oneToNine ||
		col4.sort().join('') !== oneToNine ||
		col5.sort().join('') !== oneToNine ||
		col6.sort().join('') !== oneToNine ||
		col7.sort().join('') !== oneToNine ||
		col8.sort().join('') !== oneToNine ||
		col9.sort().join('') !== oneToNine
	) {
		return 'Try again!';
	}

	return 'Finished!';

} // end doneOrNot