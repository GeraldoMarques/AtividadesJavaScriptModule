var array = ["Atividade 1", "Atividade 2", "Atividade 3", "Atividade 4", "Atividade 5", "Atividade 6", "Atividade 7"];

// a) Exibir no console as atividades na ordem inversa.
console.log("Atividades na ordem inversa:");
console.log(array.reverse());

// b) Selecionar e exibir no console os elementos nas posições 3 e 6.
console.log("Elementos nas posições 3 e 6:", array[2], array[5]);

// c) Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
console.log("Array transformado em string:", array.join(" - "));

// d) Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.
let atividadesFavoritas = ["Atividade A", "Atividade B"];
let resultado = atividadesFavoritas.concat(array);
console.log("Resultado da junção dos arrays:", resultado);
