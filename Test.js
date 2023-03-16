(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });

    await s4d.client.login('MTA4NTc1NTMwMDM3NzgwNDkzMQ.Gau4i5.RCW8RaZ62I8aJ5Fxk8foy_j8REUf08hEd3FaHg').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '/Beta Public') {
            (s4dmessage.member).roles.add((s4dmessage.member).guild.roles.cache.find((role) => role.id === 'Beta Tester' || role.name === 'Beta Tester' || '@' + role.name === 'Beta Tester'));
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: null,
                    image: {
                        url: null
                    },

                    description: 'You Are Now A Beta Tester!',
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }

                }
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '/Beta Private') {
            s4dmessage.channel.send(String('Waiting For Authorization By Admin'));
            s4dmessage.react('👍');
            if ((rMember).hasPermission('ADMINISTRATOR')) {
                (s4dmessage.member).roles.add((s4dmessage.member).guild.roles.cache.find((role) => role.id === 'Private Beta Tester' || role.name === 'Private Beta Tester' || '@' + role.name === 'Private Beta Tester'));
                s4dmessage.channel.send({
                    embed: {
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },

                        description: 'You Are Now A Private Beta Tester!',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }

                    }
                });
            }
        }

    });


    return s4d;
})();
