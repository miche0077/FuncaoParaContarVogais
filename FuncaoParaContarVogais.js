function buscarVogal(texto) {
  let contador = 0;
  let listaVogais = [];

  if (typeof texto !== "string") {
    console.log("Texto não está em formato String!");
    return;
  }

  let text = texto;
  console.log(text);

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      contador++;
      listaVogais.push(text[i]);
    }
  }

  if (contador === 0) {
    console.log("Esta palavra não contem vogais!");
  } else {
    console.log(`O número total é de ${contador} vogais`);
  }
}

buscarVogal("michelle");
