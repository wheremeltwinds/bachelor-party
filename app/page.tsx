"use client";

import { useEffect, useRef, useState } from "react";
import { AcceptMission } from "./components/AcceptMission";
import { AddToCalendar } from "./components/AddToCalendar";
import { Countdown } from "./components/Countdown";
import { InvitationDossier } from "./components/InvitationDossier";
import { LocationMap } from "./components/LocationMap";
import { MissionTimeline } from "./components/MissionTimeline";
import { MusicControl } from "./components/MusicControl";
import { TerminalIntro } from "./components/TerminalIntro";
import { eventConfig } from "./config/eventConfig";

export default function Home() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let commandBuffer = "";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.length === 1) {
        commandBuffer = `${commandBuffer}${event.key.toLowerCase()}`.slice(-12);
        if (commandBuffer.endsWith("beer")) setEasterEgg(true);
      }
    };
    const handleScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openInvitation = () => {
    setInvitationOpen(true);
    window.setTimeout(() => {
      document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
    }, 90);
  };

  const restartIntro = () => {
    setInvitationOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="site-shell">
      <TerminalIntro
        isOpen={invitationOpen}
        onOpen={openInvitation}
      />

      <div className={`invitation-layer ${invitationOpen ? "is-open" : ""}`}>
        <header className="topbar">
          <div className="topbar-inner">
            <a className="brand" href="#invitation" aria-label="В начало досье">
              <span className="brand-mark">⌁</span>
              <span>BLACK OPS / 09</span>
            </a>
            <div className="topbar-status"><span className="status-dot" /> SECURE CHANNEL</div>
            <MusicControl audioRef={audioRef} />
          </div>
        </header>

        <audio ref={audioRef} src={eventConfig.musicUrl} loop preload="none" />

        <section className="hero-section section-wrap" id="invitation">
          <div className="hero-grid">
            <div className="hero-copy reveal-item">
              <div className="eyebrow"><span className="eyebrow-line" /> CLASSIFIED INVITATION / 001</div>
              <p className="hero-kicker">ТЕБЕ НАЗНАЧЕНА</p>
              <h1>ПОСЛЕДНЯЯ<br /><span>МИССИЯ</span></h1>
              <p className="hero-subtitle">перед семейной жизнью</p>
              <p className="hero-lead">Операция, о которой нельзя рассказывать невесте. Но можно — самым близким.</p>
              <button className="scroll-cta" onClick={() => document.getElementById("briefing")?.scrollIntoView({ behavior: "smooth" })}>
                <span>↓</span> ОТКРЫТЬ БРИФИНГ
              </button>
            </div>
            <div className="hero-terminal reveal-item reveal-delay-1" aria-label="Статус секретной операции">
              <div className="terminal-topline"><span>MISSION CONTROL</span><span>ENCRYPTED</span></div>
              <div className="terminal-body">
                <div className="terminal-ascii" aria-hidden="true">{`╔══════════════════╗
║  ACCESS GRANTED  ║
╚══════════════════╝`}</div>
                <div className="terminal-readout">
                  <p><span className="dim">AGENT //</span> {eventConfig.groomName.toUpperCase()}</p>
                  <p><span className="dim">MISSION //</span> LAST NIGHT OF FREEDOM</p>
                  <p><span className="dim">STATUS //</span> <span className="ok">CONFIRMED</span></p>
                  <p><span className="dim">RISK //</span> <span className="warn">CRITICAL</span></p>
                </div>
                <div className="terminal-progress"><span>OPERATION READY</span><b><i /></b><span>100%</span></div>
              </div>
              <div className="terminal-footer">SESSION ID: BP-0912 / DO NOT FORWARD</div>
            </div>
          </div>
        </section>

        <section className="section-wrap briefing-section" id="briefing">
          <div className="section-heading"><span className="section-number">01</span><div><p className="eyebrow">PERSONNEL FILE</p><h2>Досье объекта</h2></div></div>
          <InvitationDossier />
        </section>

        <section className="section-wrap countdown-section">
          <div className="countdown-card">
            <div className="countdown-label"><span className="live-dot" /> MISSION STARTS IN</div>
            <Countdown />
            <p className="countdown-note">До последнего официально свободного вечера.</p>
          </div>
          <div className="countdown-side"><span>WINDOW</span><strong>12.09.26</strong><small>18:00 / LOCAL TIME</small></div>
        </section>

        <section className="section-wrap timeline-section" id="timeline">
          <div className="section-heading"><span className="section-number">02</span><div><p className="eyebrow">OPERATION PLAN</p><h2>План операции</h2></div></div>
          <MissionTimeline />
        </section>

        <section className="section-wrap location-section" id="location">
          <div className="section-heading"><span className="section-number">03</span><div><p className="eyebrow">GEOLOCATION DATA</p><h2>Координаты сбора</h2></div></div>
          <LocationMap />
        </section>

        <section className="section-wrap final-section" id="accept">
          <div className="final-grid">
            <div><p className="eyebrow">NO WAY BACK / 04</p><h2>Готов к<br /><span>выходу?</span></h2><p className="final-copy">Система зафиксирует твой ответ и передаст его командованию.</p></div>
            <div className="final-actions"><AddToCalendar /><AcceptMission /></div>
          </div>
        </section>

        <footer className="site-footer section-wrap">
          <div><span className="brand-mark">⌁</span> BLACK OPS / BACHELOR PARTY</div>
          <button className="restart-button" onClick={restartIntro}>↻ REPLAY INTRO</button>
          <div className="footer-meta">BUILT FOR ONE NIGHT ONLY <span>◆</span></div>
        </footer>

        {easterEgg && <div className="easter-egg" role="status"><span>&gt;</span> BONUS OBJECTIVE UNLOCKED: KEEP THE GROOM ALIVE UNTIL MORNING <button onClick={() => setEasterEgg(false)} aria-label="Закрыть сообщение">×</button></div>}
        {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Вернуться наверх">↑</button>}
      </div>
    </main>
  );
}
