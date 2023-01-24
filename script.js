
// funzione per capire se la parola è palindroma

// Chiedo all'utente di darmi una parola e la salvo in una variabile

var parolaUtente = prompt( " Scrivimi una parola in modo che possa valutare se è palindroma o meno" );

var risultato = valutaPalindromo(parolaUtente);

console.log(risultato);

// funzione che accetta un argomento stringa, confronta l'argomento passato e ritorna un buleano

function valutaPalindromo (paroladavalutare) {

    var parolaValutata = false; 

    var parola1 = paroladavalutare.split("");

    parola1.reverse();

    var nuovaStringa = parola1.join("");

    if( paroladavalutare === nuovaStringa ) {

        parolaValutata = true;
    } 

    return parolaValutata;
}






