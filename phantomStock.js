export function phantomStock(reported, predicted) {
  return (((reported - predicted) / reported) * 100).toFixed(2);
}
