type EventName = 'waitlist_join';
type EventPayload = {
  source: string;
};

// Stub for a real analytics provider like Segment, PostHog, etc.
export function trackEvent(name: EventName, payload: EventPayload) {
  if (process.env.NODE_ENV === 'production') {
    console.log(`[ANALYTICS] Event: ${name}`, payload);
    // window.analytics.track(name, payload);
  }
}
