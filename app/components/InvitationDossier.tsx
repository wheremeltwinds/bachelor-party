import { eventConfig } from "../config/eventConfig";

export function InvitationDossier() {
  return (
    <div className="dossier-card">
      <div className="dossier-header"><span>СЕКРЕТНОЕ ДЕЛО</span><span>№ BP-0912</span></div>
      <div className="dossier-content">
        <div className="dossier-stamp">ТОЛЬКО<br />ЖЕНИХУ</div>
        <div className="dossier-details">
          <div><span>ОПЕРАЦИЯ</span><strong>ПОСЛЕДНИЙ ВЕЧЕР СВОБОДЫ</strong></div>
          <div><span>ОБЪЕКТ</span><strong>{eventConfig.groomName}</strong></div>
          <div><span>СТАТУС</span><strong>ЖЕНИХ</strong></div>
          <div><span>СТАТУС МИССИИ</span><strong className="green-text">ПОДТВЕРЖДЕНО</strong></div>
          <div><span>УРОВЕНЬ ДОПУСКА</span><strong>ТОЛЬКО ЖЕНИХУ</strong></div>
        </div>
      </div>
      <div className="dossier-message"><span className="quote-mark">“</span><div><p>Агент {eventConfig.groomName},</p><p>твоя холостяцкая лицензия скоро будет аннулирована. Перед переходом в статус <em>ЖЕНАТ</em> необходимо выполнить последнюю секретную миссию вместе с командой.</p><p>Отказ от участия системой не предусмотрен.</p></div></div>
    </div>
  );
}
