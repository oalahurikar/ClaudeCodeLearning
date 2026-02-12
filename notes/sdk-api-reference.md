# Claude Agent SDK — Quick API Reference

## Core Function: `query()`

The main entry point for both Python and TypeScript SDKs.

### Python

```python
from claude_agent_sdk import query, ClaudeAgentOptions

async for message in query(prompt="...", options=ClaudeAgentOptions(...)):
    ...
```

### TypeScript

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({ prompt: "...", options: { ... } })) {
  ...
}
```

## ClaudeAgentOptions / Options

| Field (Python) | Field (TypeScript) | Description |
|---|---|---|
| `system_prompt` | `systemPrompt` | Custom system prompt (string or preset) |
| `max_turns` | `maxTurns` | Max agent loop iterations |
| `allowed_tools` | `allowedTools` | List of tools the agent can use |
| `continue_conversation` | `continue` | Continue from previous session |

### System Prompt Presets (Python)

```python
# Simple string
ClaudeAgentOptions(system_prompt="You are a pirate.")

# Preset
ClaudeAgentOptions(system_prompt={"type": "preset", "preset": "claude_code"})

# Preset + append
ClaudeAgentOptions(system_prompt={"type": "preset", "preset": "claude_code", "append": "Extra instructions."})
```

## Message Types

### Python

| Type | Import | Key Fields |
|---|---|---|
| `AssistantMessage` | `claude_agent_sdk` | `.content` (list of blocks), `.model` |
| `UserMessage` | `claude_agent_sdk` | `.content` (list of blocks) |
| `SystemMessage` | `claude_agent_sdk` | `.subtype`, `.data` |
| `ResultMessage` | `claude_agent_sdk` | `.session_id`, `.total_cost_usd`, `.duration_ms`, `.num_turns` |

### TypeScript

Messages have a `.type` field: `"assistant"`, `"user"`, `"system"`, `"result"`.

## Content Block Types

| Type | Key Fields |
|---|---|
| `TextBlock` | `.text` |
| `ToolUseBlock` | `.name`, `.id`, `.input` |
| `ToolResultBlock` | `.tool_use_id`, `.content` |
| `ThinkingBlock` | `.thinking` |

## Built-in Tools

Available tools the agent can use (pass as strings to `allowed_tools`):

- `Read` — Read files
- `Edit` — Edit files
- `Write` — Write new files
- `Bash` — Execute shell commands
- `Glob` — Find files by pattern
- `Grep` — Search file contents
- `WebFetch` — Fetch web content
- `WebSearch` — Search the web

## Client-Based Usage (Python)

For multi-turn conversations with more control:

```python
from claude_agent_sdk import ClaudeSDKClient, ClaudeAgentOptions

async with ClaudeSDKClient(options=ClaudeAgentOptions(...)) as client:
    await client.query("Your prompt")
    async for msg in client.receive_messages():
        ...
```
