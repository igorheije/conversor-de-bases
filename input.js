const inputs = document.querySelectorAll(".base");
const dec = inputs[0];
const bin = inputs[1];
const oct = inputs[2];
const hex = inputs[3];

inputs.forEach((input) => {
  input.addEventListener("keyup", (evt) => {
    if (dec === evt.currentTarget) {
      let numero = input.value;
      bin.value = DecToBin(numero);
      oct.value = DecToOct(numero);
      hex.value = DecToHex(numero);
    } else if (bin === evt.currentTarget) {
      let numero = input.value;
      dec.value = BinToDec(numero);
      oct.value = BinToOct(numero);
      hex.value = BinToHex(numero);
    } else if (oct === evt.currentTarget) {
      let numero = input.value;
      dec.value = OctToDec(numero);
      bin.value = OctToBin(numero);
      hex.value = OctToHex(numero);
    } else if (hex === evt.currentTarget) {
      let numero = input.value;
      dec.value = HexToDec(numero);
      bin.value = HexToBin(numero);
      oct.value = HexToOct(numero);
    }
  });
});

function DecToBin(numero) {
  let array = [];
  while (numero != 0) {
    let result = Math.floor(numero / 2);
    let sobra = numero % 2;
    array.push(sobra);
    numero = result;
  }
  array.reverse();
  let numeroBinario = array.join("");
  return numeroBinario;
}
function DecToOct(numero) {
  let num = DecToBin(numero);
  var Octo = BinToOct(num).toString();
  return Octo;
}
function DecToHex(numero) {
  let num = DecToBin(numero);
  let Hexa = BinToHex(num).toString(16);
  return Hexa;
}

function BinToDec(numero) {
  var array = numero.toString().split("");
  array.reverse();

  var result = 0;

  for (i = 0; i < array.length; i++) {
    var valor = array[i] * 2 ** i;
    result = result + valor;
  }

  return result;
}
function BinToHex(numero) {
  let num = BinToDec(numero);
  let Hex = num.toString(16);

  return Hex;
}
function BinToOct(numero) {
  let num = BinToDec(numero);
  let Oct = num.toString(8);

  return Oct;
}

function OctToDec(numero) {
  var array = numero.toString().split("");
  array.reverse();

  var result = 0;

  for (i = 0; i < array.length; i++) {
    var valor = array[i] * 8 ** i;
    result = result + valor;
  }

  return result;
}
function OctToHex(numero) {
  let Oct = OctToDec(numero);
  let Hex = Oct.toString(16);

  return Hex;
}
function OctToBin(numero) {
  let Oct = OctToDec(numero);
  let Bin = Oct.toString(2);

  return Bin;
}

function HexToDec(numero) {
  var array = numero.toString().split("");
  array.reverse();

  var result = 0;

  for (i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "a":
        var valor = 10 * 16 ** i;
        break;
      case "b":
        var valor = 11 * 16 ** i;
        break;
      case "c":
        var valor = 12 * 16 ** i;
        break;
      case "d":
        var valor = 13 * 16 ** i;
        break;
      case "e":
        var valor = 14 * 16 ** i;
        break;
      case "f":
        var valor = 15 * 16 ** i;
        break;
      default:
        var valor = array[i] * 16 ** i;
    }

    result = result + valor;
  }

  return result;
}
function HexToBin(numero) {
  let num = HexToDec(numero);
  let Hex = num.toString(2);
  return Hex;
}
function HexToOct(numero) {
  let num = HexToDec(numero);
  let Oct = num.toString(8);
  return Oct;
}

function onlynumberBin(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-1.]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function onlynumberDec(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9.,]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function onlynumberOct(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-8.]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function onlynumberHex(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9. a-f]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
