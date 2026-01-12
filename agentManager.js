import { plannerAgent } from "../agents/plannerAgent.js";
import { simulationAgent } from "../agents/simulationAgent.js";
import { evaluatorAgent } from "../agents/evaluatorAgent.js";
import { explanationAgent } from "../agents/explanationAgent.js";

export async function runAgents(userQuery) {
  const plan = plannerAgent(userQuery);
  const simulation = simulationAgent(plan);
  const evaluation = evaluatorAgent(simulation);
  const explanation = await explanationAgent(userQuery, evaluation);

  return {
    answer: explanation,
    metrics: evaluation
  };
}

