module.exports = {
  none: "Keine",
  config: "Konfiguration",
  this_channel: "Aktuellen Kanal verwenden",
  updated: "{alert} • Konfiguration aktualisiert. Vielen Dank für die Verwendung von Disping.",
  limit: "Du hast die maximale Anzahl von Benutzern erreicht, die du mit Disping hinzufügen kannst. Dieses Limit ist existiert, damit jeder Benutzer Disping fair genießen kann. Danke für dein Verständnis!",
  404: "User **{username}** konnte nicht gefunden werden! Bitte stelle sicher, dass der {social} Benutzername (oder das Handle für YouTube) und nicht den Anzeigenamen eingegeben hast.",
  invalidURL: "Ungültige URL.",
  saveError: "**{alert} Fehler**\nBeim Speichern ist ein Fehler aufgetreten. Bitte konfiguriere den zu ändernden Wert erneut. Wenn du diesen Fehler weiterhin erhältst, kontaktiere bitte unseren [support]({support}). Entschuldigung für die Unannehmlichkeiten.",
  format: {
    spotify: "Ungültige URL. Spotify-URLs sind normalerweise wie folgt: **https://open.spotify.com/artist/ID_GOES_HERE**.",
    reddit: "Ungültige URL. Reddit URLs sind normalerweise wie folgt: **https://www.reddit.com/r/memes**.",
    threads: "Ungültige URL. Thread URLs sind normalerweise wie folgt: **https://threads.net/@ch1lldev**"
  },
  loading: {
    title: "Lädt...",
    desc: "Füge Benutzer hinzu und konfiguriere Disping um ihnen zu folgen. Wenn du in dieser Anzeige stecken bleibst, kontaktiere bitte unseren [support]({support}). Danke, dass du Disping verwendest!"
  },
  perms: {
    invalid: "{alert} • Du hast keine Berechtigung (MANAGE_GUILD) um die Disping-Einstellungen dieses Servers zu verwalten. Bitte kontaktiere den Serverbesitzer, um diese Berechtigung anzufordern."
  },
  buttons: {
    saveexit: "Speichern & Beenden",
    back: "Zurück",
    support: "Support",
    website: "Webseite",
    feedback: "Feedback",
    data: "Export Daten"
  },
  colors: {
    red: "Rot",
    orange: "Orange",
    yellow: "Gelb",
    green: "Grün",
    blue: "Blau",
    purple: "Lila",
    brown: "Braun",
    black: "Schwarz",
    darkgrey: "Dunkelgrau",
    white: "Weiß"
  },
  feedback: {
    name: "Feedback",
    content: "Inhalt",
    cooldown: "Du hast in letzter Zeit bereits Feedback gesendet! Bitte warte **{minutes} Minuten** und **{seconds} Sekunden**."
  },
  socialSelect: {
    title: "{folder} Soziales Netzwerk wählen",
    desc: "Wähle unten ein soziales Netzwerk aus, um loszulegen!\n\n**{warning} Warnung**: Twitter ist momentan sehr instabil und wird sich mit der Zeit verbessern."
  },
  socials: {
    dropdown: "Wähle den User, den du verwalten möchtest.",
    state: {
      true: "Verwenden",
      false: "Nicht verwenden",
      show: "Zeigen",
      hide: "Ausblenden",
      create: "Erstellen",
      noCreate: "Nicht erstellen",
      include: "Einschließen",
      exclude: "Ausschließen"
    },
    users: {
      name: "Benutzer",
      add: "Neuer Nutzer",
      none: "Keine Benutzer hinzugefügt... Klicken Sie auf das Dropdown-Menü und wählen Sie \"Benutzer hinzufügen\" um loszulegen!\n\n✨ Vergessen Sie nicht nach Hinzufügen eines Benutzers zu speichern.",
      notify: "Benachrichtigen",
      url: "URL",
      failed: "Konfiguration fehlgeschlagen"
    },
    channel: {
      name: "Kanal",
      desc: "Bitte wählen einen Kanal aus der Dropdown Liste unten.",
      placeholder: "Wähle einen Kanal aus."
    },
    role: {
      name: "Rolle",
      desc: "Bitte wählen eine Rolle aus der Dropdown Liste unten.",
      placeholder: "Wähle eine Rolle aus."
    },
    color: {
      name: "Farbe",
      desc: "Bitte wähle eine Farbe, die neben der Einbettung angezeigt werden soll, aus dem Dropdown-Menü unten aus.",
      placeholder: "Wähle eine Farbe für die Einbettung aus."
    },
    message: {
      name: "Nachricht"
    },
    advanced: {
      embed_editor: "Post-Anpasser",
      main: "> Willkommen beim Post-Anpasser. Tippen Sie auf einem Knopf um ein Teil zu aktivieren oder zu deaktivieren.",
      embed: "Einbettung",
      author: "Autor",
      thumbnail: "Vorschaubild",
      description: "Beschreibung",
      timestamp: "Zeitstempel",
      test: "Sende eine Testnachricht",
      event: "Event bei Live-Ereignis",
      crosspost: "Crossposten",
      retweets: "Retweets",
      useTFX: "TwitterFX",
      createThread: "Thread",
      button: {
        youtube: "Ansehen Knopf",
        twitter: "Anschauen Knopf",
        twitch: "Watch Button",
        reddit: "View Button",
        spotify: "Listen Button"
      }
    }
  }
};