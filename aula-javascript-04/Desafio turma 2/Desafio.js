const mensagemSecreta = [
  'aprender',
  'não',
  'é',
  'o',
  'sobre',
  'que',
  'você',
  'consegue',
  'facilmente',
  'na',
  'primeira',
  'vez',
  'mas',
  'sobre',
  'o',
  'que',
  'você',
  'pode',
  'descobrir.',
  '-2015',
  'Chris',
  'Pine',
  'Aprenda',
  'JavaScript',
];

mensagemSecreta.pop();

mensagemSecreta.push('a', 'programar');

const indexFacilmente = mensagemSecreta.indexOf('facilmente');
mensagemSecreta[indexFacilmente] = 'certo';

mensagemSecreta.shift();

mensagemSecreta.unshift('Programação');

const indicesRemover = [mensagemSecreta.indexOf('consegue'), mensagemSecreta.indexOf('certo'), mensagemSecreta.indexOf('na'), mensagemSecreta.indexOf('primeira'), mensagemSecreta.indexOf('vez,')];
mensagemSecreta.splice(indicesRemover[0], 5, 'sabe');

const mensagemFinal = mensagemSecreta.join(' ');

console.log('Final da Mensagem Secreta:', mensagemFinal);
