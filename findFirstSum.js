/*
 Given a list of integers and a single sum value, return the first two values (parsing from the left) in order of appearance that add up to form the sum.
 */

sum_pairs = function(ints, s){
	var result = [],
		i,
		j,
		len = ints.length;

	for(i = 0; i < len; i++){
		 for(j = 0; j < len; j++){
			if(ints[i] + ints[j] === s){
				result.push(ints[i], ints[j]);
				return result;
			}
		 }
	}
}


//console.log('answer: ', sum_pairs([1, 4, 8, 7, 3, 15], 8)); // => [1, 7]
//console.log('answer: ', sum_pairs([1, -2, 3, 0, -6, 1], -6)); // => [0, -6]
console.log('answer: ', sum_pairs([10, 5, 2, 3, 7, 5], 10)); // => [3, 7]