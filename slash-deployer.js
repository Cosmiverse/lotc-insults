require('dotenv').config();
const {REST, Routes} = require("discord.js");

const botID = process.env.CLIENT_ID;
const serverID = process.env.GUILD_ID;
const botToken = process.env.D_TOKEN;

const commands = [
    {
        name: "insult",
        description: 'Replies with an insult!',
    },
];

const rest = new REST({version: '10'}).setToken(botToken);

const slashDeployer = async () => {
    try{
        console.log("Registering slash commands...");

        await rest.put(Routes.applicationGuildCommands(botID, serverID), {body: commands})

        console.log("Registered slash commands!");
    } catch (error){
        console.error(error);
    }
}

slashDeployer();
