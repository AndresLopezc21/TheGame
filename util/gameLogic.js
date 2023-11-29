const deck = Array.from({ length: 98 }, (_, index) => index + 2);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(deck);

console.log(deck);

const sizeHand = 8;
let playerHand = [];
let pilaAbajoUno = [],
  pilaAbajoDos = [],
  pilaArribaUno = [],
  pilaArribaDos = [];

cartasArrojadas = 0;
pilaArribaUno[0] = 1;
pilaArribaDos[0] = 1;
pilaAbajoUno[0] = 100;
pilaAbajoDos[0] = 100;

function actualizarMano(playerHand) {
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
}

function llenarManoInicial() {
  while (playerHand.length < sizeHand && deck.length > 0) {
    var indice = deck[0];
    var carta = deck.splice(indice, 1)[0];
    playerHand.push(carta);
  }
  console.log("Mano inicial del jugador: " + playerHand);
  console.log("deck despues de repartir al jugador: " + deck);

  actualizarMano(playerHand);

  let botonComenzarBack = document.getElementById("botonComenzar");

  botonComenzarBack.style.display = "none";
}

function pushAPila(pila, cartaHand) {
  switch (pila) {
    case 1:
      console.log(cartaHand);
      console.log(pila);
      cartaAnterior = pilaArribaUno[0];
      cartaMano = Number(cartaHand);
      pilaArribaUno.unshift(cartaMano);
      if (cartaAnterior < cartaMano || cartaMano == cartaAnterior - 10) {
        let pilaArriba1 = document.getElementById("pilaArribaUno");
        pilaArriba1.innerHTML = pilaArribaUno[0];
        let i = playerHand.findIndex((item) => item.id === cartaMano.id);
        if (i !== -1) {
          playerHand.splice(i, 1);
        }
        cartasArrojadas++;
        break;
      }
      console.log("Ese we");
      pilaArribaUno.unshift(cartaAnterior);
      break;

    case 2:
      console.log(cartaHand);
      console.log(pila);
      cartaAnterior = pilaArribaDos[0];
      cartaMano = Number(cartaHand);
      pilaArribaDos.unshift(cartaMano);
      if (cartaAnterior < cartaMano || cartaMano == cartaAnterior - 10) {
        let pilaArriba2 = document.getElementById("pilaArribaDos");
        pilaArriba2.innerHTML = pilaArribaDos[0];
        let i = playerHand.findIndex((item) => item.id === cartaMano.id);
        if (i !== -1) {
          playerHand.splice(i, 1);
        }
        cartasArrojadas++;
        break;
      }
      console.log("Ese we");
      pilaArribaDos.unshift(cartaAnterior);
      break;

    case 3:
      console.log(cartaHand);
      console.log(pila);
      cartaAnterior = pilaAbajoUno[0];
      cartaMano = Number(cartaHand);
      pilaAbajoUno.unshift(cartaMano);
      if (cartaAnterior > cartaMano || cartaMano == cartaAnterior + 10) {
        let pilaAbajo1 = document.getElementById("pilaAbajoUno");
        pilaAbajo1.innerHTML = pilaAbajoUno[0];
        let k = playerHand.findIndex((item) => item.id === cartaMano.id);
        if (k !== -1) {
          playerHand.splice(k, 1);
        }
        console.log(playerHand);
        cartasArrojadas++;
        break;
      }
      console.log("Ese we");
      pilaAbajoUno.unshift(cartaAnterior);
      break;
    case 4:
      console.log(cartaHand);
      console.log(pila);
      cartaAnterior = pilaAbajoDos[0];
      cartaMano = Number(cartaHand);
      pilaAbajoDos.unshift(cartaMano);
      if (cartaAnterior > cartaMano || cartaMano == cartaAnterior + 10) {
        let pilaAbajo2 = document.getElementById("pilaAbajoDos");
        pilaAbajo2.innerHTML = pilaAbajoDos[0];
        let l = playerHand.findIndex((item) => item.id === cartaMano.id);
        if (l !== -1) {
          playerHand.splice(l, 1);
        }
        console.log(playerHand);
        cartasArrojadas++;
        break;
      }
      console.log("Ese we");
      pilaAbajoDos.unshift(cartaAnterior);
      break;
  }
}

function pasarTurno() {
  if (cartasArrojadas >= 2) {
    while (playerHand.length < sizeHand && deck.length > 0) {
      var indice = deck[0];
      var carta = deck.splice(indice, 1)[0];
      playerHand.push(carta);
      console.log("Tu mano actual: " + playerHand);
      actualizarMano(playerHand);
    }
    cartasArrojadas = 0;
  } else {
    mostrarMensajeFinTurno(
      "Necesitas arrojar al menos dos cartas antes de pasar el turno"
    );
  }
}

function pasarTurnoDificil() {
  if (cartasArrojadas >= 2) {
    cartasArrojadas = 0;
    while (playerHand.length < sizeHand && deck.length > 0) {
      var indice = deck[0];
      var carta = deck.splice(indice, 1)[0];
      playerHand.push(carta);
      console.log("Tu mano actual: " + playerHand);
      actualizarMano(playerHand);
    }
  } else {
    mostrarMensajeFinTurnoDificil(
      "Necesitas arrojar al menos tres cartas antes de pasar el turno"
    );
  }
}

function mostrarMensajeFinTurno(mensaje) {
  alert(mensaje);
}

function mostrarMensajeFinTurnoDificil(mensaje) {
  alert(mensaje);
}
