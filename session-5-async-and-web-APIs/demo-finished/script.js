const catfact = document.querySelector('#cat-fact');
const catbtn = document.querySelector('#cat-btn');
const inputnum = document.querySelector('#input-number');
const numbtn = document.querySelector('#num-btn');
const numberfact = document.querySelector('#number-fact');

const getCatFactFromAPI = () => {
	fetch('https://cat-fact.herokuapp.com/facts/random')
	.then( (response) => response.json())
	.then( (resJson) => {
		console.log(resJson);
		catfact.innerHTML = resJson.text;
	})
	.catch( (err) => {
		console.log(err);
	});
}

catbtn.addEventListener("click", getCatFactFromAPI);

//Challenge Time! 
// Read the API reference in: http://numbersapi.com
// to display a number fact on the webpage!
// The DOM API ground work has been done for you :)
// You only need to worry about the TODO sections.
const getNumberFact = () => {
    // TODO
}

numbtn.addEventListener("click", getNumberFact);


