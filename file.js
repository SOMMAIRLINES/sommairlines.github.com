function myFunction() {
	let info = document.getElementById("eingabe").value;
	
	if (isNaN(info)) {
		document.getElementById("ausgabe").innerHTML = "Natürlich fliegen wir auch nach " + info;
	} else {
		alert("Bitte eine Stadt/Land eingeben!")
	}
}