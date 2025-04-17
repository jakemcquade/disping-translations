module.exports = {
  sync: {
    title: "**✨ Sync**",
    desc: "Verbinde Disping mit deinem YouTube-Konto. Dies ermöglicht dir folgende Vorteile:\n> - **Rollen**. Wenn sie von den Serveradministratoren eingerichtet werden, kannst du eine benutzerdefinierte Rolle als Abonnent erhalten.\n\n**So geht es**\n> Drücke den \"Link\"-Knopf unten und folge den Anweisungen.\n> Sobald du deinen Zugangscode erhalten hast, klicke unten auf \"Code Eingeben\", und füge ihn ein. Danach klicke bitte auf \"Absenden\".",
    submit: {
      title: "Synchronisieren",
      code: "Autorisierungscode"
    },
    success: {
      title: "**✨ Synchronisierung Erfolgreich**",
      desc: "Glückwunsch, du bist jetzt mit Disping verbunden!"
    },
    failed: {
      title: "**😓 Synchronisieren erfolglos**",
      desc: "Disping konnte nicht mit deinem Konto synchronisiert werden. Bitte führe den Befehl erneut aus und gib einen neuen Authentifizierungscode ein.\n\n✨ **Hilfreicher Tipp**: Der Authentifizierungscode läuft nach 15 Minuten ab.",
      noroles: "**Entschuldigung...**\nEs scheint, als hättte dieser Server keine Rollen, die du für das Abonnieren bekommen kannst. Versuche es später erneut oder frage die Server-Admins.",
      nologin: "**Entschuldigung...**\nDu kannst diesen Befehl nicht ausführen, bis du dich angemeldet hast. Bitte führe `/sync account` aus."
    }
  },
  stats: {
    title: "**✨ Trackstatistik**",
    failed: "Leider scheint **@{username}** nicht zu existieren. Es besteht eine geringe Chance, dass dies ein API-Problem sein könnte, bitte überprüfe die Schreibweise und versuche es später erneut."
  },
  buttons: {
    link: "Link",
    submit: "Absenden"
  }
};