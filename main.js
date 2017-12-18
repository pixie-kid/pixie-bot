const Discord = require('discord.js');
const client =new Discord.Client();
const prefix= 'p!';
const { RichEmbed } = require('discord.js');
const embed = new RichEmbed();
const snekfetch = require("snekfetch");





//start

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} servers!`);
client.user.setGame(`p!help || ${client.guilds.size} servers`);
  console.log(client.user.id);
  client.guilds.forEach(guild => {
console.log(guild.name);
    
  })
});


client.on('message', msg =>{

const args =msg.content.slice(prefix.length).split(/ +/);
const command =args.shift().toLowerCase();

 if(msg.author.bot){
   return;
 }
 else if(msg.content ===(prefix)+'ping' ) {
   var pingtime =Math.floor(client.ping);
  msg.channel.send(`**Pong! **:ping_pong:  **Ping is  ${pingtime}**`);
}
else if(msg.content ===(prefix)+'hi' ) {
  msg.channel.send('**Hi** :wave: ');
}


else if(msg.content.startsWith((prefix)+'dogfacts')){
  var df = ['Dogs have sweat glands in between their paws.','The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan.','The Basenji is the world’s only barkless dog','At the end of WWI, the German government trained the first guide dogs for war-blinded soldiers.']

  var dfAnswer = df[Math.floor(Math.random()*df.length)];
  msg.reply(dfAnswer.toString());
}

else if(msg.content.startsWith((prefix)+'catfacts')){
  var cf = ['A group of cats is called a “clowder.”','Cats make about 100 different sounds. Dogs make only about 10','A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance','The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.','Cats are so awesome']

  var cfAnswer = cf[Math.floor(Math.random()*cf.length)];
  msg.reply(cfAnswer.toString());
}

else if(msg.content.startsWith((prefix)+'coinflip')){
  var coinc =['Heads','Tails']
var coin = coinc[Math.floor(Math.random()*coinc.length)];
msg.reply('flipped a coin and it is  '+coin.toString());
  
}
  

else if(msg.content===(prefix)+'info'){
  msg.channel.send(

    new Discord.RichEmbed()
    .setTitle("INFO")
    .setColor('RANDOM')
    .addField("Name","Pixie#9641",true)
    .addField("Owner","PixieKiddo✌ #3727",true)
    .addField("Servers",client.guilds.size,true)
    .addField("Version","1.0.0",true)
    .addField("DESCRIPTION","I am a bot made for entertainment.STILL IN BETA :smiley:",true)
    .addField("USERS",client.users.size,true)
    .addField("HELP",'``p!help``',true)
    .addField('Prefix',`${prefix}`,true)
    .addField("Official server",`[server invite](https://discord.gg/SytYZpr)`)
    .addField("Pls give me a upvote if you like me",`[link]( https://discordbots.org/bot/376722743715954689)`)
    .setFooter("requested by "+msg.author.username, msg.author.avatarURL)
  );
 
}


else if (msg.content ===(prefix)+'uptime') {
  
  if(msg.author.id!='364360872614952970')  {msg.channel.send('Only the bot owner can do this command :no_entry:'); return;}
  else{
  let uptime = client.uptime;

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let notCompleted = true;

  while (notCompleted) {

      if (uptime >= 8.64e+7) {

          days++;
          uptime -= 8.64e+7;

      } else if (uptime >= 3.6e+6) {

          hours++;
          uptime -= 3.6e+6;

      } else if (uptime >= 60000) {

          minutes++;
          uptime -= 60000;

      } else if (uptime >= 1000) {
          seconds++;
          uptime -= 1000;

      }

      if (uptime < 1000)  notCompleted = false;

  }

 msg.channel.send(`**Uptime:\n\nDays: \`${days}\` \nHours: \`${hours}\` \nMinutes: \`${minutes}\` \nSeconds: \`${seconds}\`**`);};

}
else if(msg.content===(prefix)+'invite'){
  msg.reply('i have send it in the **DM** ');
  msg.author.send('**HERE YOU GOOO** https://discordapp.com/oauth2/authorize/?permissions=268545046&scope=bot&client_id=376722743715954689')
}

