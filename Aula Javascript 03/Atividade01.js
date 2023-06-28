// Pergunta ao usuario: "você é maior de 18 anos?""
var idade = prompt("Você é maior de 18 anos?");

// Verifica se a idade do usuario é maior ou igual a 18
if (idade >= 18) {
  console.log("Que legal! Você já pode ter a carteira de habilitação.");
} else {
  console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.");
}

// Pergunta ao usuario: "você já terminou o ensino médio?""
var ensinoM = prompt("Você já terminou o ensino médio?");

// Verifica se a resposta do usuario é verdadeira
if (ensinoM === "sim") {
  console.log("Poxa, que legal!");
} else {
  console.log("Falta pouco! Logo você termina.");
}