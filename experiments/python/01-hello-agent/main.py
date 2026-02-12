"""
01 — Hello Agent (Python)

Basic query using the Claude Agent SDK.
Sends a simple prompt and prints the streamed response.
"""

import anyio
from claude_agent_sdk import query, ClaudeAgentOptions, AssistantMessage, TextBlock, ResultMessage


async def main():
    print("=== Simple Query ===\n")

    async for message in query(prompt="What is the Claude Agent SDK? Explain in 2-3 sentences."):
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    print(block.text)
        elif isinstance(message, ResultMessage):
            print(f"\n--- Cost: ${message.total_cost_usd:.4f} ---")

    print("\n=== Query with Options ===\n")

    options = ClaudeAgentOptions(
        system_prompt="You are a concise technical assistant. Reply in bullet points.",
        max_turns=1,
    )

    async for message in query(
        prompt="What tools can a Claude agent use?",
        options=options,
    ):
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    print(block.text)
        elif isinstance(message, ResultMessage):
            print(f"\n--- Cost: ${message.total_cost_usd:.4f} ---")


anyio.run(main)