else if (msg.content===(prefix)+'dice'){
  var dice =['1','2','3','4','5','6']
  var dicer =dice[Math.floor(Math.random()*dice.length)];
  msg.reply('rolled a :game_die:  and the result is '+dicer);
}

 else if(msg.content===(prefix)+'avatar'){
        let avataruser=msg.author.displayAvatarURL;
                       msg.channel.send(
                        new Discord.RichEmbed()
                        .setTitle("AVATAR")
                        .setColor('#C0C0C0')
                        .setImage(avataruser)
                        .setFooter("requested by "+msg.author.tag)
                       );
                        
                        }
                        
    else if(msg.content.startsWith(prefix+'avatar')) {
                            let member = msg.mentions.members.first() || msg.member;
                            let memberav=member.user.avatarURL;
                            if(memberav===null){
                              msg.channel.send("The user dont have a avatar");
                              return;
                            }
                            msg.channel.send(
                                new Discord.RichEmbed()
                                .setTitle("AVATAR")
                                .setColor('#C0C0C0')
                                .setImage(memberav)
                                .setFooter("requested by "+msg.author.tag)
                            );
                          }
                             


  else if(msg.content===(prefix)+'meme') {
   
    var memes=["https://cdn.discordapp.com/attachments/380758425493176331/381133359331540994/IMG_20171117_193127.jpg",
    "https://cdn.discordapp.com/attachments/380758425493176331/381133680317300746/IMG_20171102_184348.jpg",
    "https://cdn.discordapp.com/attachments/380758425493176331/381133680762159104/FB_IMG_1510517360603.jpg",
    "https://cdn.discordapp.com/attachments/380758425493176331/381133681261150208/FB_IMG_1510489202551.jpg",
    "https://cdn.discordapp.com/attachments/380758425493176331/381133681261150210/Screenshot_20171111-231640.png",
    "https://cdn.discordapp.com/attachments/270195186846531585/375657514680844289/DNaJJDSV4AAMttn.jpg",
    "https://jokideo.com/wp-content/uploads/meme/2014/04/Adult-meme---Scientists-have-discovered.jpg",
    "https://pbs.twimg.com/media/DO6EN55WsAEb-Rs.jpg",
    "https://pbs.twimg.com/media/DO4xwBPX0AAHs0X.jpg",
    "https://pbs.twimg.com/media/DO4kAIyXUAAozT-.jpg",
    "https://pbs.twimg.com/media/DO1jmbwX0AEHUdX.jpg",
    "https://pbs.twimg.com/media/DOzFlcuW0AA81Ad.jpg",
    "https://pbs.twimg.com/media/DOycWnxVwAA37LJ.jpg",
    "https://pbs.twimg.com/media/DOw8IHCXcAAldFD.jpg",
    "https://pbs.twimg.com/media/DOuk8n0XkAAzNnN.jpg",
    "https://images-cdn.9gag.com/photo/avrzLN5_700b.jpg",
    "http://res.cloudinary.com/nextermedia/image/fetch/w_728/http://gabworthy.com/wp-content/uploads/2015/07/Dont-like-my-sarcasm-meme.jpg",
    "http://quotespill.com/wp-content/uploads/2017/10/9a7f9b1e437b39b6dd1972700fbebc939793228b3b0e31d900713cdfcd1e2b78-min-300x295.jpg",
    "http://s.quickmeme.com/img/13/13c136ff3d2bacd0f25e6d67420a8da7135cba9f2d268a14bdf03e797f890dd0.jpg",
    "https://fthmb.tqn.com/I0AhpJFS9kVD-gpNqG782SEOWDo=/768x0/filters:no_upscale()/trump-supporters-stupid-56b6de965f9b5829f835018e.jpg",
    "https://i.imgflip.com/ukvtb.jpg",
    "http://i0.kym-cdn.com/photos/images/original/001/165/960/049.jpg",
    "http://www.dumpaday.com/wp-content/uploads/2012/12/bad-kid-meme-funny-pictures.jpg",
    "https://funnymemes.co/memes/Full_blown_lobsters_Funny_Meme.jpg",
    "https://i.imgur.com/iMXsX2T.jpg",
    "http://www.pmslweb.com/the-blog/wp-content/uploads/2013/11/35-turning-right-in-5-miles-grandma-meme.jpg",
    "https://heavyeditorial.files.wordpress.com/2013/07/m11.jpg?quality=65&strip=all",          
    "http://www.wastedpotatoes.com/subcategories/2016/video_game_memes/image/video_game_memes34.jpg"]

    var memesans = memes[Math.floor(Math.random()*memes.length)];
    var memesanswer = memesans.toString();
     msg.channel.send(
    new Discord.RichEmbed()
    .setTitle("Here is your meme!")
    .setColor("RANDOM")
    .setImage(memesanswer)
    .setFooter("Meme requested by: "+msg.author.tag));


  }

 else if (msg.content===(prefix)+'server'){
    msg.channel.send(new Discord.RichEmbed()
    .setTitle('**SERVER INFO **')
    .setColor('RANDOM')
    .addField("Server Name",`${msg.guild.name}`,true)
    .addField("Members",`${msg.guild.members.size}`,true)
    .addField("Owner",`${msg.guild.owner}`,true)
    .addField("Created At",`${msg.guild.createdAt}`,true)
    .setFooter("requested by "+msg.author.username, msg.author.avatarURL)
  )
  }
});





