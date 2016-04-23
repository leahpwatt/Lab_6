button.addEventListener("click", function(){
	var temp=document.getElementById("temperature").value;
	var unit=document.getElementById("unit").value;
	if (unit === "F") {
	 	document.getElementById("result").innerHTML = ((temp - 32) * 5/9 + "&#8451");
	 }
	   else {
	 	document.getElementById("result").innerHTML = ((temp * 9/5) + 32 + "&#8457");
	 }
	})