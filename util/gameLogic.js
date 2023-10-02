let deck = [];

for (let index = 2; index < 99; index++) {
  deck.push(index);
}

console.log(deck);


const sizeHand = 8;
let playerHand = [];
let pilaAbajoUno = [],
    pilaAbajoDos = [],
    pilaArribaUno = [],
    pilaArribaDos = [];

 pilaArribaUno[0] = 1;
 pilaArribaDos[0] = 1;
 pilaAbajoUno[0] = 100;
 pilaAbajoDos[0] = 100;
function llenarManoInicial() {
  while (playerHand.length < sizeHand && deck.length > 0) {
    var indiceAleatorio = Math.floor(Math.random() * deck.length);
    var carta = deck.splice(indiceAleatorio, 1)[0];
    playerHand.push(carta);
  }
  console.log("Mano inicial del jugador: " + playerHand);
  console.log("deck despues de repartir al jugador: " + deck);

  let carta1 = document.getElementById("hand1");
  let carta2 = document.getElementById("hand2");
  let carta3 = document.getElementById("hand3");
  let carta4 = document.getElementById("hand4");
  let carta5 = document.getElementById("hand5");
  let carta6 = document.getElementById("hand6");
  let carta7 = document.getElementById("hand7");
  let carta8 = document.getElementById("hand8");

  playerHand = _.orderBy(playerHand);

  carta1.innerHTML = playerHand[0];
  carta2.innerHTML = playerHand[1];
  carta3.innerHTML = playerHand[2];
  carta4.innerHTML = playerHand[3];
  carta5.innerHTML = playerHand[4];
  carta6.innerHTML = playerHand[5];
  carta7.innerHTML = playerHand[6];
  carta8.innerHTML = playerHand[7];

  let botonComenzarBack = document.getElementById("botonComenzar");

  botonComenzarBack.style.display = "none";
}

function tomarCartaAleatoria() {
  if (deck.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * deck.length);
    let carta = deck.splice(indiceAleatorio, 1)[0];
    playerHand.push(carta);
    console.log("Has tomado la carta: " + carta);
    console.log("Tu mano actual: " + playerHand);
  } else {
    console.log("El deck está vacío, no puedes tomar más cartas.");
  }
}

function pushAPila(pila, cartaHand) {
  switch (pila) {
    case 1:
        console.log(cartaHand);
        console.log(pila);
        let cartaAnterior = pilaArribaUno[0];
        pilaArribaUno.unshift(cartaHand);
        if(cartaAnterior > cartaHand){
             console.log("ese we");
             console.log("carta en el tope de la pila  a cambiar"+ pilaArribaUno[0]);
             console.log("carta que salio de la mano a la pila: " + cartaHand);
             pilaArribaUno.unshift(cartaAnterior);
             break;
        }
          let pilaArriba1 = document.getElementById("pilaArribaUno");
          pilaArriba1.innerHTML = pilaArribaUno[0];
          let i = playerHand.findIndex((item) => item.id === cartaHand.id);
          console.log("index: " + i);
          console.log("carta en el tope de la pila  a cambiar"+ pilaArribaUno[0]);
          console.log("carta que salio de la mano a la pila: " + cartaHand);
          if (i !== -1) {
            playerHand.splice(i, 1);
          }
          console.log("mano del jugardor: " + playerHand);
      break;

    case 2:
      console.log(cartaHand);
        console.log(pila);
      pilaArribaDos.unshift(cartaHand);
      let pilaArriba2 = document.getElementById("pilaArribaDos");
      pilaArriba2.innerHTML = pilaArribaDos[0];
      let j = playerHand.findIndex((item) => item.id === cartaHand.id);
      console.log(j);
      console.log(cartaHand);
      if (j !== -1) {
        playerHand.splice(j, 1);
      }
      console.log(playerHand);
      break;

    case 3:
      pilaArribaUno;
      break;
    case 4:
      pilaArribaDos;
      break;
  }
}
