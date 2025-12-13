# Copilot Instructions for ARIA-ONE-Universe

## Overview
This monorepo contains multiple related projects:
- `ariaone/`, `aurxfreq/`, `kikix/`: Each is a separate web or app component.
- `aria-one-webapp/`: A demo webapp with Genie/AI Quick Fix integration.

## Architecture & Patterns
- Each subfolder in the root is a distinct project. There is no shared codebase or monorepo tooling (e.g., no Lerna, Turborepo, or Nx).
- Projects are mostly independent, but may share design or integration patterns (see below).
- The `aria-one-webapp` project includes a web UI (`index.html`, `Script.js`, `Style.css`) and a CLI helper (`scripts/genie_prompt.sh`) for formatting error messages for the Genie VS Code extension.

## Developer Workflows
- There is no global build or test script at the monorepo root. Each project manages its own scripts and dependencies.
- For `aria-one-webapp`:
  - Open `index.html` in a browser to use the Genie prompt web UI.
  - Use `scripts/genie_prompt.sh` (Linux/macOS) to format errors for Genie. Example:
    ```sh
    ./scripts/genie_prompt.sh "TypeError: ..."
    echo "ReferenceError: ..." | ./scripts/genie_prompt.sh
    ```
  - The CLI helper tries `wl-copy`, `xclip`, or `pbcopy` for clipboard integration, or prints to stdout if none found.
- No explicit test, lint, or build commands are documented for other projects. Check each subproject for its own README or scripts.

## Conventions & Integration
- No monorepo-wide code style or linting rules are enforced.
- Genie/AI Quick Fix integration is a key workflow for debugging and error resolution in `aria-one-webapp`.
- The web UI prepares prompts for the Genie extension but does not directly communicate with VS Code.

## External Dependencies
- Genie/AI Quick Fix VS Code extension: https://marketplace.visualstudio.com/items?itemName=haselerdev.aiquickfix
- Standard clipboard utilities for the CLI helper (`wl-copy`, `xclip`, `pbcopy`).

## Key Files & Directories
- `aria-one-webapp/index.html`, `Script.js`, `Style.css`: Web UI for Genie prompt generation.
- `aria-one-webapp/scripts/genie_prompt.sh`: CLI helper for Genie prompt formatting.
- Each subproject (`ariaone/`, `aurxfreq/`, `kikix/`): See inside for project-specific logic.

## Example: Genie Prompt Workflow
1. Encounter an error in your code.
2. Use the web UI or CLI helper to format the error as a Genie prompt.
3. Paste the prompt into the Genie extension in VS Code to get AI-powered suggestions.

---

_If you add new projects or workflows, update this file to document their structure and conventions._
