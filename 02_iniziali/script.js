/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const findFirstCharacter = (array) => {

  let firstCharacters = [];
  for (let i = 0; i < array.length; i++) {
    let firstCharacter = array[i].charAt(0);

    firstCharacters.push(firstCharacter);

  }
  return firstCharacters;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findFirstCharacter(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]