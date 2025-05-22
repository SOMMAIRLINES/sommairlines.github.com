function ergebnis() {
let deal = document.getElementById("deal").value;
let day = document.getElementById("day").value;
let day1 = document.getElementById("day1").value;
let day2 = document.getElementById("day2").value;
let month = document.getElementById("month").value;
let month1 = document.getElementById("month1").value;
let month2 = document.getElementById("month2").value;
let year = document.getElementById("year").value;
let year1 = document.getElementById("year1").value;
let name = document.getElementById("name").value;
let nachname = document.getElementById("nachname").value;
let bday = document.getElementById("bday").value;
let email = document.getElementById("emailfield").value;


document.getElementById("ziel").innerHTML = "Ziel: " + deal;
document.getElementById("start").innerHTML = "Abflug: " + day + "." + month + "." + year;
document.getElementById("ende").innerHTML = "Ankunft: " + day1 + "." + month1 + "." + year1;
document.getElementById("namef").innerHTML = "Name: " + name + " " + nachname;
document.getElementById("alter").innerHTML = "Geburtstag: " + day2 + "." + month2 + "." + bday;
document.getElementById("email").innerHTML = "Email: " + email;
}
