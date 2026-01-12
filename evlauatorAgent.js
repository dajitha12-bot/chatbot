import { calculateRisk } from "../risk/riskCalculator.js";
import { checkAlert } from "../alerts/alertManager.js";
import { propagateRisk } from "../risk/riskPropagation.js";

export function evaluatorAgent(simData) {
  const risk = calculateRisk(simData);
  const alert = checkAlert(risk);

  const propagation = propagateRisk("Tier3", risk);

  return {
    ...simData,
    risk,
    alert,
    propagation
  };
}
