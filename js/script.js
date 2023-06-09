// USER NAME
let userName;

userName= prompt('scrivi il tuo nome');

// USER SURNAME
let userSurname;

userSurname= prompt('scrivi il tuo cognome');

// USER FAVORITE COLOR
let userFavColor;

userFavColor= prompt('scrivi il tuo colore preferito');

// USER INFO 1
let info_Utente_1 = "Mi chiamo" + " " + userName + " " + userSurname  + ", il mio colore preferito é il" + " " + userFavColor + " " + " ed appartengo alla classe" + " " + "101"  ;

document.getElementById('info-utente-1').innerHTML= info_Utente_1;

// USER INFO 2
let info_Utente_2 = userName + userSurname + userFavColor + "101"  ;

document.getElementById('info-utente-2').innerHTML= info_Utente_2;
