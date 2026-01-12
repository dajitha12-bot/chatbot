import { phantomStock } from "../computations/phantomStock.js";

export function simulationAgent(plan) {
  const reported = 1000;
  const predicted = 820;

  return {
    reported,
    predicted,
    phantom: phantomStock(reported, predicted),
    capacityUtilization: 0.78
  };
}
