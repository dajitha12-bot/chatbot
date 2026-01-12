import { tierGraph } from "./tierGraph.js";

export function propagateRisk(initialTier, riskScore) {
  const affectedTiers = {};
  affectedTiers[initialTier] = riskScore;

  let currentRisk = riskScore;
  let currentTier = initialTier;

  while (tierGraph[currentTier].length > 0) {
    const nextTier = tierGraph[currentTier][0];
    currentRisk = (currentRisk * 0.7).toFixed(2); // decay factor
    affectedTiers[nextTier] = Number(currentRisk);
    currentTier = nextTier;
  }

  return affectedTiers;
}
