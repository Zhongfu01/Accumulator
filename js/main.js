

function accumulate(input){
	var sum = 0, cur = 0, factor = 1;

	// traverse the input from the back
	for(let i = input.length - 1; i >= 0; --i){
		let num = parseInt(input[i]);
		if(!isNaN(num)){
			// build the current number
			cur += factor * num;
			factor *= 10;
			continue;
		}
		else if(input[i] == "-"){
			cur *= -1;
		}
		summary();
	}
	summary()
	if(sum == 0)
		return "";
	return sum;


	//  child functions
	function summary(){
		sum += cur;
		cur = 0;
		factor = 1;
	}
}

function calculate(){
	let text = document.getElementById("input").value;
	let sum = accumulate(text, '+');
	document.getElementById("result").innerHTML = sum;
}