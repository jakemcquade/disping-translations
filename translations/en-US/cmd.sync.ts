module.exports = {
    sync: {
        title: "**✨ Sync**",
        desc: "Connect Disping to your YouTube account. Doing so allows you to gain the following benefits:\n> - **Roles**. If setup by the server admins, you may be able to gain a custom role for being a subscriber.\n\n**Get Started**\n> Press the \"Link\" button below and follow the instructions.\n> Once you obtain your access code, click the \"Enter Code\" button below and paste it in. After, please tap the \"Submit\" button.",
        submit: {
            title: "Sync",
            code: "Authorization Code"
        },
        success: {
            title: "**✨ Sync Successful**",
            desc: "Congrats, you're now connected to Disping!"
        },
        failed: {
            title: "**😓 Sync Unsuccessful**",
            desc: "Disping failed to sync with your account. Please re-run the command, and enter a new auth code.\n\n✨ **Helpful Tip**: The auth code expires after 15 minutes.",
            noroles: "**Sorry...**\nIt seems this guild doesn't have any roles you can claim for being subscribed. Check back later or ask the Server Admins.",
            nologin: "**Sorry...**\nYou cannot run this command until you sign in. Please run /sync account."
        }
    },
    stats: {
        title: "**✨ Track Stats**",
        failed: "Sorry, it seems **@{username}** does not exist. There is a small chance this could be an API issue, please check spelling and try again later."
    },
    buttons: {
        link: "Link",
        submit: "Submit"
    }
};