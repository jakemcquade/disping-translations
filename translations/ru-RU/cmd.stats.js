module.exports = {
  stats: {
    name: 'Статистика',
    desc: "Посмотреть статистику Disping'а.",
    server: {
      name: '**Сервер**',
      value: '{rocket} CPU: **{cpu}%**\\n{stats} Memory: **{memory}%**\\n{clock} Uptime: **{uptime}**',
    },
    app: {
      name: '**Статистика бота**',
      value: '{globe} Servers: **{servers}**\\n{player} Users: **{users}**',
    },
  },
  feedback: {
    name: 'Отзыв',
    message: 'Сообщение',
  },
  buttons: {
    invite: 'Приглашение',
    website: 'Сайт',
    feedback: 'Отзыв',
  },
};
