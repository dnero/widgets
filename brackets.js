// determine whether or not a set of brackets are valid
// returns: boolean

function validBrackets(brackets){
	let prev = ''; // set a variable to store previous value while looping

	// since every opening bracket must have a closing one, skip processing if not valid
	if(brackets.length % 2 !== 0){
		return false;
	}

	// remove all whitespace characters
	brackets = brackets.replace(/\s/g, '');

	// loop until brackets doesn't equal the previous
	while(brackets !== prev){
		prev = brackets; // store current brackets value in previous var
		brackets = brackets
			.replace('()', '')
			.replace('[]', '')
			.replace('{}', ''); // strip all pairs out until we have an empty string
	}

	return brackets.length === 0;
}

// console.log(validBrackets('([{}])'));
// console.log(validBrackets('([{}])([{}])([{}]) ([ {}])([{}])([ {}])([{}])([{}])'));
// console.log(validBrackets('[(])'));