let passenger;
let kmtot;
let price;
let age;
const genButton = document.querySelector("#generatebutton");

genButton.addEventListener("click", 
    function() {
        console.log("Invio Click")

        passenger = document.getElementById("passengername").value;
        kmtot = Number(document.getElementById("kmtxt").value);
        age = Number(document.getElementById("agetxt").value);

        console.log("✅ Nome del passeggero: ", passenger);

        if (typeof kmtot === 'number' && !Number.isNaN(kmtot) && kmtot > 0) {  //!Number.isNaN impedisce che Nan venga accettato come numero

            console.log('✅ km value is a number');
            price = (kmtot * 0.21).toFixed(2);
            console.log("Prezzo attuale: €", price);
            
            if (typeof age == 'number' && !Number.isNaN(age) && age > 0) {
                console.log('✅ age value is a number'); 

                if (age < 18) {
                    console.log('Il passeggero è minorenne, si applica sconto del 20%!');
                    price = (price * 80 / 100).toFixed(2);     //arrotondare il risultato ai decimali
                    console.log("Prezzo finale: €", price);

                } else if (age >= 65) {
                    console.log('Il passeggero è Over65, si applica sconto!');
                    price = (price * 60 / 100).toFixed(2);
                    console.log("Prezzo finale: €", price);
              
                } else {
                    console.log('Il passeggero non ha diritto ad alcuno sconto.');
                    console.log("Prezzo finale: €", price);

                }

            } else {
                console.log('⛔️ value is NOT a number');
                alert("Valore inserito non valido, la preghiamo di riprovare!");   
            
            }    
            
        } else {
        
        console.log('⛔️ value is NOT a number');
        alert("Valore Km inserito non valido, la preghiamo di riprovare!");        
        }
    }
)