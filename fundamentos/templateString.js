const nome = 'Rebeca'
const conacatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!
`

console.log(conacatenacao, template)

// Expressoes
console.log(`1 + 1 = ${1 +1 }`)

const up = texto => texto.toUpperCase()

console.log(`Ei.. ${up('cuidado')}!`)