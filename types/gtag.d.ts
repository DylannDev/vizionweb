interface Window {
  gtag: (
    command: "config" | "event" | "js" | "set",
    targetId: string,
    params?: Record<string, unknown>
  ) => void;
}
