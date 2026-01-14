<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AIAG01 Typed Chatbot</title>
<style>
body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #e5e7eb;
  margin: 0;
}
header {
  background: #020617;
  padding: 14px;
  text-align: center;
  font-size: 20px;
  color: #38bdf8;
  font-weight: bold;
}
#chat {
  height: 75vh;
  padding: 15px;
  overflow-y: auto;
}
.msg { margin-bottom: 12px; }
.user { color: #38bdf8; }
.bot { color: #22c55e; }
.input-area {
  display: flex;
  padding: 10px;
  background: #020617;
}
input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
button {
  margin-left: 10px;
  padding: 10px 15px;
  background: #22c55e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
</head>

<body>
<header>AIAG01: Agentic AI–Enabled Multi-Tier Phantom Stock Chatbot</header>

<div id="chat">
  <div class="msg bot">
    AI Agent: Ask me anything about phantom stock, risks, suppliers, or simulations.
  </div>
</div>

<div class="input-area">
  <input id="userInput" placeholder="Type your question here..." />
  <button onclick="send()">Send</button>
</div>

<script>
function answer(q) {
  q = q.toLowerCase();

  /* 1️⃣ Phantom Stock Detection */
  if (q.includes("phantom stock") && (q.includes("tier-2") || q.includes("tier-3")))
    return "Yes. Phantom stock is detected in Tier-2 and Tier-3 suppliers where reported inventory exceeds ground reality.";

  if (q.includes("highest") && q.includes("discrepancy"))
    return "Tier-3 Supplier T3-B shows the highest inventory discrepancy at 38%.";

  if (q.includes("supplier s3"))
    return "Supplier S3 reports 1200 units, but predicted available stock is only 780 units.";

  if (q.includes("materials"))
    return "Materials RM-12 and RM-19 show repeated mismatch between system and physical inventory.";

  if (q.includes("how much phantom"))
    return "Total phantom stock across all tiers today is approximately 2,450 units.";

  if (q.includes("most vulnerable tier"))
    return "Tier-3 is the most vulnerable due to minimal real-time visibility.";

  /* 2️⃣ Multi-Tier Visibility */
  if (q.includes("inventory status"))
    return "Tier-1 inventory is stable, Tier-2 shows moderate risk, and Tier-3 has low confidence levels.";

  if (q.includes("tier-3") && q.includes("updates"))
    return "Tier-3 suppliers T3-A and T3-C are not providing real-time updates.";

  if (q.includes("tier-2") && q.includes("reliable"))
    return "Tier-2 inventory data reliability is estimated at 72%.";

  if (q.includes("missing") || q.includes("delayed signals"))
    return "Delayed or missing signals are detected from suppliers T2-D and T3-C.";

  if (q.includes("confidence"))
    return "Inventory confidence levels: Tier-1 (92%), Tier-2 (72%), Tier-3 (41%).";

  /* 3️⃣ Disruption Detection */
  if (q.includes("early signs"))
    return "Yes. Early warning signals indicate slowdown at Tier-3 suppliers.";

  if (q.includes("machine"))
    return "A machine breakdown has been reported at Tier-3 Supplier T3-A.";

  if (q.includes("labor"))
    return "Labor shortages are affecting Tier-2 Supplier S4.";

  if (q.includes("production delays"))
    return "Abnormal production delays were detected at T3-C in the last 24 hours.";

  if (q.includes("capacity drops"))
    return "Supplier T2-B experienced a sudden 25% capacity drop.";

  if (q.includes("local incident"))
    return "A regional logistics disruption near T3-A may affect supply continuity.";

  /* 4️⃣ Risk Prediction */
  if (q.includes("stock-out"))
    return "There is a 34% probability of a Tier-1 stock-out within the next 7 days.";

  if (q.includes("t3-a fails"))
    return "Failure of T3-A would reduce Tier-1 production by approximately 18%.";

  if (q.includes("propagates"))
    return "Tier-3 disruptions propagate upstream to Tier-1 within 48 hours.";

  if (q.includes("highest systemic risk"))
    return "Supplier T3-A poses the highest systemic risk.";

  if (q.includes("future delivery"))
    return "Current phantom stock may cause delivery misses within 5 days.";

  if (q.includes("worst-case"))
    return "Worst-case simulation shows cascading shortages across all tiers.";

  /* 5️⃣ Capacity Validation */
  if (q.includes("historical performance"))
    return "Reported capacity exceeds historical averages by 22% for some suppliers.";

  if (q.includes("over-reporting"))
    return "Suppliers S3 and T2-B are over-reporting output.";

  if (q.includes("validate"))
    return "Validation shows 15–30% deviation from expected throughput.";

  if (q.includes("demand") && q.includes("capacity"))
    return "Demand exceeds actual production capacity by 19% in Tier-2.";

  if (q.includes("below expected"))
    return "Suppliers T3-C and S4 are operating below expected efficiency.";

  /* 6️⃣ Decision Support */
  if (q.includes("corrective actions"))
    return "Immediate actions include manual verification and freezing planning on phantom stock.";

  if (q.includes("manual verification"))
    return "Suppliers T3-A and T3-C require manual audits.";

  if (q.includes("alternative suppliers"))
    return "Alternative suppliers S5 and S7 are recommended.";

  if (q.includes("reallocation"))
    return "Reallocate Tier-1 buffer inventory to high-risk zones.";

  if (q.includes("procurement"))
    return "Procurement should activate backup suppliers and expedite verification.";

  if (q.includes("production planning"))
    return "Adjust production schedules to conservative capacity estimates.";

  /* 7️⃣ Dashboard */
  if (q.includes("dashboard"))
    return "Dashboard highlights phantom stock hotspots in Tier-2 and Tier-3.";

  if (q.includes("high disruption"))
    return "High-risk suppliers are highlighted based on disruption probability.";

  if (q.includes("risk propagation"))
    return "Inter-tier graphs visualize cascading risk paths.";

  if (q.includes("alerts"))
    return "Three real-time alerts were triggered today.";

  /* 8️⃣ Simulation */
  if (q.includes("machine breakdown") && q.includes("simulate"))
    return "Simulated breakdown at Tier-3 Supplier X causes Tier-1 delays within 72 hours.";

  if (q.includes("30%"))
    return "A 30% Tier-2 capacity drop leads to immediate Tier-1 shortages.";

  if (q.includes("5 days"))
    return "Five-day labor shortage increases phantom stock by 41%.";

  if (q.includes("demand surge"))
    return "Phantom stock increases sharply due to over-optimistic planning.";

  if (q.includes("delayed shipment"))
    return "Delayed shipments ripple upstream causing stock-outs in Tier-1.";

  /* 9️⃣ Executive */
  if (q.includes("health score"))
    return "Overall supply-chain health score is 68 out of 100.";

  if (q.includes("hidden inventory"))
    return "Organization is highly exposed to Tier-3 hidden inventory risks.";

  if (q.includes("investment"))
    return "Tier-3 requires immediate investment in visibility.";

  if (q.includes("top 3 risks"))
    return "Top risks: Phantom stock, Tier-3 disruptions, delayed signals.";

  if (q.includes("two weeks"))
    return "Risk outlook shows elevated disruption probability over the next two weeks.";

  /* 🔟 Natural Chat */
  if (q.includes("enough stock"))
    return "Only 71% of reported inventory is physically available.";

  if (q.includes("can't deliver"))
    return "Because system inventory does not reflect ground reality.";

  if (q.includes("silently failing"))
    return "Supplier T3-A is silently failing.";

  if (q.includes("false inventory"))
    return "Yes. Planning is partially based on phantom stock.";

  if (q.includes("earliest warning"))
    return "Early warning detected was a Tier-3 production slowdown.";

  return "I understand supply-chain risks, phantom stock, and simulations. Please rephrase your question.";
}

function send() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  const chat = document.getElementById("chat");
  chat.innerHTML += `<div class="msg user">You: ${text}</div>`;
  chat.innerHTML += `<div class="msg bot">AI Agent: ${answer(text)}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
</script>

</body>
</html>


