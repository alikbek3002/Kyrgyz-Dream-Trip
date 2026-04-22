export const TOURS = [
  {
    id: 'song-kul',
    num: 'No. 01',
    region: 'Naryn Oblast',
    title_en: ['Song-Kul', { italic: ' after dusk' }],
    title_ru: 'Сон-Куль — после заката',
    deck: 'Seven nights in a jailoo camp among herders who return to the lake every summer. Milk-tea at dawn, kok-boru at golden hour, stars without a single lamp.',
    tag: 'Nomad life',
    duration: '7 nights',
    season: 'Jun — Sep',
    altitude: '3016 m',
    from: '$1,840',
    photo: 'PHOTO — Yurts on Song-Kul shore, dawn, wide',
    pull: ['“You stop measuring time in hours. You measure it in how far the ', { mark: 'horses have wandered' }, '.”'],
    attrib: '— Aigerim K., guide since 2014',
    itin: [
      ['D01', 'Bishkek → Kochkor, meet the Janybekov family'],
      ['D02', 'Drive over 33 Parrots pass to the jailoo'],
      ['D03', 'Eagle hunter demo + ride to north shore'],
      ['D04', 'Rest day, yurt craft with Nurgul'],
      ['D05', 'Horse trek to the petroglyph field'],
      ['D06', 'Farewell feast, kumys ceremony'],
      ['D07', 'Return via Ming-Kush'],
    ],
  },
  {
    id: 'ala-archa',
    num: 'No. 02',
    region: 'Chüy & Issyk-Kul',
    title_en: [{ italic: 'Ala-Archa' }, ' to Karakol'],
    title_ru: 'Ала-Арча — Каракол',
    deck: 'A short, punchy itinerary for travelers with one week: glacier day-hikes above Bishkek, then east along the lake to Karakol for the Sunday animal bazaar.',
    tag: 'Trekking',
    duration: '5 nights',
    season: 'May — Oct',
    altitude: '4895 m',
    from: '$1,210',
    photo: 'PHOTO — Ratsek hut with Korona peak behind',
    pull: ['“The only country where a hiking trail ends in a ', { mark: 'bowl of fresh ashlan-fu' }, '.”'],
    attrib: '— Daniyar M., lead guide',
    itin: [
      ['D01', 'Arrive Bishkek, orientation walk'],
      ['D02', 'Ala-Archa — hike to Ak-Sai glacier'],
      ['D03', 'Drive Issyk-Kul south shore, Bokonbaevo'],
      ['D04', 'Skazka canyon + Karakol arrival'],
      ['D05', 'Sunday bazaar, Przhevalsky memorial'],
      ['D06', 'Return via Balykchy'],
    ],
  },
  {
    id: 'eagle',
    num: 'No. 03',
    region: 'Bokonbaevo, Issyk-Kul',
    title_en: ['Winter', { italic: ' with the eagle hunters' }],
    title_ru: 'Зима с беркутчи',
    deck: 'Nine days alongside two fourth-generation berkutchi as they hunt fox across the snowline. Small group — four travelers, no more. Not a demonstration.',
    tag: 'Heritage',
    duration: '9 nights',
    season: 'Dec — Feb',
    altitude: '2100 m',
    from: '$3,460',
    photo: 'PHOTO — Berkutchi on horseback, golden eagle, snow',
    pull: ['“The eagle returns to the glove ', { mark: 'because you kept your word' }, ', not because you fed her.”'],
    attrib: '— Talgarbek I., berkutchi',
    itin: [
      ['D01', 'Bishkek → Bokonbaevo, meet the family'],
      ['D02', 'Eagle care, felt-making with Mairam'],
      ['D03', 'Morning hunt — foothills above the village'],
      ['D04', 'Rest, visit a shyrdak workshop'],
      ['D05', 'Horseback out to a highland camp'],
      ['D06', 'Two-day hunt loop in the Terskey range'],
      ['D08', 'Return via Barskoon gorge'],
      ['D09', 'Bishkek, closing dinner'],
    ],
  },
];

export const FILTERS = [
  { id: 'all', label_en: 'All journeys', label_ru: 'Все маршруты' },
  { id: 'Nomad life', label_en: 'Nomad life', label_ru: 'Кочевой быт' },
  { id: 'Trekking', label_en: 'Trekking', label_ru: 'Треккинг' },
  { id: 'Heritage', label_en: 'Heritage', label_ru: 'Традиции' },
];

