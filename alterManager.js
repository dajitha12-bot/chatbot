export function checkAlert(risk) {
  if (risk > 0.7) return "🔴 HIGH RISK ALERT";
  if (risk > 0.4) return "🟠 MEDIUM RISK";
  return "🟢 LOW RISK";
}
