export function operatorRules(operatorAsString: string, aggregator: string[]) {
  const aggregatorLastPosition = aggregator.slice(-1)

  const isAggregatorLastPositionNotANumber = isNaN(
    Number(aggregatorLastPosition),
  )

  console.log(aggregatorLastPosition, isAggregatorLastPositionNotANumber)

  if (isAggregatorLastPositionNotANumber) {
    alert('Error')
    return aggregator
  }

  return [...aggregator, operatorAsString]
}
