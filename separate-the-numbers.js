
/*
function separateNumbers(s) {
    var index;
    var iteration;
    var number;
    var BigNumber = require('big-number');
 
    for (var i = 1; i < s.length; i++) {
        number = new BigNumber(s.substr(0, i));
        index = i;
        iteration = 1;
        while (s.indexOf(number.plus(iteration), index) === index) {
            index += number.plus(iteration).toString().length;
            iteration++;
        }
        
        if (index === s.length) {
            console.log(`YES ${number}`);
            return;
        }
    }
    
    console.log("NO");
}
*/

function separateNumbers(s) {
	let BigNumber = require('big-number');
	
	for(let i=1; i<s.length; i++) {
		let len = i;
		// Obj assign to var, will be ref, need copy
		let currNumOrigStr = s.substr(0, len);
		let currNumObj = new BigNumber(currNumOrigStr);
		let nextIndex = i; // changing

		/*
		// test
		console.log('-- init --');
		console.log(currNumOrigStr);
		console.log(currNumObj.toString());
		*/		


		// code as condi
		while(s.indexOf(currNumObj.plus(1).toString(), nextIndex) == nextIndex) {
			nextIndex = nextIndex + currNumObj.toString().length;

			/*
			// test
        	console.log('-- loop --');
        	console.log(currNumObj.toString());
			console.log(nextIndex);
			*/
		} // end loop			


		if(s.length == nextIndex)
			return "YES " + currNumOrigStr;
	
	} // end loop

	return 'NO';
}

let s = '1234';
//let s = '99100101102';
//let s = '8910';
//let s = '1';
let out = separateNumbers(s);
console.log(out);
