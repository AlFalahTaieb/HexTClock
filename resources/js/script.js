function changeColor() {

	// Counting number

	x = 1;

	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

  
	// Two digits

	if (hour <= 9) {
		hour = "0" + hour;
	}

	if (minute <= 9) {
		minute = "0" + minute;
	}

	if (second <= 9) {
		second = "0" + second;
	}

	var color = '#'+ hour + minute + second;

	document.body.style.backgroundColor = color;

	document.getElementById("hex").innerHTML = 'It'+''+'s' +' '+ hour+':' + minute+':' + second;

	// Excute la fonction chaque seconde 
    


	setTimeout(changeColor, x * 1000);

}

changeColor();


 