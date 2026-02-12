/**
 * 01 — Hello Agent (TypeScript)
 *
 * Basic query using the Claude Agent SDK.
 * Sends a simple prompt and prints the streamed response.
 */

import { query } from "@anthropic-ai/claude-agent-sdk";

async function main() {
  console.log("=== Simple Query ===\n");

  for await (const message of query({
    prompt: "What is the Claude Agent SDK? Explain in 2-3 sentences.",
    options: { maxTurns: 1 },
  })) {
    if (message.type === "assistant") {
      const text = message.message.content
        .filter((block: { type: string }) => block.type === "text")
        .map((block: { type: string; text: string }) => block.text)
        .join("");
      console.log(text);
    } else if (message.type === "result") {
      console.log(`\n--- Cost: $${message.costUsd?.toFixed(4) ?? "N/A"} ---`);
    }
  }

  console.log("\n=== Query with Options ===\n");

  for await (const message of query({
    prompt: "What tools can a Claude agent use?",
    options: {
      maxTurns: 1,
      systemPrompt:
        "You are a concise technical assistant. Reply in bullet points.",
    },
  })) {
    if (message.type === "assistant") {
      const text = message.message.content
        .filter((block: { type: string }) => block.type === "text")
        .map((block: { type: string; text: string }) => block.text)
        .join("");
      console.log(text);
    } else if (message.type === "result") {
      console.log(`\n--- Cost: $${message.costUsd?.toFixed(4) ?? "N/A"} ---`);
    }
  }
}

main();
