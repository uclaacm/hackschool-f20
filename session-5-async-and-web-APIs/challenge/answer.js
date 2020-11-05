const getNumberFact = () => {
	if (inputnum.value.length === 0) {
		alert("Please input a number!");
	}
	else {
		const num = inputnum.value;
		const numString = num.toString();
		fetch(`http://numbersapi.com/${numString}?json`) 
		.then( (response) => response.json())
		.then( (resJson) => {
			console.log(resJson);
			numberfact.innerHTML = resJson.text;
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}