client.on('message', msg => {
  
if(msg.author.bot){
  return;
}
 else if(msg.content ===((prefix)+'8ball')) {

  msg.reply('the proper usage is \n ``p!8ball question`` \n Example:``p!8ball is earth round?`` ');
  return;
 }

 else if (msg.content.startsWith(prefix+'8ball')) {
  var answers = ['Without a doubt' , 'Yes, definitely ','You may rely on it ','As I see it, yes ','Most likely','Outlook good','Reply hazy try again ','Ask again later ','Cannot predict now ','My reply is no ','Outlook not so good ','Very doubtful']
  
  var answer = answers[Math.floor(Math.random()*answers.length)];
  msg.reply(answer.toString());
 }
  
 else if(msg.content.startsWith(prefix+'say')) {

   const psay = "p!say";
   const arg = msg.content.slice(psay.length).split(/ +/);
   const argsay = arg .join(" ");
   msg.channel.send(argsay);
 }

 else if(msg.content.startsWith(prefix+'smilyfy')) {

  const psmilyfy= "p!smilyfy"
  const argsmili = msg.content.slice(psmilyfy.length).split(/ +/);
  const argsmilify = argsmili.join(":smile: ");
  msg.channel.send(argsmilify);
 }

 else if(msg.content.startsWith(prefix+'ascii') ) {

  var figlet = require('figlet');
  let data = msg.content.split(" ").slice(1).join(" ");
  if(!data) return msg.reply(":no_entry:**You need to enter a text plss !**:no_entry:");
msg.delete();
  figlet(`${data}`, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    msg.channel.send(`\`\`\`\n${data}\`\`\``);
  })
 }

   if(msg.content===prefix+"cat"){
        
        snekfetch.get("https://random.cat/meow/").then(r => {
            msg.channel.send(
           new Discord.RichEmbed()
           .setTitle("MEOOOOWWW")
           .setColor('RANDOM')
           .setImage(r.body.file)
              )})};
        
                  if(msg.content===prefix+"dog"){
                
                snekfetch.get("https://random.dog/woof.json/").then(r => {

                if(r.body.url.includes('mp4')){
                    msg.channel.send("**THERE WAS AN ERROR.PLEASE TRY AGAIN** ");
                    return;
                }
                else{
                    msg.channel.send(
                        new Discord.RichEmbed()
                        .setTitle("WOOOOFF")
                        .setColor('RANDOM')
                        .setImage(r.body.url)
                         );
                        
                    }})};
  
  if(msg.content.startsWith(prefix+"eval")){
        if(msg.author.id!="364360872614952970"){
            msg.channel.send(":no_entry: **YOU ARE NOT THE OWNER OF THIS BOT** :no_entry:");
            return;
        }
        else{
        const evalprefix = "p!eval";
      var evalto = msg.content.slice(evalprefix.length);
       var toeval = evalto.split(1).join(" ");
       
       var evaled = eval(toeval);
          if(evaled!=("undefined")){       msg.channel.send(
           new Discord.RichEmbed()
           .setTitle("EVAL")
           .setColor("RANDOM")
           .addField("**INPUT**\n\n",`${toeval}`)
            .addBlankField()
            .addField("**OUTPUT**\n\n",`${evaled}`)
            
            
          
       )}
          else{
            msg.channel.send("eroor");
          }
    } 
        
  
    };     
});

