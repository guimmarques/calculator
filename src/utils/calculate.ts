export function calculate(aggregator: string[]) {
  if (aggregator.length === 0) {
    alert('O array está vazio.')
    return 0
  }

  let result = parseFloat(aggregator[0])

  for (let i = 1; i < aggregator.length; i += 2) {
    const operador = aggregator[i]
    const proximoNumero = parseFloat(aggregator[i + 1])

    if (!isNaN(proximoNumero)) {
      if (operador === '+') {
        result += proximoNumero
      } else if (operador === '-') {
        result -= proximoNumero
      } else if (operador === '*') {
        result *= proximoNumero
      } else if (operador === '/') {
        if (proximoNumero === 0) {
          alert('Erro: Divisão por zero.')
          return 0
        }
        result /= proximoNumero
      } else if (operador === '%') {
        result %= proximoNumero
      } else {
        alert('Operador inválido: ' + operador)
        return 0
      }
    } else {
      alert('Número inválido: ' + aggregator[i + 1])
      return 0
    }
  }

  return result
}
