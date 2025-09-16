# Observability Guide

## Events

### waitlist_join
- **Description**: Fired when a user successfully joins the waitlist.
- **Payload**: `{ source: string }` (e.g., 'landing_hero', 'pricing_page')
- **Dashboard Checklist**:
  - [ ] Time-series graph of waitlist joins.
  - [ ] Table breaking down joins by `source`.