client.on('message',msg =>{
    if(msg.author.bot){
      return;
    }
   else if (msg.content===prefix+'help') {
    msg.channel.send('i have send it in the **DM** :mailbox_with_mail: '+msg.author);
    msg.author.send("**COMMANDS** \n ***start the commands with ``p!`` ***\n **__ping__** -bot will respond with pong\n **__hi__** -bot will respond with Hi\n**__8ball__** -bot will give a response to the question.``EGS:p!8ball IS pixie awesome``\n **__dogfacts__**-bot will give one fact on dogs\n **__catfacts__** -bot will give one fact on cats\n **__coinflip__** -bot will flip a coin and give the result\n **__info__** -bot will give the info\n **__dice__** - bot will roll a dice and give the result\n **__invite__** -bot will give you invite link\n **__dice__** -bot will roll a dice and give theresults\n **__avatar__** -bot replies with the avatar of the user\n **__help__** -shows the commands by sending to your dm\n **__say__** -type ``p!say hi``u can replace hi with anything and the bot will repeat it\n **__smilyfy__** -``usage:p!smilify yo yo`` replace yo yo to anything and see it for yourself\n **__ascii__** -bot replies with an ascii formed version of the text supplied\n **__memes__** -i dont wanna explain this right\n **__server__** - Shows the server info.\n **__whatsmyid__** - shows your id\n **__dog__**-shows random dog pics\n **__cat__**-shows random cat pics"
    )
    msg.author.send("**MODERATION COMMANDS**\n **__purge__** - deletes the amount of msgs you enter.Requires manage messages permission.\n **__createchanneltext__** creates a text channel.requires manage channels permission.\n **__createchannelvoice__** creates a voice channel.requires manage channels permission.\n **__kick__** - kick the person mentioned.Requires kick members permission.usage `p!kick (member) (reason)`\n **__ban__** - bot will ban the user mentioned.Requires the ban members permission usage `p!ban (member) (reason)`\n **Join the official server**-https://discord.gg/SytYZpr\n **Pls give me a upvote in** https://discordbots.org/bot/376722743715954689") 
  } 
});
client.on('guildMemberAdd',member => {
  
    const channel = member.guild.channels.find('name', 'hi-bye');
  
    if (!channel) return;
    else{
    channel.send(`Welcome to **${member.guild}**, ${member.user.username}.Have an **AWESOME** stay here :wave:`);
       if(!member.bot){
         return;
       }
      else{ member.send("Welcome to the server.Have a nice day :thumbsup:");}
    }
  
        const rolename =member.guild.roles.find('name','PROGRAMMERS');
      if(!rolename){
        return;
      }
       member.addRole(rolename);
  
  


 
});
client.on('guildMemberAdd', member=>{
   const officialchannel = member.guild.channels.find('name',"join-leave");
  const membername=member.user.username;
  
  if(!officialchannel)return console.log('no channel found');
  else if(member.guild.id=="390144984830967809"){officialchannel.send(
   new Discord.RichEmbed()
   .setTitle("User get")
   .setColor('#D3D3D3')
   .setDescription(`Welcome to the server **${membername}**.Take a minute to read the #rules.Have fun....`));}
   else{
     return;
   }
  
  
  
});

  client.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.find('name', 'hi-bye');
    if (!channel) return;
    else{
    channel.send(`**Ho you are leaving ${member.user.username}.:wave:**`);
    }
    
    
  

  });
