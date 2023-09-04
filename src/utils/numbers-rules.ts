export function numberRules(numberAsString: string, aggregator: string[]) {
  const aggregatorLastPosition = aggregator.slice(-1)
  const aggregatorLastIndex = aggregator.length - 1

  const isAggregatorLastPositionNumber = !isNaN(Number(aggregatorLastPosition))
  if (aggregator.length === 0) {
    return [numberAsString]
  }

  if (isAggregatorLastPositionNumber) {
    aggregator[
      aggregatorLastIndex
    ] = `${aggregatorLastPosition}${numberAsString}`

    return aggregator
  }

  if (!isAggregatorLastPositionNumber) {
    return [...aggregator, numberAsString]
  }

  return aggregator
}
