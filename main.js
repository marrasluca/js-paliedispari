//Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
let parola = prompt ("inserisci una parola")
console.log (`la parola è: ${parola}`)
let parolaPalindroma = ""

function palindroma (){
    for ( let i = parola.length - 1; i >= 0; i--){
        parolaPalindroma += parola.charAt(i)
    }

    if ( parola === parolaPalindroma ){
        return ` la parola ${parola} e ${parolaPalindroma}: è palindroma`
    }
     else {
        return ` la parola ${parola} e ${parolaPalindroma}: non è palindroma`
    }
    }
    document.write( palindroma() )










//Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
