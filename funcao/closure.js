// É o escopo criado quando a função é declarada
// Esse escopo permite a funcao acessar e manipular variáveis externas à funcao

// Contexto léxico em funçao 

const x = 'Global'

function fora () {
  const x = 'Local'
  function dentro () {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())