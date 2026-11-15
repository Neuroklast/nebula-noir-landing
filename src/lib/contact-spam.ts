/** Server-side spam trap used before contact rate limits and delivery. */
export function honeypotTriggered(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0
}
