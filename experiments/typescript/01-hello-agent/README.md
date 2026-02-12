# 01 — Hello Agent (TypeScript)

Basic introduction to the Claude Agent SDK for TypeScript.

## What This Demonstrates
- Importing and calling `query()` with a simple prompt
- Async iteration over streamed messages (`for await`)
- Filtering message types (assistant, result)
- Extracting text content from assistant messages

## Run

```bash
export ANTHROPIC_API_KEY="your-key"
npx tsx main.ts
```

## Key APIs Used
- `query({ prompt, options })` — one-shot agent query
- `options.maxTurns` — limit agent loop iterations
- `options.allowedTools` — restrict available tools
- Message types: `assistant`, `result`
