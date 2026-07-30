"use client";

import { useState } from "react";
import { eventConfig } from "../config/eventConfig";

export function LocationMap() {
  const [copied, setCopied] = useState(false);
  const coords = `${eventConfig.coordinates.lat}, ${eventConfig.coordinates.lng}`;
  const copyCoordinates = async () => {
    try { await navigator.clipboard.writeText(coords); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  return <div className="location-card"><div className="map-preview"><div className="map-grid" /><div className="map-radar" /><div className="map-route route-one" /><div className="map-route route-two" /><div className="map-pin"><span>⌖</span></div><div className="map-label">ЦЕЛЕВАЯ ТОЧКА</div><div className="map-coordinates">{eventConfig.coordinates.lat.toFixed(6)} N<br />{eventConfig.coordinates.lng.toFixed(6)} E</div></div><div className="location-info"><div className="location-code">КООРДИНАТЫ / ЗАЩИЩЕНО</div><h3>{eventConfig.meetingPlace}</h3><p>{eventConfig.address}</p><div className="coordinate-readout"><span>ШИР / {eventConfig.coordinates.lat}</span><span>ДОЛГ / {eventConfig.coordinates.lng}</span></div><div className="location-actions"><a className="primary-button small" href={eventConfig.mapUrl} target="_blank" rel="noreferrer">ОТКРЫТЬ НА КАРТЕ <span>↗</span></a><button className="secondary-button" onClick={copyCoordinates}>{copied ? "СКОПИРОВАНО ✓" : "СКОПИРОВАТЬ КООРДИНАТЫ"}</button></div></div></div>;
}
