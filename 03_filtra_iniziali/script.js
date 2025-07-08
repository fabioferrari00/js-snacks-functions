/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const findLetter = (array, letter) => {

  let wordWithLetter = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === letter) {
      wordWithLetter.push(array[i]);
    }
  }

  return wordWithLetter;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(findLetter(names, 'L'))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]