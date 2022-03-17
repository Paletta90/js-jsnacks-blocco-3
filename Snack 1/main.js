let container = document.getElementById("container");

let listNum = [];
let sum = 0;
let i = 0;

while(sum < 50){

    // Inserisco un numero
    let x = parseInt(prompt(`Inserisci un numero (Sei ad un totale di ${sum}):`));
    listNum.push(x);

    // Faccio la somma dei numeri inseriti
    sum += listNum[i]
    i++
}

container.innerHTML += `La somma ha superato 50: ${sum}`