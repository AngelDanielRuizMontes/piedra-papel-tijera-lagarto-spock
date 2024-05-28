"use strict"

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const lagarto = document.getElementById("lagarto");
const spock = document.getElementById("spock");
const resultado = document.getElementById("resultado");

piedra.addEventListener("click", function() {
    jugar("piedra");
});

papel.addEventListener("click", function() {
    jugar("papel");
});

tijera.addEventListener("click", function() {
    jugar("tijera");
});

lagarto.addEventListener("click", function() {
    jugar("lagarto");
});

spock.addEventListener("click", function() {
    jugar("spock");
});