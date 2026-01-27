export const GAMES_DATA = [
  {
    id: 'tic-tac-toe',
    title: 'Крестики-нолики',
    image: '/tic-tac-toe.png',
    path: '/games/tic-tac-toe',
    sections: [
      {
        subtitle: 'Об игре',
        text: 'PurePlay представляет классические «Крестики-нолики» на поле 3х3. Это стратегическая игра, где победа зависит от вашей внимательности. Цель — собрать три своих знака в один ряд.',
      },
      {
        subtitle: 'Правила игры',
        list: [
          'Игроки ходят по очереди, заполняя свободные клетки.',
          'Побеждает тот, кто первым выстроит линию по вертикали, горизонтали или диагонали.',
          'Если поле заполнено и линий нет — объявляется ничья.',
        ],
      },
      {
        subtitle: 'Особенности режима',
        text: 'Вы можете играть с другом на одном устройстве или бросить вызов ИИ. Для компьютера доступно два уровня сложности: Нормальный и Тяжелый (на базе алгоритма Минимакс). Выбор символа "O" дает вам право первого хода.',
      },
    ],
    defaultSettings: {
      mode: 'pve',
      difficulty: 'medium',
      side: 'O',
    },
    settingsSchema: [
      {
        id: 'mode',
        label: 'Режим игры',
        type: 'radio',
        options: [
          {
            value: 'pve',
            label: 'Против бота',
          },
          {
            value: 'pvp',
            label: 'Против друга',
          },
        ],
      },
      {
        id: 'difficulty',
        label: 'Сложность бота',
        type: 'radio',
        showIf: (currentSettings) => currentSettings.mode === 'pve',
        options: [
          {
            value: 'medium',
            label: 'Средняя',
          },
          {
            value: 'hard',
            label: 'Сложная',
          },
        ],
      },
      {
        id: 'side',
        label: 'Играть за',
        type: 'radio',
        options: [
          {
            value: 'X',
            label: 'Крестик',
          },
          {
            value: 'O',
            label: 'Нолик',
          },
        ],
      },
    ],
  },
  {
    id: 'snake',
    title: 'Змейка',
    image: '/snake.png',
    path: '/games/snake',
  },
]