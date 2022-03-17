let container = document.getElementById("container");

let listInvitati = ["Modestino	Arpa",
    "Abdelhamid  Ayadi",
    "Andrea	Bellucci",
    "Alberto Biga",
    "Vincenzo	Borriello",
    "Gerardo 	Calia",
    "Luca Carbone",
    "Tancredi Carluccio",
    "Valentino De Stefano",
    "Ludovica Di Benedetto",
    "Davide Di Pietro",
    "Alessandro Fonzi",
    "Gabriele Magni",
    "Stefano Maiorchini",
    "Angelo Melotti",
    "Caterina Moccia",
    "Sergio Nifosi",
    "Clara Nocilla",
    "Matteo Nuvoloni",
    "Simone Pavone",
    "Noemi Pintaldi",
    "Roberto Piva",
    "Andrea Pontillo",
    "Andrea Rosellini",
    "Simone Saputo",
    "Samuele Spadaro",
    "Vera Sprinceana",
    "Michael Wachnicki",
    "Simone Luca Zaino",
    "Francesco Natoli"
]

let nome = String(prompt("Inserisci il nome dell'invitato"));

if (isNaN(nome)) {

    let check = false;
    let i = 0;

    while (i < listInvitati.length) {

        // Rendo i nomi tutti senza spazio e tutti a lettere maiuscole
        if (listInvitati[i].trim().toUpperCase() == nome.trim().toUpperCase()){
            check = true
        }

        i++;
    }

    if(check == true){
        container.innerHTML = `${nome} è nella lista invitati`
    }else{
        container.innerHTML = `${nome} non è nella lista invitati`
    }

}else{
    alert("Inserisci un nome valido!");
    location.reload();
}