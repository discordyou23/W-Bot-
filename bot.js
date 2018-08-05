const Discord = require('discord.js');
const client = new Discord.Client();








client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('By : fawzo');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('⚙            All Commands Ready');
  console.log('⚙            Bot Ready');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "W";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  

  });

// playing
client.on('ready', () => {
client.user.setGame(`Whelp-|-Winvite-|-BY FAWZO`,'https://www.twitch.tv/v5bz');
});



   client.on('message', message => {
     if (message.content === "Whelp") {
message.author.send("اوامر البوت الاسطورية" + `  **

╔[❖══════❖]
.W BOT COMMANDS.

╔[❖══════❖]╗
   "اوامر عامة"
╚[❖══════❖]╝
❖-Wping         | يجيب لك سرعة اتصال البوت.
❖-Wsay          | يكرر كلامك.
❖-Wembed        | يكرر كلامك بطريقة اخرى.
❖-Wavatar       | يعرض لك صورتك.
╔[❖══════❖]╗
  "اوامر السيرفرات"
╚[❖══════❖]╝
❖-Wserver       | يعرض لك معلومات السيرفر.
❖-Wclear        | لمسح الشات.
❖-Wban          |لتبنيد الشخص مع السبب.
❖-Wkick         |لطرد الشخص مع السبب.
❖-Wsetchannel   |لأنشاء روم كتابي.
❖-Wsetvoice     |لأنشاء روم صوتي.
❖-Wbans         |لمعرفة كم عضو مبند.
❖-Wimage        |لتطليع صورت سيرفر.
╔[❖══════❖]╗
   "اوامر البوت"
╚[❖══════❖]╝
❖-Wbot          | لعرض معلومات البوت.
❖-Winvite       | لاضافة البوت الى سيرفرك.
❖-Whelp         |لمعرفة أوامر البوت.
╔[❖══════❖]╗
   "اوامر الألعاب"
╚[❖══════❖]╝
❖-Whack         |مقلب التهكير لتخدع بيها أصدقائك.
❖-Wلوخيروك         |GAMES.
╔[❖══════❖]╗
  "مساعدة"
╚[❖══════❖]╝ 
ايضا يوجد في البوت الترحيب بلشات وبلخاص انشأ غرفةاسمهاwelcome
وشكرا لكم
نتمنى ان يعجبكم البوت
البوت مازالا تحت التطوير

-Support server:
سيرفر الدعم : [ https://discord.gg/zfmaBAQ ]

❖BOT BY FAWZO❖


**`);
    }
});



// -ping
   client.on('message', message => {
     if (message.content === "Wping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter('W BOT ^_^')

  message.channel.sendEmbed(embed);
    }
});

// -say
var prefix = "W";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

 
var prefix = "W";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});


   client.on('message', message => {
     if (message.content === "Whelp") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter('W BOT ^_^')
  .setColor("#9B59B6")
  .addField("Done | تــــم" , "✉ | تم ارسالك في الخاص")

     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});

  
client.on("message", message => {
    var prefix = "W";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "MADE BY FAWZO W BOT"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
     if (message.content === "Wbot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});


client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("381895264195051539").send({embed:iiMo});
    }
});


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  


  if (command == "kick") {
  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك صلاحية للكيك**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يملك صلاحيات الكيك");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص المراد طرده**");
if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني طرد هذا الشخص**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`تم طرد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**المطرود:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
    
  })
}
});

client.on('message', message => {
  if (message.author.boss) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
  if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");

  message.guild.member(user).ban();

  const banembed = new Discord.RichEmbed()
  .setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**المبند:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
      if(!message.channel.guild) return message.reply('**:x: ما في منع النشر بالخاص**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** غير مسموح بنشر انفايتات هنا :x: : ! **`)
    }
}
});


client.on('message' , message => {
  if (message.author.bot) return;
    if(message.content.startsWith (prefix  + 'invite')) {
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle('اضغط هنا رابط البوت')
.setURL('https://discordapp.com/oauth2/authorize?client_id=474287612388048916&scope=bot&permissions=2146958583')
message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
    if (message.content.startsWith("Whack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });


client.on('guildMemberAdd', member => {

    let channel = member.guild.channels.find('name', 'welcome');

    let memberavatar = member.user.avatarURL

      if (!channel) return;

    let embed = new Discord.RichEmbed()

        .setColor('#00ff47')

        .setThumbnail(memberavatar)

        .addField('?? | اسمك: ',`${member}`)

        .addField('??|اطلق من دخل' , `منور السيرفر, ${member}`)

        .addField('?? |ايديك:', "**[" + `${member.id}` + "]**" )

                .addField('?|عضو رقم',`${member.guild.memberCount}`)

               

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                     

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

                                       

     .setFooter("Welcome")

        .setTimestamp()

   

      channel.sendEmbed(embed);

    });




client.on("message", (message) => {
if (message.content.startsWith("Wsetchannel")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have MANAGE_CHANNELS Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("Wsetvoice")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have MANAGE_CHANNELS Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});




client.on('message', message => {
    if (message.content.startsWith("Wbans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر`))
  .catch(console.error);
}
});






client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '475455296609845268').setName("W");
client.channels.find('id', '475455296609845268').setName("We");
client.channels.find('id', '475455296609845268').setName("Wel");
client.channels.find('id', '475455296609845268').setName("Welc");
client.channels.find('id', '475455296609845268').setName("Welco");
client.channels.find('id', '475455296609845268').setName("Welcom");
client.channels.find('id', '475455296609845268').setName("Welcome");
client.channels.find('id', '475455296609845268').setName("Welcome T");
client.channels.find('id', '475455296609845268').setName("Welcome To");
client.channels.find('id', '475455296609845268').setName("Welcome To W");
client.channels.find('id', '475455296609845268').setName("Welcome To WB");
client.channels.find('id', '475455296609845268').setName("Welcome To WBO");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT S");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT SU");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT SUP");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT SUPP");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT SUPPO");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT SUPPOR");
client.channels.find('id', '475455296609845268').setName("Welcome To WBOT SUPPORT");
  
  }, 3000);
});






const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("Wلوخيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





const credits = JSON.parse(fs.readFileSync("creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "Wcredit" || prefix + "Wcredits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "Wdaily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});




client.on("message", message => {
    const prefix = "W"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is ${message.guild.name} Photo!`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(`#00ff47`)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });







client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر يا أسطورة 
اسم العضو المحترم  ${member}
انت العضو الأسطورة رقم ${member.guild.memberCount}`) 
}).catch(console.error)
})



client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription('شكراً لك لإضافه البوت الى سيرفرك')
      guild.owner.send(embed)
});


















client.login(process.env.BOT_TOKEN);
