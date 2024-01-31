let passenger;
let kmtot;
let price;
let age;
let cab;
let cp;
const genButton = document.querySelector("#generatebutton");
const clButton = document.querySelector("#clearbutton");

genButton.addEventListener("click", 
    function(event) {
        event.preventDefault();   //To block auto-refresh

        console.log("Invio Click")

        passenger = document.getElementById("passengername").value;
        kmtot = Number(document.querySelector("#kmtxt").value);
        age = Number(document.querySelector("#agetxt").value);

        console.log("✅ Nome del passeggero: ", passenger);

        if (typeof kmtot === 'number' && !Number.isNaN(kmtot) && kmtot > 0) {  //!Number.isNaN impedisce che Nan venga accettato come numero

            console.log('✅ km value is a number');
            price = (kmtot * 0.21).toFixed(2);
            console.log("Prezzo attuale: €", price);
            
            if (typeof age == 'number' && !Number.isNaN(age) && age > 0) {
                console.log('✅ age value is a number'); 

                //Random Cab Number

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
                cab = getRandomInt(1, 12);

                // Random CP Number

                cp = Math.floor(Math.random()*90000) + 10000;

                if (age < 18) {
                    console.log('Il passeggero è minorenne, si applica sconto del 20%!');
                    price = (price * 80 / 100).toFixed(2);     //arrotondare il risultato ai decimali
                    console.log("Prezzo finale: €", price);

                    document.querySelector('#name_from_input').innerHTML = passenger;
                    document.querySelector('#coupon').innerHTML = "Under18";
                    document.querySelector('#random_cab').innerHTML = cab;
                    document.querySelector('#random_cp').innerHTML = cp;
                    document.querySelector('#ticket_price').innerHTML = `€ ${price}`;

                } else if (age >= 65) {
                    console.log('Il passeggero è Over65, si applica sconto!');
                    price = (price * 60 / 100).toFixed(2);
                    console.log("Prezzo finale: €", price);

                    document.getElementById('name_from_input').innerHTML = passenger;
                    document.getElementById('coupon').innerHTML = "Over65";
                    document.getElementById('random_cab').innerHTML = cab;
                    document.getElementById('random_cp').innerHTML = cp;
                    document.getElementById('ticket_price').innerHTML = `€ ${price}`;
              
                } else {
                    console.log('Il passeggero non ha diritto ad alcuno sconto.');
                    console.log("Prezzo finale: €", price);

                    document.getElementById('name_from_input').innerHTML = passenger;
                    document.getElementById('coupon').innerHTML = "Nessuno";
                    document.getElementById('random_cab').innerHTML = cab;
                    document.getElementById('random_cp').innerHTML = cp;
                    document.getElementById('ticket_price').innerHTML = `€ ${price}`;
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



// Clear Fields Button

clButton.addEventListener("click", 
    function() {
        document.getElementById("passengername").value = "";
        document.getElementById("kmtxt").value = "";
        document.getElementById("agetxt").value = "";
    }
)