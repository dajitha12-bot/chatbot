export function calculateTruthfulness(history) {
  /*
  history = [
    { reported: 1000, predicted: 900 },
    { reported: 1200, predicted: 1000 }
  ]
  */

  let totalMismatch = 0;

  history.forEach(h => {
    totalMismatch += Math.abs(h.reported - h.predicted) / h.reported;
  });

  const avgMismatch = totalMismatch / history.length;

  // Truthfulness score between 0 and 1
  return Number((1 - avgMismatch).toFixed(2));
}
