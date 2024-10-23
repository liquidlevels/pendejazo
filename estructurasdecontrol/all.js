uno = [1,2,3,4,5,6]
valorInicial = 0
const suma = uno.reduce((acumulador, valor) => acumulador + valor, valorInicial)
console.log(suma)

dos = [1,2,3,4,5,6]
const multiplicados = dos.map((num) => num * 2)
console.log(multiplicados)

tres = [1,2,3,4,5,6,7]
const filtro = tres.filter((num) => num > 5)
console.log(filtro)

cuatro = ['hola','que','tal','soy','Emmanuel']
const unidos = cuatro.join('_')
console.log(unidos)

cinco = {
  uno: "a",
  dos: "b",
  tres: "c",
  cuatro: "d",
  cinco: "e",
}

let alltogether = []
for(var value in cinco){
  alltogether.push(cinco[value])
  console.log(cinco[value])
}

console.log(alltogether.join(''))
