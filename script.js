let kmtot;
let price;
let age;
const buttonKm = document.querySelector("#kmbutton");
const buttonAge = document.querySelector("#agebutton");

buttonKm.addEventListener("click", 
    function() {
        console.log("Invio Click")

        kmtot = Number(document.getElementById("kmtxt").value);

        if (typeof kmtot === 'number' && !Number.isNaN(kmtot) && kmtot > 0) {  //!Number.isNaN impedisce che Nan venga accettato come numero

            console.log('✅ value is a number');
            console.log("Km desiderati: ",kmtot);
            price = kmtot * 0.21;
            console.log("Prezzo attuale: €", price);
            
        } else {
            
            console.log('⛔️ value is NOT a number');
            alert("Valore inserito non valido, la preghiamo di riprovare!");        
        }       
        
    }
)

console.log(kmtot) //Provvisorio, i dati non escono da questa function e non capisco come farli uscire

buttonAge.addEventListener("click", 
    function() {
        console.log("Invio Click");

        age = Number(document.getElementById("agetxt").value);

        if (typeof age == 'number' && !Number.isNaN(age) && age > 0) {
            console.log('✅ value is a number');

            if (age < 18) {
                console.log('Il passeggero è minorenne, si applica sconto del 20%!');
                price = (kmtot * 0.21 * 80 / 100).toFixed(2);     //arrotondare il risultato ai decimali
                console.log("Prezzo finale: €", price);




            } else {
                console.log('⛔️ value is NOT a number');
                alert("Valore inserito non valido, la preghiamo di riprovare!");   
            }
        }
    }

)