module.exports = {
  none: 'Aucun',
  config: 'Configuration',
  this_channel: 'Use Current Channel',
  updated: '{alert} • Configuration updated. Thank you for using Disping.',
  limit:
    'You hit the limit of users you can add using Disping. This limit is in place, so every user can enjoy the same experience using Disping. Thank you for understanding!',
  404: "L'utilisateur **{username}** est introuvable! Veuillez vous assurer que vous avez bien entré le nom d'utilisateur {social} (ou nom d'utilisateur YouTube) et non le nom affiché sur l'écran.",
  invalidURL: 'URL invalide.',
  saveError:
    "Une erreur est survenue lors de l'enregistrement. Veuillez reconfigurer la valeur que vous étiez en train d'essayer de modifier. Si cette erreur persiste, veuillez contactez [support]({support}). Excusez nous du désagrément.",
  format: {
    spotify:
      'URL invalide. Les URLs Spotify ressemblent normalement à ceci: **https://open.spotify.com/artist/ID_ICI**.',
    reddit: 'URL invalide. Les URLs Reddit ressemblent normalement à ceci: **https://www.reddit.com/r/memes**.',
    threads: 'Invalid URL. Thread URLs are normally like this: **https://threads.net/@ch1lldev**',
  },
  loading: {
    title: 'Chargement en cours...',
    desc: 'Adding users and configuring Disping to watch them. If you get stuck on this screen, please contact [support]({support}). Thanks for using Disping!',
  },
  perms: {
    invalid:
      "{alert} • You do not have permission (MANAGE_GUILD) to manage this server's settings for Disping. Please contact the server owner to request this permission.",
  },
  buttons: {
    saveexit: 'Save & Exit',
    back: 'Back',
    support: 'Assistance',
    website: 'Site Web',
    feedback: 'Avis',
    data: 'Export Data',
  },
  colors: {
    red: 'Rouge',
    orange: 'Orange',
    yellow: 'Jaune',
    green: 'Vert',
    blue: 'Bleu',
    purple: 'Violet',
    brown: 'Brun',
    black: 'Noir',
    darkgrey: 'Dark Grey',
    white: 'Blanc',
  },
  feedback: {
    name: 'Avis',
    content: 'Contenu',
    cooldown:
      'Vous avez déjà envoyé un commentaire récemment ! Veuillez patienter **{minutes} minutes** et **{seconds} secondes**.',
  },
  socialSelect: {
    title: '{folder} Social Select',
    desc: 'Select a social below to get started!\n\n**{warning} Warning**: Twitter is very unstable at the moment. It will improve as time goes on.',
  },
  socials: {
    dropdown: "Sélectionnez l'utilisateur que vous voulez gérer.",
    state: {
      true: 'Use',
      false: "Don't Use",
      show: 'Afficher',
      hide: 'Masquer',
      create: 'Créer',
      noCreate: 'Ne pas créer',
      include: 'Inclure',
      exclude: 'Exclure',
    },
    users: {
      name: 'Utilisateurs',
      add: 'Ajouter un Utilisateur',
      none: 'No users added... click the dropdown menu below and select "Add User" to get started!\n\n✨ Remember to save after adding a user.',
      notify: 'Notifier',
      url: 'URL',
      failed: 'La configuration a échoué',
    },
    channel: {
      name: 'Salon',
      desc: 'Veuillez sélectionner un salon dans le menu déroulant ci-dessous.',
      placeholder: 'Sélectionnez un salon à utiliser.',
    },
    role: {
      name: 'Rôle',
      desc: 'Veuillez sélectionner un rôle à mentionner dans le menu déroulant ci-dessous.',
      placeholder: 'Sélectionnez un rôle à utiliser.',
    },
    color: {
      name: 'Couleur ',
      desc: 'Please select a color to show on the embed from the dropdown below.',
      placeholder: "Sélectionnez une couleur à appliquer à l'embed.",
    },
    message: {
      name: 'Message',
    },
    advanced: {
      embed_editor: 'Post Customizer',
      main: '> Welcome to the post customizer. Tap a button below to enable/disable a part on the embed.',
      embed: 'Embed',
      author: 'Auteur',
      thumbnail: 'Miniature',
      description: 'Description',
      timestamp: 'Horodatage',
      test: 'Send Test Post',
      event: 'Événement en direct',
      crosspost: 'Crosspost',
      retweets: 'Retweets',
      useTFX: 'TwitterFX',
      createThread: 'Thread',
      button: {
        youtube: 'Touche de Lecture',
        twitter: "Bouton d'Affichage",
        twitch: 'Bouton de Lecture',
        reddit: "Bouton d'Affichage",
        spotify: 'Bouton Écouter',
      },
    },
  },
};
