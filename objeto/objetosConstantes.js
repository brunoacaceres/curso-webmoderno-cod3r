// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa <- 456 -> {...} 

// pessoa = { nome: 'Ana' }
// NÃo pode por ser uma constante
// console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa)

