'use strict'
const arith = {
	arithGeo: function(arr) { 
		if(Array.isArray(arr)){ //check if the value of "arr" is a valid array data type 
			let diff = arr[1] - arr[0]; //get the difference by subtracting the vaule of the first index from the second index 
			let ratio = arr[1] / arr[0]; //get the ratio by dividing the first element by the second element
			let arith = true; //initialise the value of the arith and geo variable to true
			let geo = true;
			if(arr.length > 0){ //check if the length of the supplied array is greater than 0
				for(let i = 0; i < arr.length - 1; i++) {
					if( arr[i + 1] - arr[i] !== diff )
			/* If the next element in the loop minus the current 
			 *element is not equal to the value of diff set arith to false
			 */
						arith = false; 
			/* If the next element in the loop divided by the current 
			 *element is not equal to the value of ratio set the arith
			 variable to false
			 */
					if(arr[i + 1] / ratio !== arr[i])
						geo = false;
				}
			//If arith is true then its Arithmetic
				if(arith === true)
					return "Arithmetic";
			//If geo is true then it is Geometric
				else if(geo === true)
					return"Geometric";
			//If none of the conditions above are satisfied return -1
				else
					return -1;
			} else {
			//else return 0
	 		return 0;
	 	}
	 }
	 //If the conditons above are not met or not a valid array way put in return the error message
else {
	let msg = "Please supply a valid array";
	return msg;
}
}
}
module.exports = arith; //Export the arith function to be used in our test.