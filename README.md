# Claude Agent SDK — Learning & Experimentation

A structured repo for learning and experimenting with the **Claude Agent SDK** (Python & TypeScript). Tracks official Anthropic repos via git submodules and organizes personal experiments alongside official examples.

## Quick Start

```bash
# Clone with submodules
git clone --recurse-submodules <repo-url>
cd ClaudeCodeLearning

# Or if already cloned:
git submodule update --init --recursive

# Python setup
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# TypeScript setup
npm install
```

## Repo Structure

```
├── vendor/                        # Git submodules (upstream, read-only)
│   ├── claude-agent-sdk-python/   # Python SDK source + examples
│   ├── claude-agent-sdk-typescript/ # TypeScript SDK source
│   ├── claude-agent-sdk-demos/    # 7 demo apps (email-agent, research-agent, etc.)
│   └── claude-cookbooks/          # Notebooks for RAG, tool use, agents
│
├── experiments/                   # Personal experiments
│   ├── python/                    # Python experiments (numbered)
│   └── typescript/                # TypeScript experiments (numbered)
│
├── notes/                         # Learning notes & quick references
├── scripts/                       # Utility scripts
└── .github/workflows/             # CI: weekly submodule sync
```

## Key Resources

| Resource | Link | Description |
|----------|------|-------------|
| Agent SDK Docs | [platform.claude.com/docs/agent-sdk](https://platform.claude.com/docs/en/agent-sdk/overview) | Official documentation |
| Python SDK | [github.com/anthropics/claude-agent-sdk-python](https://github.com/anthropics/claude-agent-sdk-python) | Python SDK source |
| TypeScript SDK | [github.com/anthropics/claude-agent-sdk-typescript](https://github.com/anthropics/claude-agent-sdk-typescript) | TypeScript SDK source |
| SDK Demos | [github.com/anthropics/claude-agent-sdk-demos](https://github.com/anthropics/claude-agent-sdk-demos) | Demo applications |
| Cookbooks | [github.com/anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | Jupyter notebooks |

## Running Experiments

Each experiment is self-contained with its own README.

```bash
# Python
cd experiments/python/01-hello-agent
python main.py

# TypeScript
cd experiments/typescript/01-hello-agent
npx tsx main.ts
```

> Requires `ANTHROPIC_API_KEY` environment variable to be set.

## Syncing Upstream

Submodules are synced automatically via GitHub Actions (weekly). To sync manually:

```bash
./scripts/sync-submodules.sh
```

## License

Personal learning repo. Upstream submodules retain their original licenses.
