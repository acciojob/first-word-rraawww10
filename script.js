function firstWord(s) {
  // your code here
		if(s === ''){
		return '';
	}
	let firstSpace = s.indexOf(' ');
    if(firstSpace === -1){
		return s;
	}
	
	return s.slice(0 , firstSpace);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