client.on('guildMemberRemove',member=>{
   const officialchannel = member.guild.channels.find('name',"join-leave");
  const membername=member.user.username;
  
  if(!officialchannel)return console.log('no channel found');
  else if(member.guild.id=="390144984830967809"){officialchannel.send(
   new Discord.RichEmbed()
   .setTitle("User left")
   .setColor('#D3D3D3')
   .setDescription(`**${membername}** has left the server.`));}
   else{
     return;
   }
});

  client.on('message',msg => {
    if(msg.author.bot){
      return;
    }
   else if(msg.content===prefix+'whatsmyid'){
     msg.reply(`**YOUR ID IS ** ${msg.author.id}`)
   }
    
  });

  client.on('message',msg=>{

    let cont = msg.content.slice(prefix.length).split(" ");
    let argspurge = cont.slice(1);
    

    if(msg.author.bot){
      return;
    }
    else if(msg.content.startsWith(prefix+'purge')){

    
      msg.delete();    

      async function purge() {
     
         
        if(!msg.member.hasPermission("MANAGE_MESSAGES")){
          msg.reply("You need the Manage Messages permission ");
         
          return;
        }

        if(isNaN(argspurge[0])){
          msg.channel.send(`Please use a number.\n ``USAGE: ${prefix}purge (amount)```);

          return;
        }
        
     
       
        const fetched = await msg.channel.fetchMessages({limit: argspurge[0]});
        console.log(fetched.size+' messages found.deleting.........');
        

        msg.channel.bulkDelete(fetched)
        .catch(error => msg.channel.send(`Error: ${error}`));
    
        }
      
      purge();
      
     
  }

    else if(msg.content.startsWith(prefix+'createchanneltext')){

      const prefixcreate ="p!createchanneltext";
      if(!msg.member.hasPermission("MANAGE_CHANNELS")){
        msg.channel.send("You require the manage channels permissions");
        return;
      }
      else {
        var argscreaten= msg.content.slice(prefixcreate.length).split("");
        var argscreatenam = argscreaten.slice(1);
        var argscreatena=argscreatenam.join("");
        var argscreatename = argscreatena.toLowerCase();
        console.log(argscreatename);
        msg.guild.createChannel(name = `${argscreatename} `, type ="text");
      }
    }

    else if(msg.content.startsWith(prefix+'createchannelvoice')){
      
            const prefixcreate ="p!createchannelvoice";
            if(!msg.member.hasPermission("MANAGE_CHANNELS")){
              msg.channel.send("You require the manage channels permissions");
              return;
            }
            else {
              var argscreaten= msg.content.slice(prefixcreate.length).split("");
              var argscreatenam = argscreaten.slice(1);
              var argscreatename=argscreatenam.join("");
              
              console.log(argscreatename);
              msg.guild.createChannel(name = `${argscreatename} `,type ="voice");
            }
           
       }
    else if(msg.content.startsWith(prefix+"kick")){
       
      var memberkick = msg.mentions.members.first();
      var prefixmentioned = prefix+"kick"+memberkick;
      var kickreason = msg.content.slice(prefixmentioned.length);
      var reasonforkick = kickreason.slice(0);
     
      console.log(reasonforkick);
      if(!msg.member.hasPermission("KICK_MEMBERS")){
          msg.channel.send("You require the Kick Members permission");
          return;
      }
      if(!memberkick){
        msg.channel.send("pls mention the member.");
        return;
      }
      if(memberkick.user.id==="376722743715954689"){
        msg.channel.send("you cant kick me with this command lol");
        return;
      }
       var channelmodlog = msg.guild.channels.find("name","mod-log");
      if(!channelmodlog){
        msg.channel.send("NO channel #mod-log found so  no log will be posted by me");
      }
      
      
      memberkick.kick(reasonforkick);
    channelmodlog.send(`**ACTION : KICK**\n **USER : ${memberkick}**\n **REASON : ${reasonforkick}**\n **RESPONSIBLE MOD : ${msg.author.tag}**`);      
   

      
    }
   
    
  
    else if(msg.content.startsWith(prefix+"ban")){
      
     var memberban = msg.mentions.members.first();
     var prefixmentionedban = prefix+"ban"+memberban;
     var banreason = msg.content.slice(prefixmentionedban.length);
    
     console.log(banreason);
     if(!msg.member.hasPermission("BAN_MEMBERS")){
         msg.channel.send("You require the BAN MEMBERS permission");
         return;
     }
     if(!memberban){
       msg.channel.send("pls mention the member.");
       return;
     }
     if(memberban.user.id==="376722743715954689"){
      msg.channel.send("you cant kick me with this command lol");
      return;
    }
     var channelmodlogban = msg.guild.channels.find("name","mod-log");
    if(!channelmodlogban){
      msg.channel.send("NO channel #mod-log found so  no log will be posted by me");
    }
    
    
     memberban.ban(banreason);
          channelmodlogban.send(`**ACTION : BAN**\n **USER : ${memberban}**\n **REASON : ${banreason}**\n **RESPONSIBLE MOD : ${msg.author.tag}**`);      

   }
  


});

client.login(urbottokenhere);
