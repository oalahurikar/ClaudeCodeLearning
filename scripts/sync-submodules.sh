#!/usr/bin/env bash
set -euo pipefail

# Sync all git submodules to latest main branch
# Usage: ./scripts/sync-submodules.sh

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

echo "=== Syncing submodules to latest upstream ==="
echo ""

git submodule foreach --quiet 'echo "Checking $name..."'

# Update each submodule to latest remote main
git submodule foreach '
  echo ""
  echo "--- $name ---"
  BEFORE=$(git rev-parse HEAD)
  git fetch origin main --quiet
  git checkout main --quiet 2>/dev/null || git checkout origin/main --quiet
  git pull origin main --quiet
  AFTER=$(git rev-parse HEAD)
  if [ "$BEFORE" != "$AFTER" ]; then
    echo "  Updated: ${BEFORE:0:8} → ${AFTER:0:8}"
    git log --oneline "$BEFORE..$AFTER" | sed "s/^/  /"
  else
    echo "  Already up to date."
  fi
'

echo ""
echo "=== Done. Run 'git diff' to see submodule pointer changes. ==="
