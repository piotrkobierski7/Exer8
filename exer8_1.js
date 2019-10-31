'use strict';
var output = document.getElementById('output');
output.innerHTML = 'Click the button!' + '<br><br>' + output.innerHTML; 
var button_CtoF = document.getElementById('C-F');
var button_FtoC = document.getElementById('F-C');
var tempOffsetFahr = 32; //static numbers for C->F formula
var tempMultipleFahr = 1.8; //static numbers for C->F formula
var temperatureC,temperatureF;
function checkInfo (temperatureC) {
  	if (temperatureC < 0) { 
    	return ' At this temperature water freezes';
	} else if (temperatureC < 100) {
  		return ' At this temperature water is in liquid form';
	} else { 
  		return ' At this temperature water is in gas form';
  	}
}
function showInfo (temperatureC) {
	var temperatureF=1.8*temperatureC+32;
	output.innerHTML = 'Temperature in Celsius degrees is '+temperatureC+ '<br><br>' + 'Temperature in Fahrenheit degrees is ' 
	+temperatureF+ '<br><br>' + checkInfo(temperatureC) + '<br><br>'+ '***************'  + '<br><br>' + output.innerHTML;
}
button_CtoF.addEventListener ('click', function() {	
	temperatureC = window.prompt ('What is the temperature in Celsius degree?');
		if (!isNaN(temperatureC)){
	   		showInfo (temperatureC);
	  } else {
	    output.innerHTML = temperatureC +' is not a number'+ '<br><br>'+ output.innerHTML; 
	  }
}); 
button_FtoC.addEventListener ('click', function() {	
	temperatureF = window.prompt ('What is the temperature in Fahrenheit degree?');
	if (!isNaN (temperatureF)) {
		temperatureC = (temperatureF - tempOffsetFahr)/tempMultipleFahr;
	   	showInfo (temperatureC);
	} else {
	   	output.innerHTML = temperatureC +' is not a number'+ '<br><br>'+ output.innerHTML; 
	}
}); 