export const GUIDES = [
  { en: 'Aigerim K.', ru: 'Айгерим К.', role: 'Lead guide, Naryn', p_en: 'Born in Kochkor. Speaks Kyrgyz, Russian, English. Leads all Song-Kul departures.', p_ru: 'Родом из Кочкора. Ведёт все выезды на Сон-Куль.', photo: 'PHOTO — Guide portrait, Aigerim, natural light' },
  { en: 'Daniyar M.', ru: 'Данияр М.', role: 'Mountain guide', p_en: 'UIAGM-certified. Twelve seasons in the Ala-Archa range, zero evacuations.', p_ru: 'Сертификат UIAGM. 12 сезонов в Ала-Арче без эвакуаций.', photo: 'PHOTO — Daniyar on ridge, medium' },
  { en: 'Talgarbek I.', ru: 'Талгарбек И.', role: 'Berkutchi, Bokonbaevo', p_en: 'Fourth-generation eagle hunter. Hosts the winter program with his wife Mairam.', p_ru: 'Беркутчи в четвёртом поколении. Ведёт зимний маршрут.', photo: 'PHOTO — Talgarbek with eagle' },
  { en: 'Nurgul T.', ru: 'Нургуль Т.', role: 'Craft host, Kochkor', p_en: 'Runs the shyrdak felt cooperative travelers visit on day four of the Song-Kul journey.', p_ru: 'Возглавляет кооператив по шырдаку в Кочкоре.', photo: 'PHOTO — Nurgul at loom' },
];

export const PILLARS = [
  { n: 'I', en_h: 'We pay guides by the day, not the head.', ru_h: 'Гидам платим по дням, а не по людям.', en_p: 'Our lead guides earn a predictable salary across the season, so a rainy day doesn\'t cost them anything. Tips go straight to the host households.', ru_p: 'Ведущие гиды получают зарплату за сезон, а чаевые идут напрямую принимающим семьям.' },
  { n: 'II', en_h: 'Groups are capped at eight. No exceptions.', ru_h: 'Группа не более восьми. Без исключений.', en_p: 'A yurt sleeps eight with dignity. Past that, someone ends up on the floor or the family eats separately — both of which we refuse.', ru_p: 'В юрте достойно помещаются восемь. Больше — кто-то спит на полу, а семья ест отдельно.' },
  { n: 'III', en_h: 'Every itinerary has a rest day.', ru_h: 'В каждом маршруте есть день отдыха.', en_p: 'Not a bonus hike. A real day where nothing is scheduled and the guesthouse has a kitchen you\'re welcome to use.', ru_p: 'Настоящий день, когда ничего не запланировано, а на кухне вас ждут.' },
  { n: 'IV', en_h: '1.5% of each booking funds pasture repair.', ru_h: '1,5% с каждого бронирования — на пастбища.', en_p: 'We contribute to the Jaichy Union\'s overgrazing recovery program in the Suusamyr and Arpa valleys. It\'s small. It\'s consistent.', ru_p: 'Мы поддерживаем программу восстановления пастбищ в долинах Суусамыр и Арпа.' },
];

export const ARTICLES = [
  { kicker_en: 'Field note · 6 min read', kicker_ru: 'Заметка · 6 мин', h_en: 'Why we stopped offering the one-day Song-Kul add-on', h_ru: 'Почему мы отказались от однодневного Сон-Куля', by_en: 'By Aigerim K. · March 2026', by_ru: 'Айгерим К. · Март 2026', p_en: 'Three hours each way for ninety minutes at the lake is not a visit — it\'s a photograph. Here\'s what we offer instead, and what we learned from the families.', p_ru: 'Три часа туда, три обратно, полтора часа у озера — это не визит, это фото.', photo: 'PHOTO — Song-Kul road at dusk' },
  { kicker_en: 'Recipe · 3 min read', kicker_ru: 'Рецепт · 3 мин', h_en: 'Beshbarmak, the way Nurgul\'s mother taught her', h_ru: 'Бешбармак — так готовит мама Нургуль', by_en: 'By the kitchen, Kochkor', by_ru: 'Кухня в Кочкоре', p_en: 'Noodles wider than your thumb, broth skimmed three times, and a lamb raised by a neighbor.', p_ru: 'Лапша шире пальца, бульон, снятый трижды, и барашек от соседа.', photo: 'PHOTO — Hands rolling dough' },
  { kicker_en: 'Gear · 4 min read', kicker_ru: 'Снаряжение · 4 мин', h_en: 'What we actually pack for the September departures', h_ru: 'Что мы реально берём в сентябрьские выезды', by_en: 'By Daniyar M.', by_ru: 'Данияр М.', p_en: 'A guide\'s packing list. No affiliate links — we don\'t take them.', p_ru: 'Список вещей гида. Без партнёрских ссылок.', photo: 'PHOTO — Flat-lay of gear on felt' },
];
