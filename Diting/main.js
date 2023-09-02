const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs")

const client = new Client({
   intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();
client.commandArray = [];


const config = require("./config.json");
const token = config.token;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
const prefix = '|';

client.handleCommands = async() => {
  const commandFolders = fs.readdirSync("./Diting/commands");
  for (const folder of commandFolders) {
    const commandFiles = fs
    .readdirSync(`./Diting/commands/${folder}`)
    .filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./Diting/commands/${folder}/${file}`);
      client.commands.set(command.data.name, command);
      client.commandArray.push(command, command.data.toJSON());
      console.log(`${command.data.name} has been detected and loaded :D`);
    }
  }
}

client.on("messageCreate", (message) => {
  if (message.content.startsWith("Diting find")) {
    const mentionedUser = message.mentions.users.first();
    console.log(`Received a message: ${message.content} send by ${message.author}`);
    if (mentionedUser) {
      message.reply(`...Woof! ${mentionedUser}`);
    } else {
      message.reply('Woof?');
    }
  }

  if (message.content.startsWith("Diting?")) {
    console.log(`Received a message: ${message.content} send by ${message.author}`);
    message.reply("Woof!");
  }
  
});

client.login(token);