"use client";

import { eventConfig } from "../config/eventConfig";

export function AddToCalendar() {
  const downloadCalendar = () => {
    const start = new Date(eventConfig.eventDate).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const end = new Date(new Date(eventConfig.eventDate).getTime() + 8 * 3600000).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const content = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Чёрные операции//Мальчишник//RU", "BEGIN:VEVENT", `UID:${start}-bachelor-party`, `DTSTAMP:${start}`, `DTSTART:${start}`, `DTEND:${end}`, "SUMMARY:ПОСЛЕДНИЙ ВЕЧЕР СВОБОДЫ", `LOCATION:${eventConfig.meetingPlace}, ${eventConfig.address}`, `DESCRIPTION:Секретная миссия для ${eventConfig.groomName}.`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    link.download = "bachelor-party.ics";
    link.click();
    URL.revokeObjectURL(link.href);
  };
  return <button className="calendar-button" onClick={downloadCalendar}><span>＋</span> ДОБАВИТЬ В КАЛЕНДАРЬ</button>;
}
