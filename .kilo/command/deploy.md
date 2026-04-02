---
description: Build, commit, push and deploy to Vercel
---
Build the project, commit all changes, push to GitHub. Vercel auto-deploys.

Steps:
1. Run `source ~/.nvm/nvm.sh && npm run build` to verify build
2. If build passes, stage all changes with `git add -A`
3. Commit with message: `$ARGUMENTS` (or a descriptive default)
4. Push with `git push`
5. Confirm deployment URL: https://magicroom-mt.vercel.app

If build fails, fix errors before committing.
