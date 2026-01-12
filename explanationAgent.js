content: `
User Query: ${query}

Phantom Stock: ${data.phantom}%
Risk Level: ${data.risk}
Alert: ${data.alert}

Risk Propagation Across Tiers:
${JSON.stringify(data.propagation, null, 2)}

Explain this decision clearly.
`
