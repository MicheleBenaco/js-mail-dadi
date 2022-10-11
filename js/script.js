let emailUser = document.getElementById('userEmail').value;
const allEmail = ["mario@gmail.com", "luca@gmail.com", "lucia@gmail.com","marco@gmail.it"]
const bottone = document.getElementById('bottone');
bottone.addEventListener('click',
function () {

for(let i = 0; i < allEmail.length; i++){
    if(emailUser == allEmail){
        let vero = document.createElement("true_email");
        vero.innerText = (" Puoi paerteciapre ")
    }else if( emailUser != allEmail){
        let falso = document.createElement("falsa_email");
        falso.innerText = ("Inserisci un email valida per parteciapre");
    }
}
}
)