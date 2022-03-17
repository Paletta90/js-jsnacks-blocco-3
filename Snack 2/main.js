let container = document.getElementById("container");

let n = parseInt(prompt("Inserisci quanti array vuoi stampare:"));

// Controllo se ho inserito un numero corretto
if(!isNaN(n) && n > 0){

    // Creo N array
    let i = 0;
    while(i < n){

        // Titolo per ogni array stampato
        container.innerHTML += `<h2>Stampo array numero ${i + 1}</h2>`;

        // Creo l'array n
        let array = []; 

        // Riempio ogni array con 10 numeri random
        let y = 0;
        while(y < 10){

            let random = Math.floor( ( Math.random() * 100 ) + 1 );
            array.push(random);
            container.innerHTML += `<div>Array[${y + 1}]: ${random}</div>`;

            y++;
        }

        i++;
    }

}else{
    alert("Digita un numero corretto!");
    location.reload();
}