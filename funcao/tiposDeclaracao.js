// Executada em qualquer parte do codigo (Antes da Declaracao)
console.log(soma(3,4))

// function declaration
function soma (x, y) {
  return x + y
}

// Function Expression
const sub = function(x, y) {
  return x - y 
}
console.log(sub(3,4))

// Named Function Expression
const mult = function mult(x, y) {
  return x * y 
}
console.log(mult(3,4))

