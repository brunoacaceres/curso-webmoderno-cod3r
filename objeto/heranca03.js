const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
// filha2.corCabelo = 'Loiro'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
  // console.log(key)
  filha2.hasOwnProperty(key) ?
  console.log(key) : console.log(`Por herança: ${key}`)
}