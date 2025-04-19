module.exports = {
  none: "None",
  config: "Config",
  this_channel: "Use Current Channel",
  updated: "{alert} • 配置已更新。感谢您使用DisPing。",
  limit: "You hit the limit of users you can add using Disping. This limit is in place, so every user can enjoy the same experience using Disping. Thank you for understanding!",
  404: "User **{username}** cannot be found! Please make sure you entered the {social} username (or handle for YouTube) and not the display name.",
  invalidURL: "Invalid URL.",
  saveError: "An error occurred while saving. Please reconfigure the value you were attempting to change. If you continue to get this error, please contact [support]({support}). Sorry for the inconvenience.",
  format: {
    spotify: "Invalid URL. Spotify URLs are normally like this: **https://open.spotify.com/artist/ID_GOES_HERE**.",
    reddit: "Invalid URL. Reddit URLs are normally like this: **https://www.reddit.com/r/memes**.",
    threads: "Invalid URL. Thread URLs are normally like this: **https://threads.net/@ch1lldev**"
  },
  loading: {
    title: "等待一会儿。。。。。。。",
    desc: "Adding users and configuring Disping to watch them. If you get stuck on this screen, please contact [support]({support}). Thanks for using Disping!"
  },
  perms: {
    invalid: "{alert} • 你没有（MANAGE_GUILD）的资格来配置这个 Guild 的设定。请通知这个 Guild 的主人。"
  },
  buttons: {
    saveexit: "Save & Exit",
    back: "Back",
    support: "Support",
    website: "网站",
    feedback: "Feedback",
    data: "Export Data"
  },
  colors: {
    red: "红",
    orange: "橙",
    yellow: "黄",
    green: "绿",
    blue: "蓝",
    purple: "紫",
    brown: "棕",
    black: "黑",
    darkgrey: "Dark Grey",
    white: "白"
  },
  feedback: {
    name: "Feedback",
    content: "Content",
    cooldown: "You've already sent feedback recently! Please wait **{minutes} minutes** and **{seconds} seconds**."
  },
  socials: {
    dropdown: "选你想要使用的 User",
    state: {
      true: "Use",
      false: "Don't Use",
      show: "Show",
      hide: "Hide",
      create: "Create",
      noCreate: "Don't Create",
      include: "包括",
      exclude: "排除"
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
      name: "颜色",
      desc: "Please select a color to show on the embed from the dropdown below.",
      placeholder: "请选以下的颜色。"
    },
    message: {
      name: "Message"
    },
    advanced: {
      embed_editor: "Post Customizer",
      main: "> Welcome to the post customizer. Tap a button below to enable/disable a part on the embed.",
      embed: "Embed",
      author: "作者",
      thumbnail: "Thumbnail",
      description: "Description",
      timestamp: "时间",
      test: "Send Test Post",
      event: "Event On Live",
      crosspost: "Crosspost",
      retweets: "Retweets",
      useTFX: "TwitterFX",
      button: {
        youtube: "观看按钮",
        twitter: "观看按钮",
        twitch: "观看按钮",
        reddit: "观看按钮",
        spotify: "Listen Button"
      }
    }
  }
};