let ism = prompt("Ismingiz nima: ");
let harf = prompt("Bironta harf kiriting: ");
let orni = ism.indexOf(harf);


if (orni === -1) {
    alert("Bu " + ism + " ismda " + harf + " harfi mavjud!");
} else {
    alert("Bu " + ism + " ismda " + harf + " harfi mavjud emas!");
}