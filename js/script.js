let distanceKmEl = document.getElementById("distanceKm");
let distanceKmButton = document.getElementById("distanceKmButton");
let distanceKm = distanceKmEl.value;
let userAge;
let totalPrice = (distanceKm * (0.21));
let minorDiscount = (totalPrice / 100 * 20);
let seniorDiscount = (totalPrice / 100 * 40);
let pricePerKm = 0.21; //se poi volessi cambiare le tariffe

// console.log("distanza totale " + distanceKm);
// console.log("prezzo intero " + totalPrice);
// console.log("sconto minorenni " + minorDiscount);
// console.log("sconto senior " + seniorDiscount);

// console.log(distanceKmEl.value);

let userAgeEl = document.getElementById("userAge");
let userAgeButton = document.getElementById("userAgeButton")

userAgeButton.addEventListener("click", function() {
    userAge = userAgeEl

    console.log(userAge)
})

 
 
//     if (userAgeEl.value < 18) {

//     console.log(totalPrice - minorDiscount);

//     // document.writeln(`L'importo da pagare è di ${(totalPrice - minorDiscount).toFixed(2)} €`)

// } else if (userAge > 65) {

//     console.log(totalPrice - seniorDiscount);

//     // document.writeln(`L' importo da pagare è di ${(totalPrice - seniorDiscount).toFixed(2)} €`)

// } else {

//     console.log(totalPrice.toFixed(2))

//     // document.writeln(`L' importo da pagare è di ${totalPrice.toFixed(2)} €`)

// }

// })

