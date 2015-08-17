var calc = function calculate(n){

	var out = [];
	while(n!=1){
		out.push(n);
		if(n%2==0){
			n = n/2;
		}else{
			n = 3*n+1;
		}
	}
	out.push(1);
	return out;
};
var calcToDom = function calculate_into_dom(n){
	var output = document.getElementById("output");
	var stats = document.getElementById("stats");
	var result = calc(n);
	output.innerHTML = result.join(' - ');
	stats.innerHTML = result.length+' steps taken.';
};
calcToDom(42);

var input = document.getElementById("input");
input.onchange = function(){
	var val = input.value;
	var valInt = parseInt(val);
	if(valInt.toString()===val && valInt>=1){
		calcToDom(valint);
	}
};

var random = function calc_with_random(){
	var n = Math.floor(Math.random()*1000);
	input.value = n;
	calcToDom(n);
};
