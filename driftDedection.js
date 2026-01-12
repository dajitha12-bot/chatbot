export function detectDrift(timeSeries) {
  /*
  timeSeries = [0.95, 0.93, 0.91, 0.88]
  */

  if (timeSeries.length < 3) return false;

  const trend =
    timeSeries[timeSeries.length - 1] -
    timeSeries[0];

  return trend < -0.05;
}
