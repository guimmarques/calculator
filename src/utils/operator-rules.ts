export function operatorRules(operatorAsString: string, aggregator: string[]) {
  const aggregatorLastPosition = aggregator.slice(-1)

  const isAggregatorLastPositionNotANumber = isNaN(
    Number(aggregatorLastPosition),
  )

  if (isAggregatorLastPositionNotANumber) {
    alert('Error')
    return aggregator
  }

  return [...aggregator, operatorAsString]
}
