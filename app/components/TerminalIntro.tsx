"use client";

import { useEffect, useState } from "react";

const introLines = [
  "$ establishing secure connection...",
  "$ verifying identity...",
  "ACCESS GRANTED",
  "Loading bachelor_party...",
  "Checking alcohol...  [██████████] 100%",
  "Checking friends...  [██████████] 100%",
  "Checking groom...  STATUS: NERVOUS",
  "Checking wedding proximity...  STATUS: CRITICAL",
  "Preparing final mission...",
  "Launching...",
];

type Props = { complete: boolean; onComplete: () => void; onOpen: () => void; onSkip: () => void };

export function TerminalIntro({ complete, onComplete, onOpen, onSkip }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const typing = !complete && visibleCount < introLines.length;

  useEffect(() => {
    if (complete || visibleCount >= introLines.length) {
      if (!complete) onComplete();
      return;
    }
    const delay = visibleCount === 0 ? 420 : 260 + Math.random() * 520;
    const timer = window.setTimeout(() => setVisibleCount((count) => count + 1), delay);
    return () => window.clearTimeout(timer);
  }, [complete, onComplete, visibleCount]);

  const skip = () => {
    setVisibleCount(introLines.length);
    onSkip();
  };

  return (
    <section className={`intro-screen ${complete ? "intro-finished" : ""}`} aria-label="Загрузка секретной операции">
      <div className="intro-noise" />
      <div className="intro-inner">
        <div className="intro-brand"><span className="brand-mark">⌁</span><span>BLACK OPS SYSTEM</span><span className="intro-version">v.09.12</span></div>
        <div className="intro-terminal">
          <div className="terminal-topline"><span>ROOT@BLACKOPS:~</span><span>TTY / 001</span></div>
          <div className="intro-lines" aria-live="polite">
            {introLines.slice(0, visibleCount).map((line, index) => <p key={line} className={line.includes("ACCESS") ? "access-line" : ""}><span className="line-index">{String(index + 1).padStart(2, "0")}</span>{line}</p>)}
            {typing && <span className="cursor" aria-hidden="true">▋</span>}
          </div>
          <div className="intro-actions">
            {visibleCount >= introLines.length && <button className="primary-button" onClick={onOpen}>[ OPEN CLASSIFIED INVITATION ] <span>→</span></button>}
            {!complete && <button className="text-button" onClick={skip}>SKIP INTRO <span>↗</span></button>}
            {complete && <button className="text-button" onClick={onOpen}>OPEN DOSSIER <span>↗</span></button>}
          </div>
        </div>
        <div className="intro-foot"><span>ALL SYSTEMS NOMINAL</span><span>DO NOT SHARE THIS LINK</span><span>● LIVE</span></div>
      </div>
    </section>
  );
}
