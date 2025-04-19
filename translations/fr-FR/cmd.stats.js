module.exports = {
  stats: {
    name: 'Stats',
    desc: "View Disping's statistics.",
    server: {
      name: '**Server**',
      value: '{rocket} CPU: **{cpu}%**\n{stats} Memory: **{memory}%**\n{clock} Uptime: **{uptime}**',
    },
    app: {
      name: '**Bot Statistics**',
      value: '{globe} Servers: **{servers}**\n{player} Users: **{users}**',
    },
  },
  feedback: {
    name: 'Feedback',
    message: 'Message',
  },
  buttons: {
    invite: 'Invite',
    website: 'Website',
    feedback: 'Feedback',
  },
};
