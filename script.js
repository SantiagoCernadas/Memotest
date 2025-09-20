
let cartas = [];


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
        cartas.push(crearCarta(i+1));
    }
    eliminarParrafos('stats-mov');
    eliminarParrafos('stats-found')
    imagenesPares = desordenarArray(imagenesPares);
}

function crearCarta(posicion){
    return {
        carta: document.getElementById('carta_'+posicion),
        uso: false,
        parEcontrado: false,
    };
}

function eliminarParrafos(div){
    const textos = document.querySelector('.'+div).querySelectorAll('.stats-container p');
    console.log(textos);
    textos.forEach((p) => p.remove());
}


IniciarJuego();

cartas[0].carta.addEventListener('click', () => {
    alert("Prueba de funcionamiento");
    console.log(cartas[0]);
})

imagenesPares.forEach((imagen,i) => {
    cartas[i].carta.src = imagen;
});
