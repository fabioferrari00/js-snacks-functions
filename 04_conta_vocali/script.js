/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const findVocals = (string) => {
  let vocals = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a') {
      vocals++;
    } else if (string[i].toLowerCase() === 'e') {
      vocals++;
    } else if (string[i].toLowerCase() === 'i') {
      vocals++;
    } else if (string[i].toLowerCase() === 'o') {
      vocals++;
    } else if (string[i].toLowerCase() === 'u') {
      vocals++;
    }
  }
  return vocals;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)