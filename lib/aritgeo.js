'use strict'
const arith = {
	arithGeo: function(arr) { 
		if(Array.isArray(arr)){ //check if the value of "arr" is a valid array data type 
			let diff = arr[1] - arr[0]; 
			let ratio = arr[1] / arr[0]; 
			let arith = true; 
			let geo = true;
			if(arr.length > 0){ 
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
				if(arith === true)
					return "Arithmetic";
				else if(geo === true)
					return"Geometric";
				else
					return -1;
			} else {
	 		return 0;
	 	}
	 } 
else {
	let msg = "Please supply a valid array";
	return msg;
}
}
}
module.exports = arith; //Export the arith function to be used in our test.