// Pass one param with 9x9 2-dimensional array and reply w/ a boolean

// 'board' is an array containing 9 arrays of 9 numbers each
function isValidSudoku(board){
	var oneToNine = '123456789',
		col1 = [],
		col2 = [],
		col3 = [],
		col4 = [],
		col5 = [],
		col6 = [],
		col7 = [],
		col8 = [],
		col9 = [],
		row;

	// check to see if all 9 rows/cols have unique numbers
	for(var i = 0; i < 9; i++){
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
			console.log('row error');
			return false;
		}
	}

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
		console.log('column error');
		return false;
	}

	// TODO: check to see if all 9 regions have unique numbers

	return true;
} // end doneOrNot


isValidSudoku([

// [5, 3, 4, 6, 7, 8, 9, 1, 2],
// [6, 7, 2, 1, 9, 0, 3, 4, 9],
// [1, 0, 0, 3, 4, 2, 5, 6, 0],
// [8, 5, 9, 7, 6, 1, 0, 2, 0],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 0, 1, 5, 3, 7, 2, 1, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 0, 0, 4, 8, 1, 1, 7, 9]

[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]

]);