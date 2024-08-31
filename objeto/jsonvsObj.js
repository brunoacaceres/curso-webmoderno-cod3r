const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}
// Objeto para JSON 
console.log(JSON.stringify(obj))

// JSON para Objeto
// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3"}))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))