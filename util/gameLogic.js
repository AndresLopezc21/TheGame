const deck = Array.from({ length: 98 }, (_, index) => index + 2);
const connection = require("./connection.cjs");
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(deck);
console.log(deck);

let iniciales = "";
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
  const inicialesUsuario = prompt("Por favor, ingresa tus iniciales:");

  if (inicialesUsuario !== null && inicialesUsuario.length === 3) {
    alert("Tus iniciales son: " + inicialesUsuario);
    iniciales = inicialesUsuario; // Asignas el valor del prompt a la variable iniciales
  } else {
    alert(
      "Iniciales inválidas o no ingresadas. Se utilizará un valor predeterminado."
    );
  }
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
        alert(
          "Ese moviento no es posible, asegurate de que este en el orden correcto"
        );
        pilaArribaUno.unshift(cartaAnterior);
        actualizarPilaYMano();
      }
      break;

    case 2:
      cartaAnterior = pilaArribaDos[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior < cartaMano || cartaMano === cartaAnterior - 10) {
        pilaArribaDos.unshift(cartaMano);
        actualizarPilaYMano(pilaArribaDos, "pilaArribaDos");
      } else {
        alert(
          "Ese moviento no es posible, asegurate de que este en el orden correcto"
        );
        pilaArribaDos.unshift(cartaAnterior);
        actualizarPilaYMano();
      }
      break;

    case 3:
      cartaAnterior = pilaAbajoUno[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior > cartaMano || cartaMano === cartaAnterior + 10) {
        pilaAbajoUno.unshift(cartaMano);
        actualizarPilaYMano(pilaAbajoUno, "pilaAbajoUno");
      } else {
        alert(
          "Ese moviento no es posible, asegurate de que este en el orden correcto"
        );
        pilaAbajoUno.unshift(cartaAnterior);
        actualizarPilaYMano();
      }
      break;

    case 4:
      cartaAnterior = pilaAbajoDos[0];
      cartaMano = Number(cartaHand);

      if (cartaAnterior > cartaMano || cartaMano === cartaAnterior + 10) {
        pilaAbajoDos.unshift(cartaMano);
        actualizarPilaYMano(pilaAbajoDos, "pilaAbajoDos");
      } else {
        alert(
          "Ese moviento no es posible, asegurate de que este en el orden correcto"
        );
        pilaAbajoDos.unshift(cartaAnterior);
        actualizarPilaYMano();
      }
      break;
  }
}

function actualizarPilaYMano(pila, elementoId) {
  let pilaElemento = document.getElementById(elementoId);

  if (pila[0] !== undefined) {
    pilaElemento.innerHTML = pila[0];

    let i = playerHand.findIndex((item) => item === pila[0]);
    if (i !== -1) {
      playerHand.splice(i, 1);
      console.log(playerHand);
      cartasArrojadas++;
      scoreJugador--;
    }
  } else {
    pilaElemento.innerHTML = "";
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
    window.location.href = "/jugar";
  }
}

function finalizarJuego() {
  alert(
    "Has terminado el juego " + iniciales + " Tu puntuación es: " + scoreJugador
  );

  connection.query("SELECT * FROM puntuaciones;", (err, result) => {
    !err ? console.log(result) : console.log("error");
  });

  let botonFinalizarBack = document.getElementById("botonFinalizar");
}
