"use client";

import { useState } from "react";
import { eventConfig } from "../config/eventConfig";

export function AcceptMission() {
  const [state, setState] = useState<"idle" | "processing" | "accepted">("idle");
  const accept = () => {
    setState("processing");
    window.setTimeout(() => setState("accepted"), 1300);
  };
  if (state === "accepted") return <div className="accepted-card"><div className="accepted-icon">✓</div><p className="eyebrow">ОТВЕТ ЗАПИСАН</p><h3>МИССИЯ ПРИНЯТА</h3><p>Агент {eventConfig.groomName} добавлен в состав операции.<br />Отступление невозможно.<br />Встречаемся в назначенной точке.</p><div className="confetti" aria-hidden="true">✦　·　✧　·　✦　·　·　✧</div></div>;
  return <button className={`accept-button ${state === "processing" ? "is-processing" : ""}`} onClick={accept} disabled={state === "processing"}>{state === "processing" ? <><span className="spinner" /> ОБРАБАТЫВАЕМ ОТВЕТ...</> : <>[ ПРИНЯТЬ МИССИЮ ] <span>→</span></>}</button>;
}
