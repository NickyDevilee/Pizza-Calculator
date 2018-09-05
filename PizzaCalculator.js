/*Nicky Devilee
Bol4 applicatieontwikkelaar
opdracht: PizzaCalculator*/

// variabelen voor de prompt met vragen over de hoeveelheid pizza's/drankjes en het adres.
var smallpizzas = prompt("Hoeveel Small pizza's wilt u?");
var mediumpizzas = prompt("Hoeveel Medium pizza's wilt u?");
var largepizzas = prompt("Hoeveel Large pizza's wilt u?");
var drankjes = prompt('Hoeveel drankjes wilt u?');
var straat = prompt('In welke straat wilt u het laten bezorgen? Straat + huisnummer.');
var postcode = prompt('Wat is uw postcode?');

//constanten met de prijs vermenigvuldigd met de gevraagde hoeveelheid.
const prijsSmall = smallpizzas * 5;
const prijsMedium = mediumpizzas * 7.5;
const prijsLarge = largepizzas * 10;
const prijsdrankjes = drankjes * 1.50;

//een totale variabele voor de totaalprijs waar alle prijzen worden opgeteld.
var totaal = prijsSmall + prijsMedium + prijsLarge + prijsdrankjes;

//door alle document.write word weergegeven op de site hoeveel pizza's/drankjes er besteld zijn en de prijs + het adres en de totaalprijs.
document.write("Aantal Small pizza's: " + smallpizzas);
document.write('<br>' + 'Prijs: €' + prijsSmall);

document.write('<br>' + '<br>' + "Aantal Medium pizza's: " + mediumpizzas);
document.write('<br>' + 'Prijs: €' + prijsMedium);

document.write('<br>' + '<br>' + "Aantal Large pizza's: " + largepizzas);
document.write('<br>' + 'Prijs: €' + prijsLarge);

document.write('<br>' + '<br>' + "Aantal Drankjes: " + drankjes);
document.write('<br>' + 'Prijs: €' + prijsdrankjes);

document.write('<br>' + '<br>' + "Adres: " + '<br>' + 'Straat: ' + straat);
document.write('<br>' + 'Postcode: ' + postcode);

document.write('<br>' + '<br>' + "Totaalprijs: €" + totaal);