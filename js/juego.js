"use strict"

function jugar(eleccionUsuario) {
    const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    const eleccionMaquina = opciones[Math.floor(Math.random() * 5)];

    resultado.innerHTML = `Tú elegiste ${eleccionUsuario}.<br> La Maquina eligió ${eleccionMaquina}.<br>`;

    if (eleccionUsuario === eleccionMaquina) {
        resultado.innerHTML += "¡Es un empate!";
    } else if (
        (eleccionUsuario === "piedra" && (eleccionMaquina === "tijera" || eleccionMaquina === "lagarto")) ||
        (eleccionUsuario === "papel" && (eleccionMaquina === "piedra" || eleccionMaquina === "spock")) ||
        (eleccionUsuario === "tijera" && (eleccionMaquina === "papel" || eleccionMaquina === "lagarto")) ||
        (eleccionUsuario === "lagarto" && (eleccionMaquina === "papel" || eleccionMaquina === "spock")) ||
        (eleccionUsuario === "spock" && (eleccionMaquina === "piedra" || eleccionMaquina === "tijera"))
    ) {
        resultado.innerHTML += "¡Ganaste!";
    } else {
        resultado.innerHTML += "¡La Maquina ganó!";
    }
}