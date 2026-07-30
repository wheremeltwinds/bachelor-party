import { eventConfig } from "../config/eventConfig";

export function MissionTimeline() {
  return <div className="timeline">{eventConfig.schedule.map((item, index) => <article className="timeline-item" key={`${item.time}-${item.title}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-time">{item.time}</div><div className="timeline-copy"><h3>{item.title}</h3><p>{item.description}</p></div><div className="timeline-status">{index === 0 ? "СТАРТ" : index === eventConfig.schedule.length - 1 ? "ФИНИШ" : "ГОТОВО"}</div></article>)}</div>;
}
