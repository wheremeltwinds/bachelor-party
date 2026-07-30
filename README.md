# LAST NIGHT OF FREEDOM

Одностраничное приглашение на мальчишник в стиле Classified Operation / Terminal.

## Быстрый старт

```bash
npm install
npm run dev
```

## Настройка события

Все данные находятся в одном файле: `app/config/eventConfig.ts`.

- `groomName` — имя жениха.
- `eventDate` — дата и время старта в ISO-формате с часовым поясом.
- `meetingPlace`, `address` — название и адрес места встречи.
- `coordinates` и `mapUrl` — координаты и ссылка на карту.
- `schedule` — массив этапов вечера с временем, названием и описанием.

## Фоновая музыка

Положите аудиофайл `background.mp3` в `public/music/background.mp3`. Сайт не ломается, если файл не добавлен: кнопка звука останется неактивной. Музыка начинает играть только после нажатия `OPEN CLASSIFIED INVITATION`, чтобы не нарушать ограничения браузеров на autoplay.

## Production

```bash
npm run build
```

Для публикации собранного проекта подойдут Vercel, Netlify или GitHub Pages. Для Vercel/Netlify достаточно подключить репозиторий, указать `npm run build` как команду сборки и использовать стандартные настройки Node.js. При публикации на GitHub Pages настройте deployment workflow на установку зависимостей и запуск production-сборки.

## Дополнительно

- Кнопка `ADD TO CALENDAR` генерирует локальный `.ics` без backend.
- Подтверждение миссии хранится только в состоянии страницы.
- Пасхалка активируется последовательным вводом `beer` с клавиатуры.
