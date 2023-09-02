# Diting discord bot
![image](https://static.wikia.nocookie.net/houkai-star-rail/images/e/ec/Profile_Picture_Diting.png/revision/latest?cb=20230901015045)

<br>
A silly little thing i decided to do
 
# Commands
<br>

Question: ``Diting?`` => Answer: ``Woof!``

Question: ``Diting find @user`` => Answer: ``...Woof! @user``

Question: ``Diting find`` => Answer: ``Woof?``



# How can i use this amazing Diting bot?
<br>

in the Diting folder just make an config.json file with the following content:
```json
{
  "token": "YOUR BOT TOKEN HERE"
}
```
<br>

And ofcourse you need a bot with these permissions:

![image](https://github.com/MrSn0wy/Diting_Discord_Bot/assets/61592704/4b8cfec4-11ae-4b28-9f84-a8ffab59bc98)


<br>

you only really need ``MESSAGE CONTENT INTENT`` so if you dont want to select them all just change this from the Diting/main.js

<br>

```javascript 
const client = new Client({
   intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
```
To 

```javascript 
const client = new Client({
   intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});
```

<br>

Have a good rest of your day/night and thank you for looking at this silly project :3
