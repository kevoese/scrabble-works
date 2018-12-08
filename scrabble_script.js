const scrabbleScore = () => {
	const word     = document.getElementById('collect').value.trim();
	let score    = 0;
	let scrabble = {};
	let alpha    = ["AEIOUNLRST", "DG", "BCMP", "FHVWY", "K", "JX", "QZ"];
	let mark 	 = [1, 2, 3, 4, 5, 8, 10];
	for(let j = 0; j < 7; j++)
		for(let i = 0; i < alpha[j].length ; i ++)
			scrabble[alpha[j][i]] = mark[j];

	for(let i of word.toUpperCase()){
		score += scrabble[i];
	}

	if(isNaN(score))
		score = "INVALID WORD";

	const wrapper = document.querySelector('#wrapper')

	wrapper.innerHTML =  '<h2>SCRABBLE SCORE</h2>';
	wrapper.innerHTML +=  '<span class = "result">' + score + '</span>';
	wrapper.innerHTML += '<button class = "button2" onclick=" returnfxn()">CLEAR</button>'; 
}


const returnfxn = () => {
	wrapper.innerHTML = '<label><h2>INPUT FIELD</h2></label>';
	wrapper.innerHTML += '<input type="text" id ="collect" name="input_num" placeholder="ENTER A WORD">';
	wrapper.innerHTML += '<button class = "button1" onclick="scrabbleScore()">SUBMIT</button>';
}

function isEven()
{
	if(n == 0)
		return true;
	else if(n == 1)
		return false
    return isEven(n - 2)
}


function countChar(str, i){
	let count = 0;
	for(let e of str)
		if(e == i)
			count++;
	return count;
}

console.log(countChar("anythiniiiiigisreal", "i"));

