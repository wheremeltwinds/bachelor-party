export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export const eventConfig = {
  groomName: "Павел Азаренко",
  groomPhotoUrl: "/images/groom.jpg",
  eventDate: "2026-08-15T11:00:00+03:00",
  meetingPlace: "СЕКРЕТНЫЙ АНГАР 09",
  address: "Budiniškių gatvė 6, Vilnius",
  coordinates: { lat: 54.730713, lng: 25.211364 },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=54.730713,25.211364",
  musicUrl: "/music/background.mp3",
  schedule: [
    { time: "11:00", title: "Сбор команды", description: "Прибытие всех участников в точку встречи." },
    { time: "11:30", title: "Секретный брифинг", description: "Пароли, правила и распределение ролей." },
    { time: "12:00", title: "Первая точка маршрута", description: "Начало передвижения по засекреченному плану." },
    { time: "14:00", title: "Вторая точка маршрута", description: "Продолжение операции по утверждённому маршруту." },
    { time: "18:00", title: "Основная операция", description: "Главная часть миссии. Детали — на месте." },
    { time: "11:00", title: "Эвакуация, если получится", description: "На следующий день. Возвращение в цивилизацию. Или попытка." },
  ] satisfies ScheduleItem[],
};
