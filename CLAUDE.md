# Claude Code Project Context

## What This Is
A learning and experimentation repo for the **Claude Agent SDK** (Python & TypeScript). Contains upstream Anthropic repos as git submodules under `vendor/` and personal experiments under `experiments/`.

## Project Structure
- `vendor/` — Git submodules (read-only upstream mirrors). Do NOT modify files here.
- `experiments/python/` — Python experiments, numbered for progression (01-, 02-, etc.)
- `experiments/typescript/` — TypeScript experiments, numbered similarly
- `notes/` — Learning notes and quick API references
- `scripts/` — Utility scripts (submodule sync, etc.)

## Conventions
- Experiments are numbered: `01-hello-agent`, `02-custom-tools`, etc.
- Each experiment has its own `README.md` explaining what it demonstrates
- Python uses `anyio` for async (not raw asyncio) per SDK convention
- TypeScript experiments use `tsx` to run directly

## SDK Quick Reference
- Python: `from claude_agent_sdk import query, ClaudeAgentOptions`
- TypeScript: `import { query } from "@anthropic-ai/claude-agent-sdk"`
- Both SDKs stream messages via async iteration
- Key message types: `AssistantMessage`, `UserMessage`, `ResultMessage`, `SystemMessage`
- Key content blocks: `TextBlock`, `ToolUseBlock`, `ToolResultBlock`, `ThinkingBlock`

## Environment
- Python dependencies in `requirements.txt`
- TypeScript dependencies in `package.json`
- Requires `ANTHROPIC_API_KEY` env var for running experiments
