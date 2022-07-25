/*Prompt: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
*/

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Main function
const cleanTheRoom = (arr) => {
	//Sort array numerically
	arr.sort(function(a,b){return a - b});

	//Declare empty final array to be returned
	let finalArr = [];

	//Iterator variable
	let i = 0;
	
	//Loop through input array
	while(i < arr.length-1){

		//Temp array to store like numbers
		let temp = [];

		if(arr[i] === arr[i+1]){

			//Loop through all like numbers
			while(arr[i] === arr[i+1] && i < arr.length){
				temp.push(arr[i]);
				i++;
			}

			//Add last same number to temp array and push array to final array
			temp.push(arr[i]);
			finalArr.push(temp);
			i++;
		}

		else{
			//Push unique number to final array
			finalArr.push(arr[i]);
			i++;
		}
	}

	//If last number is unique, push to final array
	if(i === arr.length-1)
		finalArr.push(arr[i]);
	
	return finalArr;
}//End function

cleanTheRoom(arr);