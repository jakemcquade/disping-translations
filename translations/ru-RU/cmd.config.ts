module.exports = {
  none: "Отсутствует",
  config: "Настройки",
  this_channel: "Использовать текущий канал",
  updated: "{alert} • Конфигурация обновлена. Спасибо за использование Disping.",
  limit: "Вы достигли лимита каналов, которые вы можете добавить с Disping. Этот лимит существует, чтобы каждый пользователь мог наслаждаться одним и тем же опытом Disping. Спасибо за понимание!",
  404: "Пользователь **{username}** не найден! Пожалуйста, убедитесь, что вы ввели имя пользователя {social} (или Id вроде @MrBeast для YouTube), а не отображаемое имя.",
  invalidURL: "Неправильный URL-адрес.",
  saveError: "Произошла ошибка при сохранении. Пожалуйста, перенастройте значение, которое вы пытались изменить. Если вы продолжите получать эту ошибку, пожалуйста, свяжитесь с [поддержкой нажав сюда]({support}). Приносим извинения за неудобства.",
  format: {
    spotify: "Неправильный URL-адрес. Ссылки Spotify обычно похожи на это: **https://open.spotify.com/artist/ID_GOES_HERE**.",
    reddit: "Неправильный URL-адрес. Ссылки Reddit обычно похожи на это: **https://www.reddit.com/r/memes**.",
    threads: "Неправильный URL-адрес. Ссылки Threads обычно похожи на это: **https://threads.net/@ch1lldev**"
  },
  loading: {
    title: "Загрузка...",
    desc: "Добавляю пользователей и настраиваю Disping для их просмотра. Если вы застряли на этом экране, пожалуйста, свяжитесь с [поддержкой нажав сюда]({support}). Спасибо за использование Disping!"
  },
  perms: {
    invalid: "{alert} • У вас нет разрешения (MANAGE_GUILD) на управление настройками этого сервера для Disping. Обратитесь к владельцу сервера, чтобы запросить это разрешение."
  },
  buttons: {
    saveexit: "Сохранить и Выйти",
    back: "Назад",
    support: "Поддержка",
    website: "Сайт",
    feedback: "Отзыв",
    data: "Экспорт данных"
  },
  colors: {
    red: "Красный",
    orange: "Оранжевый",
    yellow: "Жёлтый",
    green: "Зелёный",
    blue: "Синий",
    purple: "Фиолетовый",
    brown: "Коричневый",
    black: "Чёрный",
    darkgrey: "Тёмно-серый",
    white: "Белый"
  },
  feedback: {
    name: "Отзыв",
    content: "Содержание",
    cooldown: "Вы недавно уже отправляли отзыв! Пожалуйста, подождите **{minutes} минут** и **{seconds} секунд** для повторного отправления отзыва."
  },
  socialSelect: {
    title: "{folder} Social Select",
    desc: "Select a social below to get started!\n\n**{warning} Warning**: Twitter is very unstable at the moment. It will improve as time goes on."
  },
  socials: {
    dropdown: "Выберите пользователя, настройки которого вы хотели бы изменить.",
    state: {
      true: "Использовать",
      false: "Не использовать",
      show: "Показать",
      hide: "Скрыть",
      create: "Создать",
      noCreate: "Отмена",
      include: "Включить",
      exclude: "Исключить"
    },
    users: {
      name: "Пользователи",
      add: "Добавить пользователя",
      none: "Пользователи не добавлены... нажмите на меню ниже и выберите «Добавить пользователя», чтобы начать!\n\n✨ Не забудьте сохранить после добавления пользователя.",
      notify: "Уведомить",
      url: "Ссылка",
      failed: "Ошибка конфигурации"
    },
    channel: {
      name: "Канал",
      desc: "Пожалуйста, выберите канал из списка ниже.",
      placeholder: "Выберите канал для использования."
    },
    role: {
      name: "Роль",
      desc: "Пожалуйста, выберите роль, которую бот будет упоминать из списка ниже.",
      placeholder: "Выберите роль для использования."
    },
    color: {
      name: "Цвет",
      desc: "Пожалуйста, выберите цвет, который будет отображен на embed из списка ниже.",
      placeholder: "Выберите цвет, который будет применён к встраиванию."
    },
    message: {
      name: "Сообщение"
    },
    advanced: {
      embed_editor: "Персонализация постов",
      main: "> Добро пожаловать в настройки постов. Нажмите кнопку ниже, чтобы включить/отключить часть встраивания.",
      embed: "Встраивание",
      author: "Автор",
      thumbnail: "Превью",
      description: "Описание",
      timestamp: "Временная метка",
      test: "Отправить тестовое сообщение",
      event: "Событие в эфире",
      crosspost: "Кросспост",
      retweets: "Ретвиты",
      useTFX: "TwitterFX",
      createThread: "Thread",
      button: {
        youtube: "Кнопка просмотра",
        twitter: "Кнопка \"Просмотр\"",
        twitch: "Кнопка просмотра",
        reddit: "Кнопка \"Просмотр\"",
        spotify: "Кнопка прослушивания"
      }
    }
  }
};