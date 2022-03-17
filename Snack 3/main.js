let container = document.getElementById("container");

let sum = 0;

// Lista di numeri digitati
let listNum = [];

let i = 0;
while(i < 5){

    let x = parseInt(prompt(`Inserisci numero ${i + 1}:`));

    if(!isNaN(x)){

        listNum.push(x);
        sum += x

    }else{
        alert("Non hai digitato un numero corretto!");
    }
    

    i++;
}
console.log(listNum);

for(y = 0; y < listNum.length; y++){

    // Utilizzo questo if per fare in modo di non stampare l'ultimo +
    if(y != listNum.length - 1){
        container.innerHTML += `<span>${listNum[y]} + </span>`;
    }else{
        container.innerHTML += `<span>${listNum[y]}</span>`;
    }
    
}

container.innerHTML += `<span>= ${sum}</span>`;