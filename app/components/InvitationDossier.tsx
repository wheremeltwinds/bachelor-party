import { eventConfig } from "../config/eventConfig";

export function InvitationDossier() {
  return (
    <div className="dossier-card">
      <div className="dossier-header"><span>CLASSIFIED FILE</span><span>NO. BP-0912</span></div>
      <div className="dossier-content">
        <div className="dossier-stamp">GROOM<br />ONLY</div>
        <div className="dossier-details">
          <div><span>OPERATION</span><strong>LAST NIGHT OF FREEDOM</strong></div>
          <div><span>SUBJECT</span><strong>{eventConfig.groomName}</strong></div>
          <div><span>STATUS</span><strong>GETTING MARRIED</strong></div>
          <div><span>MISSION STATUS</span><strong className="green-text">CONFIRMED</strong></div>
          <div><span>ACCESS LEVEL</span><strong>GROOM ONLY</strong></div>
        </div>
      </div>
      <div className="dossier-message"><span className="quote-mark">“</span><div><p>Агент {eventConfig.groomName},</p><p>твоя холостяцкая лицензия скоро будет аннулирована. Перед переходом в статус <em>MARRIED</em> необходимо выполнить последнюю секретную миссию вместе с командой.</p><p>Отказ от участия системой не предусмотрен.</p></div></div>
    </div>
  );
}
