module.exports = {
  none: "无",
  config: "配置",
  this_channel: "使用当前频道",
  updated: "{alert} • 配置已更新。感谢您使用 Disping。",
  limit: "你已达到可通过 Disping 添加用户的上限。设置此限制是为了让每位用户都能获得一致的使用体验。感谢理解！",
  404: "找不到用户 **{username}**！请确认你输入的是 {social} 用户名（YouTube 请输入 handle），而不是显示名称。",
  invalidURL: "无效的 URL。",
  saveError: "保存时发生错误。请重新配置你尝试修改的值。如果仍然出现此错误，请联系 [支持]({support})。给你带来不便，敬请谅解。",
  format: {
    spotify: "无效的 URL。Spotify 链接通常如下：**https://open.spotify.com/artist/ID_GOES_HERE**。",
    reddit: "无效的 URL。Reddit 链接通常如下：**https://www.reddit.com/r/memes**。",
    threads: "无效的 URL。Threads 链接通常如下：**https://threads.net/@ch1lldev**"
  },
  loading: {
    title: "加载中...",
    desc: "正在添加用户并配置 Disping 以监控他们。如果你长时间停留在此界面，请联系 [支持]({support})。感谢使用 Disping！"
  },
  perms: {
    invalid: "{alert} • 你没有权限（MANAGE_GUILD）来管理此服务器的 Disping 设置。请联系服务器所有者申请此权限。"
  },
  buttons: {
    saveexit: "保存并退出",
    back: "返回",
    support: "支持",
    website: "网站",
    feedback: "反馈",
    data: "导出数据"
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
    darkgrey: "深灰",
    white: "白"
  },
  feedback: {
    name: "反馈",
    content: "内容",
    cooldown: "你最近已经发送过反馈了！请等待 **{minutes} 分钟** 和 **{seconds} 秒**。"
  },
  socials: {
    dropdown: "请选择你想要管理的用户。",
    state: {
      true: "使用",
      false: "不使用",
      show: "显示",
      hide: "隐藏",
      create: "创建",
      noCreate: "不创建",
      include: "包含",
      exclude: "排除"
    },
    users: {
      name: "用户",
      add: "添加用户",
      none: "尚未添加任何用户... 点击下方下拉菜单并选择\"添加用户\"即可开始！\n\n✨ 添加用户后请记得保存。",
      notify: "通知",
      url: "URL",
      failed: "配置失败"
    },
    channel: {
      name: "频道",
      desc: "请从下方下拉菜单中选择要使用的频道。",
      placeholder: "选择要使用的频道。"
    },
    role: {
      name: "身份组",
      desc: "请从下方下拉菜单中选择要提及的身份组。",
      placeholder: "选择要使用的身份组。"
    },
    color: {
      name: "颜色",
      desc: "请从下方下拉菜单中选择在嵌入消息中显示的颜色。",
      placeholder: "选择要应用到嵌入消息的颜色。"
    },
    message: {
      name: "消息"
    },
    advanced: {
      embed_editor: "帖子自定义",
      main: "> 欢迎使用帖子自定义功能。点击下方按钮可启用/禁用嵌入消息中的某个部分。",
      embed: "嵌入",
      author: "作者",
      thumbnail: "缩略图",
      description: "描述",
      timestamp: "时间戳",
      test: "发送测试帖子",
      event: "直播时触发",
      crosspost: "交叉发布",
      retweets: "转推",
      useTFX: "TwitterFX",
      button: {
        youtube: "观看按钮",
        twitter: "查看按钮",
        twitch: "观看按钮",
        reddit: "查看按钮",
        spotify: "收听按钮"
      }
    }
  }
};
