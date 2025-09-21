
let cartas = [];
let botonReinicio = document.getElementById('button-restart');
let imagenesPares = [
    'images/sonic.webp',
    'images/tails.webp',
    'images/knuckles.webp',
    'images/shadow.webp',
    'images/amy.webp',
    'images/espio.png',
    'images/silver.png',
    'images/blaze.webp',
    'images/sonic.webp',
    'images/tails.webp',
    'images/knuckles.webp',
    'images/shadow.webp',
    'images/amy.webp',
    'images/espio.png',
    'images/silver.png',
    'images/blaze.webp'
];


let lugares = [
    'Fila 1, Columna 1',
    'Fila 1, Columna 2',
    'Fila 1, Columna 3',
    'Fila 1, Columna 4',
    'Fila 2, Columna 1',
    'Fila 2, Columna 2',
    'Fila 2, Columna 3',
    'Fila 2, Columna 4',
    'Fila 3, Columna 1',
    'Fila 3, Columna 2',
    'Fila 3, Columna 3',
    'Fila 3, Columna 4',
    'Fila 4, Columna 1',
    'Fila 4, Columna 2',
    'Fila 4, Columna 3',
    'Fila 4, Columna 4',
]

let posicionesActuales = [];



for(i=0;i < 16; i++){
    cartas.push(crearCarta(i+1));
}

IniciarJuego();




imagenesPares.forEach((imagen,i) => {
    cartas[i].carta.addEventListener('click', () => {
        if(cartas[i].elegida == false && posicionesActuales.length < 2){
            cartas[i].carta.querySelector('img').src = imagenesPares[i];
            cartas[i].carta.style.backgroundColor = '#D1EDE1';
            cartas[i].carta.style.cursor = 'auto';
            cartas[i].elegida = true;
            posicionesActuales.push(lugares[i]);

            if(posicionesActuales.length == 2){
                let parrafo = document.createElement('p');
                parrafo.innerHTML = posicionesActuales[0] + ' - ' + posicionesActuales[1]
                agregarTexto('stats-mov',parrafo);
                posicionesActuales.length = 0;
            }
            
        }
    })
});


botonReinicio.addEventListener('click', () =>{
    IniciarJuego();
    console.log(imagenesPares);
})


function desordenarArray(array) {
  const nuevoArray = [...array]; 
  let indiceActual = nuevoArray.length;
  let indiceAleatorio;

  while (indiceActual !== 0) {
    indiceAleatorio = Math.floor(Math.random() * indiceActual);
    indiceActual--;

    [nuevoArray[indiceActual], nuevoArray[indiceAleatorio]] = [
      nuevoArray[indiceAleatorio], nuevoArray[indiceActual]
    ];
  }

  return nuevoArray;
}



function IniciarJuego(){
    for(i=0;i < 16; i++){
        cartas[i].carta.querySelector('img').src = 'images/signospregunta.png'
        cartas[i].carta.style.backgroundColor = '#028C6A';
        cartas[i].carta.style.cursor = 'pointer';
        cartas[i].elegida= false;
    }

    
    eliminarParrafos('stats-mov');
    eliminarParrafos('stats-found')
    imagenesPares = desordenarArray(imagenesPares);

}

function crearCarta(posicion){
    cartaAux = document.getElementById('carta_'+posicion);
    return {
        carta: document.getElementById('carta_'+posicion),
        elegida: false,
    };
}

function eliminarParrafos(div){
    const textos = document.querySelector('.'+div).querySelectorAll('.stats-container p');
    console.log(textos);
    textos.forEach((p) => p.remove());
}

function agregarTexto(div,p){
    const textos = document.querySelector('.'+div).querySelector('.stats-container');
    textos.appendChild(p);
}

