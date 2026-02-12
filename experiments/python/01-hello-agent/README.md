# 01 — Hello Agent (Python)

Basic introduction to the Claude Agent SDK for Python.

## What This Demonstrates
- Importing and calling `query()` with a simple prompt
- Async iteration over streamed messages
- Extracting text from `AssistantMessage` / `TextBlock`
- Reading cost info from `ResultMessage`

## Run

```bash
export ANTHROPIC_API_KEY="your-key"
python main.py
```

## Key APIs Used
- `query(prompt, options)` — one-shot agent query
- `ClaudeAgentOptions` — configuration (system prompt, max turns, allowed tools)
- `AssistantMessage`, `TextBlock`, `ResultMessage` — message types
