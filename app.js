require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds
    ],
});

client.on("ready", () =>{
    console.log("LOTC Insulter is Online.");
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log("Throwing insult!");
    if (interaction.commandName === "insult"){
        interaction.reply("Insult goes here!");
    }
})

client.login(process.env.D_TOKEN);

