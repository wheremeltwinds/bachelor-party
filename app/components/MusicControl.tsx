"use client";

import { RefObject, useEffect, useState } from "react";

export function MusicControl({ audioRef, autoStart = false }: { audioRef: RefObject<HTMLAudioElement | null>; autoStart?: boolean }) {
  const [isOn, setIsOn] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [available, setAvailable] = useState(true);
  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [audioRef, volume]);
  useEffect(() => {
    if (!autoStart || !audioRef.current) return;
    void audioRef.current.play().then(() => setIsOn(true)).catch(() => setIsOn(false));
  }, [audioRef, autoStart]);
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isOn) { audio.pause(); setIsOn(false); return; }
    try { await audio.play(); setIsOn(true); } catch { setAvailable(false); }
  };
  return <div className="music-control"><button className={`sound-button ${isOn ? "is-on" : ""}`} onClick={toggle} aria-label={isOn ? "Выключить музыку" : "Включить музыку"} disabled={!available}><span>{isOn ? "◖" : "◗"}</span> {isOn ? "ЗВУК ВКЛ." : "ЗВУК ВЫКЛ."}</button><label className="volume-control" title="Громкость"><span>ГРОМ.</span><input type="range" min="0" max="1" step="0.05" value={volume} onChange={(event) => setVolume(Number(event.target.value))} aria-label="Громкость музыки" /></label></div>;
}
