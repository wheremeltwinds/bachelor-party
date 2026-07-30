"use client";

import { useState } from "react";
import { eventConfig } from "../config/eventConfig";

export function LocationMap() {
  const [copied, setCopied] = useState(false);
  const coords = `${eventConfig.coordinates.lat}, ${eventConfig.coordinates.lng}`;
  const copyCoordinates = async () => {
    try { await navigator.clipboard.writeText(coords); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  return <div className="location-card"><div className="map-preview"><div className="map-grid" /><div className="map-radar" /><div className="map-route route-one" /><div className="map-route route-two" /><div className="map-pin"><span>⌖</span></div><div className="map-label">TARGET LOCATION</div><div className="map-coordinates">54°41&apos;14.0&quot;N<br />25°16&apos;47.0&quot;E</div></div><div className="location-info"><div className="location-code">COORDINATES / SECURE</div><h3>{eventConfig.meetingPlace}</h3><p>{eventConfig.address}</p><div className="coordinate-readout"><span>LAT / {eventConfig.coordinates.lat}</span><span>LNG / {eventConfig.coordinates.lng}</span></div><div className="location-actions"><a className="primary-button small" href={eventConfig.mapUrl} target="_blank" rel="noreferrer">OPEN IN MAPS <span>↗</span></a><button className="secondary-button" onClick={copyCoordinates}>{copied ? "COPIED ✓" : "COPY COORDINATES"}</button></div></div></div>;
}
