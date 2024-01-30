let kmtot;
let price;
let age;
const buttonKm = document.querySelector("#kmbutton");
const buttonAge = document.querySelector("#agebutton");

buttonKm.addEventListener("click", 
    function() {
        console.log("Invio Click")

        kmtot = +document.getElementById("kmtxt").value;

        if (typeof kmtot === 'number' && !Number.isNaN(kmtot) && kmtot > 0) {  //!Number.isNaN impedisce che Nan venga accettato come numero

            console.log('✅ value is a number');
            console.log("Km desiderati: ",kmtot)
            
        } else {
            
            console.log('⛔️ value is NOT a number');
            alert("Valore inserito non valido, la preghiamo di riprovare!");        
        }       
        price = kmtot * 0.21;
        console.log("Prezzo attuale: €", price);
    }
)

buttonAge.addEventListener("click", 
    function() {
        console.log("Invio Click")

        age = +document.getElementById("agetxt").value;

        if (typeof age === 'number' && !Number.isNaN(age) && age > 0) {

            console.log('✅ value is a number');
            console.log("Età passeggero: ", age);
        
            if (age < 18) {
                console.log('Il passeggero è minorenne, si applica sconto!');
                price = (price * 0.8).toFixed(2);     //arrotondare il risultato ai decimali
                console.log("Prezzo finale: €", price);
                
          
                } else if (age >= 65) {
                    console.log('Il passeggero è Over65, si applica sconto!');
                    price = (price * 0.6).toFixed(2);
                    console.log("Prezzo finale: €", price);

              
                    } else {
                        console.log('Il passeggero non ha diritto ad alcuno sconto.');
                        console.log("Prezzo finale: €", price);
        
                    }
            
            } else {
            
                console.log('⛔️ value is NOT a number');
                alert("Valore inserito non valido, la preghiamo di ricaricare la pagina e riprovare!");
            
            }
    }
)