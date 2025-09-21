
let cartas = [];
let botonReinicio = document.getElementById('button-restart');
let imagenesPares = [
    'images/sonic.webp',
    'images/tails.webp',
    'images/knuckles.webp',
    'images/shadow.webp',
    'images/amy.webp',
    'images/espio.webp',
    'images/silver.webp',
    'images/blaze.webp',
    'images/sonic.webp',
    'images/tails.webp',
    'images/knuckles.webp',
    'images/shadow.webp',
    'images/amy.webp',
    'images/espio.webp',
    'images/silver.webp',
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

            posicionesActuales.push(i);

            if(posicionesActuales.length == 2){
                let parrafo = document.createElement('p');
                parrafo.innerHTML = lugares[posicionesActuales[0]] + ' - ' + lugares[posicionesActuales[1]]
                agregarTexto('stats-mov',parrafo);
                let guion = document.createElement('p');
                guion.innerHTML = '-----'
                agregarTexto('stats-mov',guion); 

                if(imagenesPares[posicionesActuales[0]] == imagenesPares[posicionesActuales[1]]){
                    let parrafoEncontrado = document.createElement('p');

                    //se corta la ruta /images/ y el formato del a imagen para ingresar unicamente el nombre.
                    parrafoEncontrado.innerHTML = imagenesPares[posicionesActuales[0]].slice(0,-5).slice(7);
                    agregarTexto('stats-found',parrafoEncontrado);  
                    posicionesActuales.length = 0;
                }
                else{
                    setTimeout(() => {
                        for(let i = 0;i < 2;i++){
                        cartas[posicionesActuales[i]].carta.querySelector('img').src = 'images/signospregunta.png'
                        cartas[posicionesActuales[i]].carta.style.backgroundColor = '#2bb800';
                        cartas[posicionesActuales[i]].carta.style.cursor = 'pointer';
                        cartas[posicionesActuales[i]].elegida= false;
                        }
                        posicionesActuales.length = 0;
                    }, 700)
                    
                        
                }
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
        cartas[i].carta.style.backgroundColor = '#2bb800';
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
    textos.prepend(p);
}

