export function calculateRisk(data) {
  let risk = data.phantom > 15 ? 0.7 : 0.3;
  if (data.capacityUtilization < 0.8) risk += 0.2;
  return Math.min(risk, 1);
}
