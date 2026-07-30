"use client";

import { useCallback, useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const getRemaining = useCallback(() => {
    const difference = Math.max(0, new Date(targetDate).getTime() - Date.now());
    return {
      total: difference,
      days: Math.floor(difference / 86400000),
      hours: Math.floor((difference / 3600000) % 24),
      minutes: Math.floor((difference / 60000) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, [getRemaining]);

  return remaining;
}
