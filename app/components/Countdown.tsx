"use client";

import { eventConfig } from "../config/eventConfig";
import { useCountdown } from "../hooks/useCountdown";

const pad = (value: number) => String(value).padStart(2, "0");

export function Countdown() {
  const time = useCountdown(eventConfig.eventDate);
  if (time.total === 0) return <div className="mission-active">MISSION IS ACTIVE</div>;
  return <div className="countdown-grid">{[[time.days, "DAYS"], [time.hours, "HOURS"], [time.minutes, "MINUTES"], [time.seconds, "SECONDS"]].map(([value, label]) => <div className="countdown-unit" key={label}><strong>{pad(Number(value))}</strong><span>{label}</span></div>)}</div>;
}
