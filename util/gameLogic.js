/*const deck = Array.from({ length: 98 }, (_, index) => index + 2);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(deck);*/
deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(deck);

const sizeHand = 8;
playerHand = [];
(pilaAbajoUno = []),
  (pilaAbajoDos = []),
  (pilaArribaUno = []),
  (pilaArribaDos = []);

cartasArrojadas = 0;
scoreJugador = 98;
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
  playerHand = _.orderBy(playerHand);

  let botonComenzarBack = document.getElementById("botonComenzar");

  botonComenzarBack.style.display = "none";

  verificarVictoria();
}

function pushAPila(pila, cartaHand) {
  let cartaAnterior, cartaMano;

  switch (pila) {
    case 1:
      cartaAnterior = pilaArribaUno[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior < cartaMano || cartaMano === cartaAnterior - 10) {
        pilaArribaUno.unshift(cartaMano);
        actualizarPilaYMano(pilaArribaUno, "pilaArribaUno");
      } else {
        console.log("Ese we");
        pilaArribaUno.unshift(cartaAnterior);
      }
      break;

    case 2:
      cartaAnterior = pilaArribaDos[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior < cartaMano || cartaMano === cartaAnterior - 10) {
        pilaArribaDos.unshift(cartaMano);
        actualizarPilaYMano(pilaArribaDos, "pilaArribaDos");
      } else {
        console.log("Ese we");
        pilaArribaDos.unshift(cartaAnterior);
      }
      break;

    case 3:
      cartaAnterior = pilaAbajoUno[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior > cartaMano || cartaMano === cartaAnterior + 10) {
        pilaAbajoUno.unshift(cartaMano);
        actualizarPilaYMano(pilaAbajoUno, "pilaAbajoUno");
      } else {
        console.log("Ese we");
        pilaAbajoUno.unshift(cartaAnterior);
      }
      break;

    case 4:
      cartaAnterior = pilaAbajoDos[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior > cartaMano || cartaMano === cartaAnterior + 10) {
        pilaAbajoDos.unshift(cartaMano);
        actualizarPilaYMano(pilaAbajoDos, "pilaAbajoDos");
      } else {
        console.log("Ese we");
        pilaAbajoDos.unshift(cartaAnterior);
      }
      break;
  }
}

function actualizarPilaYMano(pila, elementoId) {
  let pilaElemento = document.getElementById(elementoId);
  pilaElemento.innerHTML = pila[0];

  let i = playerHand.findIndex((item) => item && item === pila[0]);
  if (i !== -1) {
    playerHand.splice(i, 1);
    console.log(playerHand);
    cartasArrojadas++;
    scoreJugador--;
  }
}

function pasarTurno() {
  if (cartasArrojadas >= 2) {
    while (playerHand.length < sizeHand && deck.length > 0) {
      if (deck.length > 0) {
        var indice = deck[0];
        var carta = deck.splice(indice, 1)[0];
        playerHand.push(carta);
      }
    }

    console.log("Tu mano actual: " + playerHand);
    actualizarMano(playerHand);
    cartasArrojadas = 0;
    verificarVictoria();
  } else {
    const check = verificarVictoria();
    if (!check) {
    } else {
      mostrarMensajeFinTurno(
        "Necesitas arrojar al menos dos cartas antes de pasar el turno"
      );
    }
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

function verificarVictoria() {
  const todasCartasUndefined = playerHand.every((carta) => carta === undefined);

  if ((deck.length === 0 && playerHand.length === 0) || todasCartasUndefined) {
    alert("¡Felicidades, has ganado!");
  }
}
