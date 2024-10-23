const gato = {
  nombre: 'topu',
  edad: 5
}

const cliente ={
  pin: 1111,
  saldo: 0,
  deposito: [],
  retiros: [],
  transferencias: [
    {referencia: '', cantidad: 0}
  ],
}

/**
 * 
 * @param {*} cliente 
 * @param {*} monto 
 */
function realizarRetiro(cliente, monto) {
  if(cliente.saldo > 0 && cliente.saldo >= monto )
    cliente.saldo -= monto
}

/**
 * 
 * @param {*} cliente 
 * @returns 
 */
const consultarSaldo = (cliente) => cliente.saldo

/**
 * 
 * @param {*} cliente 
 * @returns 
 */
const estadoDeCuenta = (cliente) => cliente.deposito.sort((a,b) => a-b)

/**
 * 
 * @param {*} cliente 
 * @param {*} monto 
 */
function realizarDeposito(cliente, monto) {
  if(monto <= 0)
    console.error('no aceptamos menos de 0 bolas bro')

  cliente.deposito.push(monto)
  cliente.saldo += monto
}

realizarDeposito(cliente, 2000)
realizarRetiro(cliente, 1500)
console.log(consultarSaldo(cliente))
console.log(estadoDeCuenta(cliente))
