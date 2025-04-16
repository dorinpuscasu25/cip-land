export const translations = {
  ro: {
    title: 'În aprilie Cipauto împlinește 15 ani!',
    subtitle: '15 ani • 15 cadouri',
    description: 'În perioada 16 aprilie – 31 august 2025, sărbătorim împreună aniversarea CipAuto cu o Tombolă Aniversară și 15 premii speciale!',
    grandPrize: 'Premiul mare!',
    tires: 'Anvelope',
    tiresCount: '5 seturi',
    fuel: 'Combustibil',
    fuelAmount: '9x 100 litri',
    viewCatalog: 'Vezi toate mașinile',
    address: 'str. Grădina Botanică 9, Chișinău',
    phone: '+373 793 57 755',
    howToParticipate: {
      title: 'Cum participi?',
      step1: 'Să procuri un automobil de la CipAuto în perioada 16 aprilie – 31 august 2025',
      step2: 'Să lași o recenzie sinceră pe:',
      step3: 'Să te abonezi la toate rețelele noastre sociale:',
      confirmation: '✅ Dacă îndeplinești toate condițiile, vei fi automat înscris în tombolă!'
    },
    event: {
      title: '📍 Extragerea câștigătorilor',
      date: '7 septembrie 2025, ora 12:00',
      location: 'Grădina Botanică din Chișinău, Aleea 9',
      description: '🎉 Vino să sărbătorim împreună cu muzică, surprize și voie bună!'
    },
    campaign: {
      validity: '📅 Campania este valabilă exclusiv în perioada 16 aprilie – 31 august 2025.',
      cta: 'Nu rata șansa să câștigi un automobil nou și multe alte premii!'
    },
    rules: {
      title: 'Regulament',
      whoCanParticipate: 'Cine poate participa',
      howToEnter: 'Cum să participi',
      period: 'Perioada promoției',
      winners: 'Anunțarea câștigătorilor'
    }
  },
  ru: {
    title: 'В апреле Cipauto отмечает 15-летие!',
    subtitle: '15 лет • 15 подарков',
    description: 'С 16 апреля по 31 августа 2025 года мы вместе празднуем юбилей CipAuto с Юбилейной Лотереей и 15 специальными призами!',
    grandPrize: 'Главный приз!',
    tires: 'Шины',
    tiresCount: '5 комплектов',
    fuel: 'Топливо',
    fuelAmount: '9x 100 литров',
    viewCatalog: 'Смотреть каталог',
    address: 'ул. Грэдина Ботаникэ 9, Кишинёв',
    phone: '+373 793 57 755',
    howToParticipate: {
      title: 'Как участвовать?',
      step1: 'Приобрести автомобиль в CipAuto в период с 16 апреля по 31 августа 2025 года',
      step2: 'Оставить честный отзыв на:',
      step3: 'Подписаться на все наши социальные сети:',
      confirmation: '✅ Если вы выполните все условия, вы автоматически будете зарегистрированы в лотерее!'
    },
    event: {
      title: '📍 Розыгрыш призов',
      date: '7 сентября 2025, 12:00',
      location: 'Ботанический сад Кишинёва, Аллея 9',
      description: '🎉 Приходите праздновать вместе с музыкой, сюрпризами и хорошим настроением!'
    },
    campaign: {
      validity: '📅 Акция действует исключительно с 16 апреля по 31 августа 2025 года.',
      cta: 'Не упустите шанс выиграть новый автомобиль и множество других призов!'
    },
    rules: {
      title: 'Правила',
      whoCanParticipate: 'Кто может участвовать',
      howToEnter: 'Как участвовать',
      period: 'Период акции',
      winners: 'Объявление победителей'
    }
  }
};

export type Language = 'ro' | 'ru';
export type TranslationKey = keyof typeof translations.ro;