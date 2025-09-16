# Runbook: [Feature Name]

## Feature Toggles
- `[FLAG_NAME]`: Toggles the entire feature. Default: OFF.

## Failure Modes & Recovery
- **Symptom**: High error rate on server action `[action_name]`.
  - **Check**: Sentry logs for this action.
  - **Rollback**: Disable `[FLAG_NAME]` in Vercel Edge Config.
- **Symptom**: Spam submissions.
  - **Check**: `waitlist` table for suspicious patterns.
  - **Rollback**: Enable honeypot or increase minimum time-to-submit threshold.
