let inputKm = document.getElementById("distanceKm");
let inputAge = document.getElementById("userAge");

let recapButton = document.getElementById("recap");
let clearButton = document.getElementById("clear");
let pricePerKm = 0.21;

recapButton.addEventListener("click", function() {

    let distanceKm = inputKm.value;
    let totalPrice = (distanceKm * (0.21));
    let minorDiscount = (totalPrice / 100 * 20);
    let seniorDiscount = (totalPrice / 100 * 40);
    

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

})

clearButton.addEventListener("click", function(){

    inputKm.value = "";
    inputAge.value = "";

})



