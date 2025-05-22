function auswerten() {
	const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
	}

let eingabe = document.getElementById("eingabe").value;
let personen = document.getElementById("personen").value;
let nebeneinander = document.getElementById("auswahl").value;
let day = document.getElementById("day").value;
let day1 = document.getElementById("day1").value;
let day2 = document.getElementById("day2").value;
let month = document.getElementById("month").value;
let month1 = document.getElementById("month1").value;
let month2 = document.getElementById("month2").value;
let year = document.getElementById("year").value;
let year1 = document.getElementById("year1").value;
let year2 = document.getElementById("bday").value;
let name = document.getElementById("name").value;
let nachname = document.getElementById("nachname").value;
let bday = document.getElementById("bday").value;
let email = document.getElementById("emaileingabe").value;

let randomNumber = getRandomNumber(150, 300);
randomNumber = Math.round(randomNumber);
document.getElementById("kostenpp").innerHTML = "Kosten pro Person: " + randomNumber + "€" ;
randomNumber = randomNumber * personen;

if (nebeneinander != "yes") {
	document.getElementById("neben").innerHTML = "Sitzplatz reservierung: Nein"
} else {
	randomNumber = randomNumber + personen * 25;
	document.getElementById("neben").innerHTML = "Sitzpläte nebeneinander: Ja"
}


document.getElementById("ziel").innerHTML = "Ziel: " + eingabe ;
document.getElementById("kosten").innerHTML = "Kosten: " + randomNumber + "€" ;
document.getElementById("personena").innerHTML = "Personen: " + personen + " Personen" ;
document.getElementById("start").innerHTML = "Abflug: " + day + "." + month + "." + year + " 7:00 Uhr (fix)";
document.getElementById("ende").innerHTML = "Ankunft: " + day1 + "." + month1 + "." + year1 + " 15:00 Uhr (fix)";
document.getElementById("alter").innerHTML = "Geburtstag: " + day2 + "." + month2 + "." + year2;
document.getElementById("email").innerHTML = "Email-adresse: " + email;
document.getElementById("namef").innerHTML = "Name: " + name + " " + nachname;
}