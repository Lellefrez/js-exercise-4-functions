/*
1. Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

/*
function comparazione(parola1, parola2) {
  let risultato = false
  if (parola1.length === parola2.length) {
    risultato = true;
  }
  return risultato;
}
const input1 = prompt("Inserisci la prima parola");
const input2 = prompt("Inserisci la seconda parola");

const result = comparazione(input1, input2);

if (result) {
  console.log(input1, input2);
}
else if (input1.length > input2.length) {
  console.log(input1)
} else {
  console.log(input2);
}
*/

/*
2. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata 
(es. Ciao -> oaiC). Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo

3. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]

4. Crea un array di 10 oggetti che rappresentano una mela, indicando per ognuna varietà, peso e diametro.
Calcola quanto pesano tutte le mele.
BONUS Dividi in due array separati le mele con diametro maggiore di 10cm. Infine stampa separatamente quanto pesano i due gruppi di mele.
*/


function giraParola(x) {
  let parolaGirata = "";
  for (let i = x.length - 1; i >= 0; i--) {
    parolaGirata += x[i];
  }
  return parolaGirata
}
const inputUtente = prompt("Scrivi la parola da girare");

const risultato = giraParola(inputUtente)
console.log(risultato);
if (risultato === inputUtente) {
  alert("è un palindromo");
}

