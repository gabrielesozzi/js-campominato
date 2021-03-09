// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un
// numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il
// punteggio, cioè il numero di volte che l’utente ha inserito un
// numero consentito.


// Creo un array vuoto in cui inserire i numeri-bomba
var arrayBombe = [];

// Creo un array vuoto in cui inserire numeri-vincenti
var listaNumeriSafe = [];

// Creo var numero max da utilizzare più volte nel codice
var maxNumber = 100;

arrayBombe = istituisciBombe(arrayBombe, maxNumber);
console.log(arrayBombe);

// Stabilisco score e comunico risultato partita

var score = giocoConsole(arrayBombe, listaNumeriSafe, maxNumber);

console.log("Hai perso!");
console.log("Il tuo score è di " + score + " punti");

// Funzioni


    // Creo funzione per stabilire i 16 numeri-bomba da inseire in array, sfruttando un'altra funzione per generare i numeri random
    function istituisciBombe(arrayBombe, max) {
      while (arrayBombe.length < 16) {
        var numero = randomNumber(1, max)

        if (!arrayBombe.includes(numero)) {
          arrayBombe.push(numero)
        }else {
        }
      }
      return arrayBombe
    }

    // Creo funzione per chiedere ad utente numero attraverso prompt. Fra i parametri inserisco anche i numeri-bomba
    function giocoConsole(arrayBombe, listaNumeriSafe, maxNumber) {
      while (listaNumeriSafe.length < maxNumber - 16) {
        var sceltaUtente = parseFloat(prompt("Inserisci il tuo numero:"))

        if (!isNaN(sceltaUtente) && sceltaUtente <=100 && 1 <= sceltaUtente && !listaNumeriSafe.includes(sceltaUtente)) {
          if (!arrayBombe.includes(sceltaUtente)) {
            listaNumeriSafe.push(sceltaUtente);
          } else {
            return listaNumeriSafe.length;
          }
        }
      }
      return listaNumeriSafe.length;
    }


    // Creo funzione per generare numeri random e inserisco condizioni per garantire che si tratti di numeri
    function randomNumber (min, max) {
      if (isNaN(min) || isNaN(max)) {
        console.log("Non hai inserito un numero");
      } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }
