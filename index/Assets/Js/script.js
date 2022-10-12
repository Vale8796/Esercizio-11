var mele = 4;
var arance = 5;
var arancia;

 scrivi();


function scrivi() {
    document.getElementById('corretta').innerHTML += `Succo con ${mele} mele e ${arance} arance`;
    document.getElementById('sbagliata').innerHTML += `Succo con ${mele + 2} mele e ${arancia} arance`;
}

//seconda riga

var nascita = 1967;

calcolaEta();

function calcolaEta() {
    document.getElementById('eta').innerHTML += `${2022 - nascita} anni`;
}

//terza riga

anno = () => {
    let eta1 = 30;
    let eta2 = 24;
    
    document.getElementById('persona1').innerHTML = `L'anno di nascita di Anna è il ${2022 - eta1}`;
    document.getElementById('persona2').innerHTML = `L'anno di nascita di Maria è il ${2022 - eta2}`;
}
anno();

//quarta riga
scegliTorta();

function tagliaFette(torta) {
    return torta * 3;
}
function scegliTorta(mela, arancia) {
    const fetteMela = tagliaFette(mela);
    const fetteArancia = tagliaFette(arancia);
    const torta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
    return torta;
}
document.getElementById('torta').innerHTML = scegliTorta(3, 5);

//somma
var btn = document.getElementById('calcola');
btn.addEventListener('click', function() {
    let cibo = document.getElementById('cibo').valueAsNumber;
    let detersivi = document.getElementById('detersivi').valueAsNumber;
    let abiti = document.getElementById('abiti').valueAsNumber;

    let somma = cibo + detersivi + abiti;

    document.getElementById('totale').innerHTML += `${somma}`;
})





