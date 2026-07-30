export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export const eventConfig = {
  groomName: "Павел Азаренко",
  eventDate: "2026-09-12T18:00:00+03:00",
  meetingPlace: "СЕКРЕТНЫЙ АНГАР 09",
  address: "ул. Секретная, 7, Вильнюс",
  coordinates: { lat: 54.6872, lng: 25.2797 },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=54.6872,25.2797",
  musicUrl: "/music/background.mp3",
  schedule: [
    { time: "18:00", title: "Сбор команды", description: "Прибытие всех участников в точку встречи." },
    { time: "18:30", title: "Секретный брифинг", description: "Пароли, правила и распределение ролей." },
    { time: "19:00", title: "Первая точка маршрута", description: "Начало передвижения по засекреченному плану." },
    { time: "21:00", title: "Основная операция", description: "Главная часть миссии. Детали — на месте." },
    { time: "23:30", title: "Засекреченная активность", description: "Доступ только для жениха." },
    { time: "02:00", title: "Эвакуация, если получится", description: "Возвращение в цивилизацию. Или попытка." },
  ] satisfies ScheduleItem[],
};
