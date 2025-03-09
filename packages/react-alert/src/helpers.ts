export const groupBy = <Alert>(array: Alert[], fn: (item: Alert) => string) =>
  array.reduce((result: Record<string, Alert[]>, item) => {
    const key = fn(item)
    if (!result[key]) result[key] = []
    result[key].push(item)
    return result
  }, {} as Record<string, Alert[]>)
