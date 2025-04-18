module.exports = {
  none: "None",
  config: "Config",
  this_channel: "Use Current Channel",
  updated: "{alert} • Configuration updated. Thank you for using Disping.",
  limit: "You hit the limit of users you can add using Disping. This limit is in place, so every user can enjoy the same experience using Disping. Thank you for understanding!",
  404: "User **{username}** cannot be found! Please make sure you entered the {social} username (or handle for YouTube) and not the display name.",
  invalidURL: "Invalid URL.",
  saveError: "**{alert} Error Occured**\nSorry, it seems an error occurred while saving. Please reconfigure the value you were attempting to change. If you continue to get this error, please contact [support]({support}). Sorry for the inconvenience.",
  format: {
    spotify: "Invalid URL. Spotify URLs are normally like this: **https://open.spotify.com/artist/ID_GOES_HERE**.",
    reddit: "Invalid URL. Reddit URLs are normally like this: **https://www.reddit.com/r/memes**.",
    threads: "Invalid URL. Thread URLs are normally like this: **https://threads.net/@ch1lldev**"
  },
  loading: {
    title: "Loading...",
    desc: "Adding users and configuring Disping to watch them. If you get stuck on this screen, please contact [support]({support}). Thanks for using Disping!"
  },
  perms: { invalid: "{alert} • You do not have permission (MANAGE_GUILD) to manage this server's settings for Disping. Please contact the server owner to request this permission." },
  buttons: {
    saveexit: "Save & Exit",
    back: "Back",
    support: "Support",
    website: "Website",
    feedback: "Feedback",
    data: "Export Data"
  },
  colors: {
    red: "Red",
    orange: "Orange",
    yellow: "Yellow",
    green: "Green",
    blue: "Blue",
    purple: "Purple",
    brown: "Brown",
    black: "Black",
    darkgrey: "Dark Grey",
    white: "White"
  },
  feedback: {
    name: "Feedback",
    content: "Content",
    cooldown: "You've already sent feedback recently! Please wait **{minutes} minutes** and **{seconds} seconds**."
  },
  socialSelect: {
    title: "{folder} Social Select",
    desc: "Select a social below to get started!\n\n**{warning} Warning**: Twitter is very unstable at the moment. It will improve as time goes on."
  },
  socials: {
    dropdown: "Select the user you would like to manage.",
    state: {
      true: "Use",
      false: "Don't Use",
      show: "Show",
      hide: "Hide",
      create: "Create",
      noCreate: "Don't Create",
      include: "Include",
      exclude: "Exclude"
    },
    users: {
      name: "Users",
      add: "Add User",
      none: "No users added... click the dropdown menu below and select \"Add User\" to get started!\n\n✨ Remember to save after adding a user.",
      notify: "Notify",
      url: "URL",
      failed: "Configuration Failed"
    },
    channel: {
      name: "Channel",
      desc: "Please select a channel to use from the dropdown below.",
      placeholder: "Select a channel to use."
    },
    role: {
      name: "Role",
      desc: "Please select a role to mention from the dropdown below.",
      placeholder: "Select a role to use."
    },
    color: {
      name: "Color",
      desc: "Please select a color to show on the embed from the dropdown below.",
      placeholder: "Select a color to apply to the embed."
    },
    message: {
      name: "Message"
    },
    advanced: {
      embed_editor: "Post Customizer",
      main: "> Welcome to the post customizer. Tap a button below to enable/disable a part on the embed.",
      embed: "Embed",
      author: "Author",
      thumbnail: "Thumbnail",
      description: "Description",
      timestamp: "Timestamp",
      test: "Send Test Post",
      event: "Event On Live",
      crosspost: "Crosspost",
      retweets: "Retweets",
      useTFX: "TwitterFX",
      createThread: "Thread",
      button: {
        youtube: "Watch Button",
        twitter: "View Button",
        twitch: "Watch Button",
        reddit: "View Button",
        spotify: "Listen Button"
      }
    }
  }
};