// Inserisco il bonus chiedendo all'utente la difficoltà

var arrayBombe = [];
var listaNumeriSafe = [];
var maxNumber = 100;

var level = parseInt(prompt("Scegli la difficoltà del giovo: digita 0, 1 oppure 2"))

if (level === 0) {
  maxNumber = 100;
  console.log("Il punteggio massimo è pari a 84");
} else if (level === 1) {
  maxNumber = 80;
  console.log("Il punteggio massimo è pari a 64");
} else if (level === 2) {
  maxNumber = 50
  console.log("Il punteggio massimo è pari a 34");
}


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
