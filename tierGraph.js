// Defines supplier tier dependencies for risk propagation
export const tierGraph = {
  Tier3: ["Tier2"],
  Tier2: ["Tier1"],
  Tier1: []
};
