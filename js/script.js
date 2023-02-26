let inputKm = document.getElementById("distanceKm");
let inputAge = document.getElementById("userAge");
let inputName = document.getElementById("userName");
let inputLastName = document.getElementById("userLastName");

let recapButton = document.getElementById("recap");
let clearButton = document.getElementById("clear");
let pricePerKm = 0.21;

recapButton.addEventListener("click", function() {

    let distanceKm = inputKm.value;
    let totalPrice = (distanceKm * (0.21));
    let minorDiscount = (totalPrice / 100 * 20);
    let seniorDiscount = (totalPrice / 100 * 40);
    
    if (isNaN(inputKm.value) || isNaN(inputAge.value)) {
    
    //    Per eseguire subito l' If col calcolo dei valori e solo dopo eventualmente mandare l'alert allora avrei dovuto scriverlo in uno di questi due minorDiscount,
    //    facendo la negazione e invertendo if ed else qui sotto
    //    if (!isNaN(inputKm.value) || !isNaN(inputAge.value)) {
    //    if (!(isNaN(inputKm.value) || isNaN(inputAge.value))) {

        alert("Inserire un numero");

    } else

        if (inputAge.value < 18) {

            console.log(totalPrice - minorDiscount);
    
        } else if (inputAge.value > 65) {

            console.log(totalPrice - seniorDiscount);

        } else {

            console.log(totalPrice.toFixed(2))
        }

        console.log("distanza totale: " + distanceKm);
        console.log("prezzo intero: " + totalPrice);
        console.log("sconto minorenni: " + minorDiscount);
        console.log("sconto senior: " + seniorDiscount);

        let ticketKm = document.getElementById("ticketKm")
        ticketKm.value = ("Distanza totale: " + distanceKm)

        let ticketPrice = document.getElementById("ticketPrice")
        ticketPrice.value = ("Importo totale: " + totalPrice);

        let ticketName = document.getElementById("ticketName")
        ticketName.value = ("Nome: " + inputName.value)

        let ticketLastName = document.getElementById("ticketLastName")
        ticketLastName.value = ("Cognome: " + inputLastName.value)

})

clearButton.addEventListener("click", function(){

    inputKm.value = "";
    inputAge.value = "";
    inputName.value = "";
    inputLastName.value = "";

})

