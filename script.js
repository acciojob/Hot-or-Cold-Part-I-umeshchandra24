//your code here
var btn= document.getElementById("btn");
var numPtag = document.getElementById("num");
var res = document.getElementById("respond");
var inputValue = document.getElementById("guess").value;
function randomNum() {
	no = Math.floor(Math.random()*40 -20);
	document.getElementById("num").innerText = no;
	guessNum();
	print();
}
function guessNum() {
	input = Number(document.getElementById("guess").value);
}
function print() {
	if(Math.abs(no-input) <=5){
		document.getElementById("respond").innerText="Hot";
	}
	else{
		document.getElementById("respond").innerText="Cold";
	}
}
btn.addEventListener("click" , randomNum);
