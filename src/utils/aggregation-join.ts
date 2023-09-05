export function aggregationJoin(aggregator: string[]) {
  return aggregator.reduce((prev, curr) => {
    if (['%', '/', '*', '-', '+'].includes(curr)) {
      return `${prev} ${curr} `
    }
    return `${prev}${curr}`
  }, '')
}
