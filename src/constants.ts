export const DATA = {
  pickPoints: [
    // По хорошему нужно попросить бэкенд чтобы генерировали уникальные
    // id для каждого местоположения для более эффективной оптимизации
    {
      address: 'ул. Авиационная, 14',
      budgets: ['Самовывоз', 'Доставка', 'Примерочная'],
      latitude: 56.80245,
      longitude: 60.604913,
    },
    {
      address: 'ул. Белореченская, 54',
      budgets: ['Самовывоз'],
      latitude: 54.708415,
      longitude: 55.975993,
    },
    {
      address: 'ул. Первомайская, 8',
      budgets: ['Доставка', 'Примерочная', 'Шоурум'],
      latitude: 53.364343,
      longitude: 55.925364,
    },
    {
      address: 'пер. Встречный, 9',
      budgets: ['Примерочная', 'Шоурум'],
      latitude: 56.821932,
      longitude: 60.563563,
    },
  ],
};

export const DEFAULT_CENTER = [56.837631, 60.597622];
export const DEFAULT_ZOOM = 5;
export const LOCATION_ZOOM = 15;
