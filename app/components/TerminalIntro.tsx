"use client";

import { useEffect, useState } from "react";

const introLines = [
  "$ устанавливаем защищённое соединение...",
  "$ проверяем личность...",
  "ДОСТУП РАЗРЕШЁН",
  "Загрузка bachelor_party...",
  "Проверка алкоголя...  [██████████] 100%",
  "Проверка друзей...  [██████████] 100%",
  "Проверка жениха...  СТАТУС: НЕРВНИЧАЕТ",
  "Проверка близости свадьбы...  СТАТУС: КРИТИЧЕСКИЙ",
  "Подготовка финальной миссии...",
  "Запуск...",
];

type Props = { isOpen: boolean; onOpen: () => void };

export function TerminalIntro({ isOpen, onOpen }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const introFinished = visibleCount >= introLines.length;
  const typing = !introFinished;

  useEffect(() => {
    if (introFinished) return;
    const delay = visibleCount === 0 ? 420 : 260 + Math.random() * 520;
    const timer = window.setTimeout(() => setVisibleCount((count) => count + 1), delay);
    return () => window.clearTimeout(timer);
  }, [introFinished, visibleCount]);

  const skip = () => setVisibleCount(introLines.length);

  return (
    <section className={`intro-screen ${isOpen ? "intro-finished" : ""}`} aria-label="Загрузка секретной операции">
      <div className="intro-noise" />
      <div className="intro-inner">
        <div className="intro-brand"><span className="brand-mark">⌁</span><span>СИСТЕМА BLACK OPS</span><span className="intro-version">v.09.12</span></div>
        <div className="intro-terminal">
          <div className="terminal-topline"><span>ROOT@BLACKOPS:~</span><span>TTY / 001</span></div>
          <div className="intro-lines" aria-live="polite">
            {introLines.slice(0, visibleCount).map((line, index) => <p key={line} className={line.includes("ACCESS") ? "access-line" : ""}><span className="line-index">{String(index + 1).padStart(2, "0")}</span>{line}</p>)}
            {typing && <span className="cursor" aria-hidden="true">▋</span>}
          </div>
          <div className="intro-actions">
            {visibleCount >= introLines.length && <button className="primary-button" onClick={onOpen}>[ ОТКРЫТЬ СЕКРЕТНОЕ ПРИГЛАШЕНИЕ ] <span>→</span></button>}
            {!introFinished && <button className="text-button" onClick={skip}>ПРОПУСТИТЬ ВВОД <span>↗</span></button>}
          </div>
        </div>
        <div className="intro-foot"><span>ВСЕ СИСТЕМЫ В НОРМЕ</span><span>НЕ ПЕРЕСЫЛАТЬ ЭТУ ССЫЛКУ</span><span>● В ЭФИРЕ</span></div>
      </div>
    </section>
  );
}
