'use strict';
const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "De!";
const token = "ODA3MzczOTgyNDExNTIyMDgw.YB3DnQ.Zjk82JnKFOY65DxMuZDmo33zhzg";

const mysql = require("mysql");
"Code 5";
var version = '1.3.1';

let lastUser = Discord.User = '';
var f;
var verwarnungen2;
var verwarnungen;
var vb;
var deleteTime = 20000;
let CooldownLevel = 45000;
var vb2;
var Prefix = "§";







function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function resetBot(channel) {
  // send channel a message that you're resetting bot [optional]
  channel.send('Resetting...')
  .then(msg => client.destroy())
  .then(() => client.login(token));
}

class HashTable {

    table = new Array(300)
    hastString
setItem = (key, value) => {
    
    this.table[key] = value;

};
getItem = (key) => {
    
    return this.table[key];
};
}

const myTable = new HashTable();
const AlleRollen = new HashTable();

var con = mysql.createConnection({
       host: "db4free.net",
       user: "denizcakmak",
       password: "Deniz11&9",
       database: "jamalbot"
});

con.connect(err => {
    if(err) throw err;
    console.log("Connected To Database!");
    con.query("SHOW TABLES", console.log);


});
let sql;



/*con.on('error', function(err) {
  console.log(err.code);
  con.connect(err => {
    if(err) throw err;
    console.log("Connected To Database!");
    con.query("SHOW TABLES", console.log);


});
});*/



bot.on("ready", () => {
    console.log('Der Bot ist nun aktiv')
    
    con.query(`SELECT * FROM Counting WHERE server = '566311931174977536'`, (err, rows) => {
      if(err) throw err;
      var add = rows[0].nummer2;
console.log(add);
       f = ''+add;
      // f = ''+4254; 
       console.log(f);

    });
    if(1 < 70){
      //let deepthroater =  message.guild.roles.cache.find((r) => r.id == "811308167312310384");
      AlleRollen.setItem("1", "811308167312310384");
    //     let deepthroat =  message.guild.roles.cache.find((r) => r.id == "810867968669122592");
         AlleRollen.setItem("2", "810867968669122592");
    //     let saftig =  message.guild.roles.cache.find((r) => r.id == "810867745138147339");
         AlleRollen.setItem("3", "810867745138147339");
    //     let Konsument =  message.guild.roles.cache.find((r) => r.id == "806249624477892628");
         AlleRollen.setItem("4", "806249624477892628");
    //     let DJ =  message.guild.roles.cache.find((r) => r.id == "805468116376879105");
         AlleRollen.setItem("5", "805468116376879105");
    //     let godzillaarmy =  message.guild.roles.cache.find((r) => r.id == "804687585389576255");
         AlleRollen.setItem("6", "804687585389576255");
    //     let monkearmy =  message.guild.roles.cache.find((r) => r.id == "804687429273255936");
         AlleRollen.setItem("7", "804687429273255936");
    //     let Zivilist =  message.guild.roles.cache.find((r) => r.id == "738166654579769398");
         AlleRollen.setItem("8", "738166654579769398");
    //     let influencer =  message.guild.roles.cache.find((r) => r.id == "808747963005927453");
         AlleRollen.setItem("9", "808747963005927453");
    //     let Streamer =  message.guild.roles.cache.find((r) => r.id == "738166085756518472");
         AlleRollen.setItem("10", "738166085756518472");
    //     let Zitatrat =  message.guild.roles.cache.find((r) => r.id == "772866877520609330");
         AlleRollen.setItem("11", "772866877520609330");
    //     let Julian =  message.guild.roles.cache.find((r) => r.id == "796783125802778635");
         AlleRollen.setItem("12", "796783125802778635");
    //     let monke =  message.guild.roles.cache.find((r) => r.id == "803938408924840026");
         AlleRollen.setItem("13", "803938408924840026");
    //     let nosiris1  =  message.guild.roles.cache.find((r) => r.id == "738166493891788870");
         AlleRollen.setItem("14", "738166493891788870");
    //     let osiris2 =  message.guild.roles.cache.find((r) => r.id == "738166576100016158");
         AlleRollen.setItem("15", "738166576100016158");
    //     let penner =  message.guild.roles.cache.find((r) => r.id == "772796199270744094");
         AlleRollen.setItem("16", "772796199270744094");
    //     let junkie =  message.guild.roles.cache.find((r) => r.id == "803939687881900042");
         AlleRollen.setItem("17", "803939687881900042");
    //     let geierr =  message.guild.roles.cache.find((r) => r.id == "738165766750339118");
         AlleRollen.setItem("18", "738165766750339118");
    //     let bruhplayer =  message.guild.roles.cache.find((r) => r.id == "738168309450801214");
    //     AlleRollen.setItem("19", "738168309450801214");
    //     let advancedplayer =  message.guild.roles.cache.find((r) => r.id == "738167850820304947");
     //    AlleRollen.setItem("20", "738167850820304947");
     //  let schwitzer =  message.guild.roles.cache.find((r) => r.id == "738165647904735253");
         AlleRollen.setItem("21", "738165647904735253");
   //      let versuchkanin =  message.guild.roles.cache.find((r) => r.id == "738165457600643102");
         AlleRollen.setItem("22", "738165457600643102");
   //      let goodplayer =  message.guild.roles.cache.find((r) => r.id == "738167848450654311");
         AlleRollen.setItem("23", "738167848450654311");
   //      let simp =  message.guild.roles.cache.find((r) => r.id == "807347397545295893");
         AlleRollen.setItem("24", "807347397545295893");
   //      let egoist =  message.guild.roles.cache.find((r) => r.id == "809844245916811315");
         AlleRollen.setItem("25", "809844245916811315");
   //      let krasserdude =  message.guild.roles.cache.find((r) => r.id == "725644608817594369");
         AlleRollen.setItem("26", "725644608817594369");
   //      let proplayer =  message.guild.roles.cache.find((r) => r.id == "738167647845220373");
         AlleRollen.setItem("27", "738167647845220373");
   //      let epic =  message.guild.roles.cache.find((r) => r.id == "738167478969958540");
         AlleRollen.setItem("28", "738167478969958540");
   //      let ccreator =  message.guild.roles.cache.find((r) => r.id == "738167207250493512");
         AlleRollen.setItem("29", "738167207250493512");
   //      let jamal =  message.guild.roles.cache.find((r) => r.id == "738165327208382526");
         AlleRollen.setItem("30", "738165327208382526");
   //      let zitatneuling =  message.guild.roles.cache.find((r) => r.id == "771746486534144001");
         AlleRollen.setItem("31", "771746486534144001");
   //      let milchmann =  message.guild.roles.cache.find((r) => r.id == "810644243272958032");
         AlleRollen.setItem("32", "810644243272958032");
   //      let häschen =  message.guild.roles.cache.find((r) => r.id == "810898112176455750");
         AlleRollen.setItem("33", "810898112176455750");
// 
 //        let skilledcreat =  message.guild.roles.cache.find((r) => r.id == "738167382236987393");
         AlleRollen.setItem("34", "738167382236987393");
 //        let zitatlehr =  message.guild.roles.cache.find((r) => r.id == "771747194481934358");
         AlleRollen.setItem("35", "771747194481934358");
 //        let entertainer =  message.guild.roles.cache.find((r) => r.id == "772469144876220417");
         AlleRollen.setItem("36", "772469144876220417");
 //        let schwarzk =  message.guild.roles.cache.find((r) => r.id == "780444449455996988");
         AlleRollen.setItem("37", "780444449455996988");
 //        let vortex =  message.guild.roles.cache.find((r) => r.id == "807323291760197652");
         AlleRollen.setItem("38", "807323291760197652");
 //        let ultIrgend =  message.guild.roles.cache.find((r) => r.id == "738164668975153202");
         AlleRollen.setItem("39", "738164668975153202");
         
//         let hacker =  message.guild.roles.cache.find((r) => r.id == "810462641541742593");
         AlleRollen.setItem("40", "810462641541742593");
//         let zitatmeist =  message.guild.roles.cache.find((r) => r.id == "771747967375114260");
         AlleRollen.setItem("41", "771747967375114260");
//         let zodiac =  message.guild.roles.cache.find((r) => r.id == "738165238926671882");
         AlleRollen.setItem("42", "738165238926671882");
//         let lost =  message.guild.roles.cache.find((r) => r.id == "807322175589318708");
         AlleRollen.setItem("43", "807322175589318708");
//         let banane =  message.guild.roles.cache.find((r) => r.id == "809844601505972264");
         AlleRollen.setItem("44", "809844601505972264");
//         let unsym =  message.guild.roles.cache.find((r) => r.id == "807322604439732244");
         AlleRollen.setItem("45", "807322604439732244");
//         let cringe =  message.guild.roles.cache.find((r) => r.id == "803940379509391410");
         AlleRollen.setItem("46", "803940379509391410");
//         let gestLeg =  message.guild.roles.cache.find((r) => r.id == "803938930906365962");
         AlleRollen.setItem("47", "803938930906365962");
//         let lebenLeg =  message.guild.roles.cache.find((r) => r.id == "725644917417967627");
         AlleRollen.setItem("48", "725644917417967627");
//         let zuhälter =  message.guild.roles.cache.find((r) => r.id == "772469685940649996");
         AlleRollen.setItem("49", "772469685940649996");
//         let dealer =  message.guild.roles.cache.find((r) => r.id == "807324385404387338");
         AlleRollen.setItem("50", "807324385404387338");
//         let psycho =  message.guild.roles.cache.find((r) => r.id == "772468900327063572");
         AlleRollen.setItem("51", "772468900327063572");
//         let soziopath =  message.guild.roles.cache.find((r) => r.id == "807323676869525535");
         AlleRollen.setItem("52", "807323676869525535");
//         let verified =  message.guild.roles.cache.find((r) => r.id == "803941502237671434");
         AlleRollen.setItem("53", "803941502237671434");
         
 //        let stripper =  message.guild.roles.cache.find((r) => r.id == "809843408025157632");
         AlleRollen.setItem("54", "809843408025157632");
 //        let zitatlegende =  message.guild.roles.cache.find((r) => r.id == "771748685154353193");
         AlleRollen.setItem("55", "771748685154353193");
 //        let judge =  message.guild.roles.cache.find((r) => r.id == "807618754665381918");
         AlleRollen.setItem("56", "807618754665381918");
        AlleRollen.setItem("57", "771623021025689610");
 //        let manager =  message.guild.roles.cache.find((r) => r.id == "807323649434452041");
         AlleRollen.setItem("58", "807323649434452041");
 //        let sup =  message.guild.roles.cache.find((r) => r.id == "807323015481524275");
         AlleRollen.setItem("59", "807323015481524275");
 //        let elite =  message.guild.roles.cache.find((r) => r.id == "803940877130399785");
         AlleRollen.setItem("60", "803940877130399785");
 //        let veteran =  message.guild.roles.cache.find((r) => r.id == "808689728764510269");
         AlleRollen.setItem("61", "808689728764510269");
 //        let contentcreat =  message.guild.roles.cache.find((r) => r.id == "808690081778106368");
         AlleRollen.setItem("62", "808690081778106368");
 //        let respectedMemb =  message.guild.roles.cache.find((r) => r.id == "808694261062303754");
         AlleRollen.setItem("63", "808694261062303754");
 //        let bl =  message.guild.roles.cache.find((r) => r.id == "808694672636903434");
         AlleRollen.setItem("64", "808694672636903434");
          AlleRollen.setItem("20", "808694870491136051");
         AlleRollen.setItem("19", "808695151081685063");
  }
    
    bot.user.setActivity('Type §help for help', {type: 'STREAMING'}).catch(console.error)

})


/*bot.on('messageDelete', messageDelete => {
  
  console.log("4");
  if(messageDelete.author.bot == false){
    
    console.log("5");
  if(messageDelete.channel.id == '807326959679176724'){
    
    console.log("6");
  let channel = messageDelete.channel;
  var a = parseInt(f);
  var b = a-1;
  var c = b+'';
  if(messageDelete.content == c){
  channel.send("<@"+messageDelete.author.id+ "> => "+messageDelete.content); 
  }
  }
}

});*/

bot.on('message', async message =>{

  function SpracheUndSendMessagePerms(frage, deutschh, englischh) {
    if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
      con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
        if(err) throw err;
        
            if(rows.length >= 1){
              
              let language = rows[0].lang;
              if(language == "de"){
                
                if(frage == 1){
                  
                message.channel.send(deutschh).then(msg => msg.delete({timeout: deleteTime}));
                }else{
                message.channel.send(deutschh);
                
                }
                     
              }else if(language == "en"){
                if(frage == 1){
                  message.channel.send(englischh).then(msg => msg.delete({timeout: deleteTime}));
                }else{
                message.channel.send(englischh);
                }    
              }
           }else{
           
            if(frage == 1){
              message.channel.send(englischh).then(msg => msg.delete({timeout: deleteTime}));
            }else{
            message.channel.send(englischh);
            }  
            
            message.channel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
           }
          });

    }else {
      const randomChannel = message.guild.channels.cache.find(channel => 
        channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));

        con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
              if(rows.length >= 1){
                let language = rows[0].lang;
                if(language == "de"){
                  randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung SEND_MESSAGES in allen Channeln, <@"+message.guild.ownerID+">.");
                       
                }else if(language == "en"){
                  randomChannel.send("Sorry for disturb, but Jamal would like to get the permission SEND_MESSAGES in all channel, <@"+message.guild.ownerID+">.");
                       
                }
             }else{
             
              randomChannel.send("Sorry for disturb, but Jamal would like to get the permission SEND_MESSAGES in all channel, <@"+message.guild.ownerID+">.");
              
              randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
             }
            });

    }
  }
    

  var SET = "";
    
    let args = message.content.split(" ");
   if(message.channel.id === '807326959679176724'){
        

                       
                        switch(args[0]){
                            
                            case f:

                                    if(message.author.tag != lastUser.tag){
                                        
                                       // if(myTable.getItem(message.author.tag) >= 5){
                                       //     message.delete({ timeout: 1 })
                                       //     message.author.send("Du bist verwarnt! Du kannst nicht mehr in #counting schreiben. Bitte melde dich bei @Deniz#5879");
                                       // }else{
                                
                                            
                                
                                
                                        con.query(`SELECT * FROM Counting WHERE server = '`+message.guild.id+`'`, (err, rows) => {
                                        if(err) throw err;
                                        
                                
                                
                                            
                                    
                                        
                    
                                        let nummer = rows[0].nummer2;
                                            
                                        if(f == "4000" || f == "5000" || f == "6000"|| f == "7000"|| f == "8000"|| f == "9000"
                                        || f == "10000"|| f == "11000"|| f == "12000"|| f == "13000"|| f == "14000"|| f == "15000"
                                        || f == "20000"|| f == "25000"|| f == "30000"|| f == "40000"|| f == "50000"|| f == "60000"|| f == "69420"){
                                            message.pin();
                                        }
                                        var test = args[0].split('');
                      for(var o = 0; o < 10 ; o++) {
                        let t = o+1;
 

}
                                            g = parseInt(f, 10)+1;
                                            f = ''+g;
                                            
                                            console.log(""+f);
                                            sql = `UPDATE Counting SET nummer2 = `+f+` WHERE server = '`+message.guild.id+`'`;
                                             lastUser = message.author;
                                             lastUser = message.author;
                                             con.query(sql);
                                
                                
                                });
                                   
                                    //sql = `UPDATE nummber set nummber = `+a+` `;
                                    
                                        
                                }else{

                                  if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {
                                  message.delete({ timeout: 1 });
                  
                                }else {
                                  const randomChannel = message.guild.channels.cache.find(channel => 
                                    channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                  
                                    con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                                      if(err) throw err;
                                          if(rows.length >= 1){
                                            let language = rows[0].lang;
                                            if(language == "de"){
                                              randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                                   
                                            }else if(language == "en"){
                                              randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                                   
                                            }
                                         }else{
                                         
                                          randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                  
                                          randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                                         }
                                        });
                  
                                }
                              }


                                    break;
                                
                    
                    
                                    default:
                                      
                                        if((message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES"))) {

                 message.delete({ timeout: 1 });

               }else {
                 const randomChannel = message.guild.channels.cache.find(channel => 
                  channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));

                  con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
                    if(err) throw err;
                        if(rows.length >= 1){
                          let language = rows[0].lang;
                          if(language == "de"){
                            randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                 
                          }else if(language == "en"){
                            randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");
                                 
                          }
                       }else{
                       
                        randomChannel.send("Sorry for disturb, but Jamal would like to get the permission MANAGE_MESSAGES, <@"+message.guild.ownerID+">.");

                        randomChannel.send('(No Language set! "§lang" as an Administrator!)').then(msg => msg.delete({timeout: deleteTime}));
                       }
                      });

              
                                        
                                



                        
                    }
                    
                  break;
                  }
                    
                
        
                 
            
    
        
      }else if(message.channel.id === '806274946913271808'){
        let move =  message.guild.roles.cache.find((r) => r.id == "811587684460003348");
        switch(args[0]){
            
            case "=move":
                console.log("Code 2");
                if(message.member.roles.cache.has(move.id) || message.author.username == "!Đeniz") {
                    
                console.log("Code 3");
                    if(message.mentions.members){
                const taggedUser = message.mentions.members.first();
                if(taggedUser.voice.channel){
                taggedUser.voice.setChannel('811569789758603305');
                }
              }
                }
            break;
                
            case "=unmove":
                
                console.log("Code 4");
                if(message.member.roles.cache.has(move.id) || message.author.username == "!Đeniz") {
                    
                console.log("Code 5");
                    
            var ab = message.member.voice.channelID;
            const taggedUser2 = message.mentions.members.first();
            if(taggedUser2.voice.channel){
                taggedUser2.voice.setChannel(ab);
                }
                }
            break;
            case "=loeschen":
                
            if(message.mentions){
              const taggedUser2 = message.mentions.members.first();
              const tagid = taggedUser2.id;
              message.channel.send("Lösch dich <@"+tagid+">");
              }
            break;
            
            
            default:
              
                break;

        }
    
    
    
    
    
    
    
    
    
    
    
    
   
    // Among US Turnier "Fynni Bro" [de] - danach ein wenig Schach - 00.15

   /* }else if(message.channel.id === '807740332207898693' || message.channel.id === '807740332207898693' || message.channel.id === '807740332207898693'){
        var args1 = args[0].toUpperCase;
        switch(args1){

case "'BLACKJACK":
    let xx = Math.random() * 52;
    let DeckRandomKarte = parseInt(''+xx);


            




    break;
case Prefix:
    break;

    }
        
    
    
    
    
    */
    
    
    
    }else if(message.channel.id === '811675941746114594'){
        let roole =  message.guild.roles.cache.find((r) => r.id == "811675301213634611");
        let av =  message.guild.roles.cache.find((r) => r.id == "811675521564934184");
        let roo123123le =  message.guild.roles.cache.find((r) => r.id == "811675523327328286");
        let r123oole =  message.guild.roles.cache.find((r) => r.id == "811675526653280297");
        let ro123ole =  message.guild.roles.cache.find((r) => r.id == "811675528905490492");
        let gdsf =  message.guild.roles.cache.find((r) => r.id == "811675531736383549");
        let asfw =  message.guild.roles.cache.find((r) => r.id == "811675532592283710");
        let roo124le =  message.guild.roles.cache.find((r) => r.id == "811675527621771305");
        let roo234le =  message.guild.roles.cache.find((r) => r.id == "811675529736224768");
        let roo123le =  message.guild.roles.cache.find((r) => r.id == "811675531132403772");
        let asdsgeff =  message.guild.roles.cache.find((r) => r.id == "811676196944740383");
        let roo1asar323le =  message.guild.roles.cache.find((r) => r.id == "811675908527357952");
        let roo12shav3le =  message.guild.roles.cache.find((r) => r.id == "811675534194901083");
        let roodfs123le =  message.guild.roles.cache.find((r) => r.id == "811676356571299860");

       

let xv = Math.random() * 14;
let xvv = parseInt(''+xv);

if(xvv==1){
    if (message.member.roles.cache.has(roole.id)) {
        message.member.roles.remove(roole);
        }else{
            message.member.roles.add(roole);
        }
        

}else if(xvv==2){
    if (message.member.roles.cache.has(av.id)) {
        message.member.roles.remove(av);
        }else{
            message.member.roles.add(av);
        }
}else if(xvv==3){
    if (message.member.roles.cache.has(roo123123le.id)) {
        message.member.roles.remove(roo123123le);
        }else{
            message.member.roles.add(roo123123le);
        }
}else if(xvv==4){
    if (message.member.roles.cache.has(r123oole.id)) {
        message.member.roles.remove(r123oole);
        }else{
            message.member.roles.add(r123oole);
        }
}else if(xvv==5){
    if (message.member.roles.cache.has(ro123ole.id)) {
        message.member.roles.remove(ro123ole);
        }else{
            message.member.roles.add(ro123ole);
        }
}else if(xvv==6){
    if (message.member.roles.cache.has(gdsf.id)) {
        message.member.roles.remove(gdsf);
        }else{
            message.member.roles.add(gdsf);
        }
}else if(xvv==7){
    if (message.member.roles.cache.has(asfw.id)) {
        message.member.roles.remove(asfw);
        }else{
            message.member.roles.add(asfw);
        }
}else if(xvv==8){
    if (message.member.roles.cache.has(roo124le.id)) {
        message.member.roles.remove(roo124le);
        }else{
            message.member.roles.add(roo124le);
        }
}else if(xvv==9){
    if (message.member.roles.cache.has(roo234le.id)) {
        message.member.roles.remove(roo234le);
        }else{
            message.member.roles.add(roo234le);
        }
}else if(xvv==10){
    if (message.member.roles.cache.has(roo123le.id)) {
        message.member.roles.remove(roo123le);
        }else{
            message.member.roles.add(roo123le);
        }
}else if(xvv==11){
    if (message.member.roles.cache.has(asdsgeff.id)) {
        message.member.roles.remove(asdsgeff);
        }else{
            message.member.roles.add(asdsgeff);
        }
}else if(xvv==12){
    if (message.member.roles.cache.has(roo1asar323le.id)) {
        message.member.roles.remove(roo1asar323le);
        }else{
            message.member.roles.add(roo1asar323le);
        }
}else if(xvv==13){
    if (message.member.roles.cache.has(roo12shav3le.id)) {
        message.member.roles.remove(roo12shav3le);
        }else{
            message.member.roles.add(roo12shav3le);
        }
}else if(xvv==14){
    if (message.member.roles.cache.has(roodfs123le.id)) {
        message.member.roles.remove(roodfs123le);
        }else{
            message.member.roles.add(roodfs123le);
        }
}



    }
    
    switch(args[0].toUpperCase()){
      case ""+Prefix+"COUNTING":
  if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810"  || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.nametoUpperCase() === "MODERATOR")){
    if(args[0].toUpperCase === "SET"){
SpracheUndSendMessagePerms(1, "Super! Dies ist nun der Counting Channel!", "Perfect, this is now the counting channel!")

con.query(`SELECT * FROM CountingChannel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
            if(err) throw err;

                if(rows.length >= 1){
                  sql = `DELETE FROM CountingChannel WHERE server = '`+message.guild.id+`';`;
                  con.query(sql);
                  sql = `INSERT INTO CountingChannel (server, channel_id) VALUES ('`+message.guild.id+`', '`+message.channel.id+`');`;
                  con.query(sql)
                  //
                  
               }else{
                sql = `INSERT INTO CountingChannel (server, channel_id) VALUES ('`+message.guild.id+`', '`+message.channel.id+`');`;
                  con.query(sql)
               }
              });
    }else{
 let newNumber = parseInt(args[1]);
 if(newNumber != null){



 }


    }
        
      }
      break;

      case ""+Prefix+"LANG":
        
        
        if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810"  || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.nametoUpperCase() === "MODERATOR")){
  
        if(args[1].toUpperCase() === "DE" || args[1].toUpperCase() === "DEUTSCH" ){
          con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
            if(err) throw err;
                if(rows.length >= 1){
                  sql = `DELETE FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`;
                  con.query(sql);
                  sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('de', '`+message.guild.id+`');`;
                  con.query(sql)
                  //
                  
               }else{
                sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('de', '`+message.guild.id+`');`;
                con.query(sql)
               }
              });

              console.log("code 1");
              if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {

                message.channel.send('Super! Die Serversprache wurde auf Deutsch gestellt!');

              }else {
                const randomChannel = message.guild.channels.cache.find(channel => 
                  channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                  console.log(randomChannel);
                  randomChannel.send('Super! Die Serversprache wurde auf Deutsch gestellt!');
                  randomChannel.send("Entschuldigen für Störung, aber Jamal bräuchte die Berechtigung SEND_MESSAGES in allen Channeln, <@"+message.guild.ownerID+">.");
                                 

              }


              
        }else if(args[1].toUpperCase() === "EN" || args[1].toUpperCase() === "ENGLISH" ){
          con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
            if(err) throw err;
                if(rows.length >= 1){
                  sql = `DELETE FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`;
                  con.query(sql);
                  sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('en', '`+message.guild.id+`');`;
                  con.query(sql)
                  
               }else{
                sql = `INSERT INTO SpracheServer (lang, server_id) VALUES ('en', '`+message.guild.id+`');`;
                con.query(sql)
               }
              });
              
              if(message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
                message.channel.send('The Serverlanguage is now set to English!');

              }else {
                const randomChannel = message.guild.channels.cache.find(channel => 
                  channel.type === "text" && channel.permissionsFor(bot.user).has("SEND_MESSAGES") && channel.permissionsFor(bot.user).has("VIEW_CHANNEL"));
                  randomChannel.send('The Serverlanguage is now set to English!');
                  randomChannel.send("Sorry for disturb, but Jamal would like to get the permission SEND_MESSAGES in all channel, <@"+message.guild.ownerID+">.");
                                 

              }

        }else{
          message.channel.send("This Language is not supported! \nSupported Languages until now are: \nGerman - DE \nEnglish - EN");
        }
        }
      break;

case ""+Prefix+"LEVEL":
  
  if(message.member.hasPermission("ADMINISTRATOR") || message.member.id === "466596723297484810" || message.member.roles.cache.find(r => r.name.toUpperCase() === "MOD") || message.member.roles.cache.find(r => r.nametoUpperCase() === "MODERATOR")){
    if(args.length === 3){
  con.query(`SELECT * FROM RollenFürLevel WHERE levelrang = '`+args[1]+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
    if(err) throw err;
       if(rows.length >= 1){
        
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        sql = `DELETE FROM RollenFürLevel WHERE levelrang = '`+args[1]+`' AND server_id = '`+message.guild.id+`';`;
              
        con.query(sql);
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)


SpracheUndSendMessagePerms(0, "Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.", "Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.")

        
 }else{
   
                SpracheUndSendMessagePerms(0, "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

        }
      }else{
        if(message.mentions.roles.size == 1){
        let rolle = message.mentions.roles.first();
        
        sql = `INSERT INTO RollenFürLevel (rollen_id, levelrang, server_id) VALUES ('`+rolle.id+`', `+args[1]+`,'`+message.guild.id+`');`;
        con.query(sql)
        SpracheUndSendMessagePerms(0, "Perfekt! Jeder mit dem Level "+args[1]+" bekommt nun die Rolle <@&"+rolle.id+">.", "Perfekt! Now everyone with the Level "+args[1]+" will get the Role <@&"+rolle.id+">.")

       
       }else{


        SpracheUndSendMessagePerms(0, "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

      }
       
    }
      });
    }else if(args.length === 2){
      if(args[1].toUpperCase() === "ON"){
        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "on"){
                SpracheUndSendMessagePerms(0, "Das Levelsystem ist zu dem Zeitpunkt aktiviert!", "The leveling-system is currently active!");
                
               }else{
               sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
               con.query(sql)
               sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
               con.query(sql)
               SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun aktiviert!", "The leveling-system is now activated!");
               }
             
            }else{
              sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
        con.query(sql)
        sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
        con.query(sql)
        SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun aktiviert!", "The leveling-system is now activated!");
            }

          });

      }else if(args[1].toUpperCase() === "OFF"){
        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "off"){
                SpracheUndSendMessagePerms(0, "Das Levelsystem ist zu dem Zeitpunkt deaktiviert!", "The leveling-system is currently deactived!");
                
               }else{
               sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
               con.query(sql)
               sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "off");`;
               con.query(sql)
               SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun deaktiviert!", "The leveling-system is now deactivated!");
               }
             
            }else{
              sql = `DELETE FROM Togglelevel WHERE server = '`+message.guild.id+`';`;
        con.query(sql)
        sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "off");`;
        con.query(sql)
        SpracheUndSendMessagePerms(0, "Das Levelsystem wurde nun deaktiviert!", "The leveling-system is now deactivated!");
            }

          });
      }


    }else{
      SpracheUndSendMessagePerms(0, "Bitte schreibe "+Prefix+"help für weitere Hilfe!", "Please write "+Prefix+"help for more information!");

    }
    
  }
break;

          case ""+Prefix+"LEVELING":
            if(args.length == 2){
              if(message.mentions.members.size == 1){
                

                
                let taggesUsa = message.mentions.members.first();
                if(taggesUsa == null){
                  taggesUsa = bot.users.find(user => user.username == args[1]);

                }
if(taggesUsa == null){
  SpracheUndSendMessagePerms(0, "User nicht gefunden. (Wenn du deine XP wissen, schreibe NUR §leveling!)", "User not found. (If you want to know your XP, you just need to type §leveling!)");
  
}else{
                let Level = 0;
            let Experience = 0;
 
                
            con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
              if(err) throw err;
                 if(rows2.length >= 1){
                  Level = rows2[0].levelvoll;
                  
                  
                 }
                 
                });
                con.query(`SELECT * FROM Leveling WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                  if(err) throw err;
                      if(rows.length >= 1){
                      Experience = rows[0].xplevel;
                     
                     }
                    });
                    
                    con.query(`SELECT * FROM Leveling WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                      if(err) throw err;
                      SpracheUndSendMessagePerms(0, "Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.",
                      "The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.");
                      
                    
                  });
                  
              }
                       }
                    
            }else if(rows.length === 1){
              let Level = 0;
              let Experience = 0;
  
              con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
                if(err) throw err;
                   if(rows2.length >= 1){
                    Level = rows2[0].levelvoll;
                   }
  
                  });
                  
                  con.query(`SELECT * FROM Leveling WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                    if(err) throw err;
                        if(rows.length >= 1){
                        Experience = rows[0].xplevel;
                       }
                      });
                      
                      SpracheUndSendMessagePerms(0, "Du bist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.",
                    "You're level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.");

                        }else{

                          let Level = 0;
                          let Experience = 0;
               console.log("code 1");
                              
                          con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
                            if(err) throw err;
                               if(rows2.length >= 1){
                                Level = rows2[0].levelvoll;
                                console.log(Level);
                                
                               }
              
                              });
                              
                              con.query(`SELECT * FROM Leveling WHERE player_id = '`+taggesUsa.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
                                if(err) throw err;
                                    if(rows.length >= 1){
                                    Experience = rows[0].xplevel;
                                    console.log(Experience);
                                   }
                                  });
                                  
              
                                  SpracheUndSendMessagePerms(0, "Der Spieler <@"+taggesUsa.id+"> ist Level "+Level+" mit "+Experience+"/"+(200+(200*Level))+" XP.",
                                  "The User <@"+taggesUsa.id+"> is level "+Level+" with "+Experience+"/"+(200+(200*Level))+" XP.");
                                }          

   break;
            case ""+Prefix+"HELP":

              SpracheUndSendMessagePerms(0, 
                "```PREFIX: "+Prefix+" \n \n{} = Ping , [] = Argumente (auch optional), () = Argumente (Eingabe erfordert) "+
                        "\n \nlevel (LevelNr) (@role): Nur für Menschen mit der Rolle 'Mod(erator)' oder mit Adminberechtigungen verfügbar. \nStelle ein, ab welchem Level man welche Rolle bekommt (Beispiel: "+Prefix+"level 5 {@Level5})"+
                        "\n \nlevel (on/off): Stelle das Leveling-System ein/aus! (Standart: Aktiv)"+
                        "\n \nleveling {@User}: Sieh, auf welchem Level du bist (oder jemand anderes.)"+
                        
                        "\n \npp @{player}: Checke die Schw*nzlänge von... dir oder einem User "+
                        "\n \nlauch @{player}: Zu wieviel Prozent bist du/jemand anderes ein Lauch? "+
                        "\n \nlang: Setze die Sprache auf deinem Server. (Beispiel: "+Prefix+"lang de)```",
                
                "```PREFIX: "+Prefix+"\n \n{} = Ping, [] = Argument (also optional), () = Argument (needed) "+
                        "\n \nlevel (LevelNo) (@role): Only available for people with the role named 'mod(erator)' or with admin permission. \nSetup with level a player will get which role (usage: "+Prefix+"level 5 {@Level5})"+
                        "\n \nlevel (on/off): De/activate the leveling system! (usually active)"+
                        "\n \nleveling {@user}: See what level you are (or someone else.)"+
                        "\n \npp {@user}: Check the length of a co*k of you or a user "+
                        "\n \nlauch @{player}: To which percentage are you/a user a leek? "+
                        "\n \nlang : Set the language of the bot on your server. (usage: "+Prefix+"lang de)```");




              break;
              case ""+Prefix+"JAMAL":
                
                    
                    if(message.mentions.members.size >= 1){
                const taggedUser = message.mentions.members.first();
                message.channel.send("Super, <@"+taggedUser.id+"> 👍 👍 👍 👍");
              }else {
               message.channel.send("Super, <@"+message.author.id+"> 👍 👍 👍 👍");}
              break;

              


              case ""+Prefix+"LAUCH":
                

                    if(message.mentions.members.size >= 1){
                const taggedUser = message.mentions.members.first();
               // if(taggedUser.id == "466596723297484810"){
                //  message.channel.send("🥬Der User <@"+taggedUser.id+"> ist zu 0% ein Lauch.🥬");
                //}else{

                  let Gained = Math.floor(Math.random() * 100);
                  let XPneu = (parseInt(Gained));
                  SpracheUndSendMessagePerms(0, "🥬Der User <@"+taggedUser.id+"> ist zu "+XPneu+"% ein Lauch.🥬",
                  "🥬The User <@"+taggedUser.id+"> has a "+XPneu+"% possibility to be a leek.🥬");

                  
              //}
              }else {
               // if(message.author.id == "466596723297484810"){
               //   message.channel.send("🥬Du bist zu 0% ein Lauch.🥬");
               // }else{

                let Gained = Math.floor(Math.random() * 100);
                let XPneu = (parseInt(Gained));
                SpracheUndSendMessagePerms(0, "🥬Du bist zu "+XPneu+"% ein Lauch.🥬",
                "🥬You have a "+XPneu+"% possibility to be a leek.🥬");
              }
                //}
              break;

              case ""+Prefix+"PP":
                
                      if(message.mentions.members.size >= 1){
                  const taggedUser = message.mentions.members.first();
                  if(taggedUser.id == "466596723297484810"){
                    SpracheUndSendMessagePerms(0, "🍆<@"+taggedUser.id+">'s pp ist 25cm groß.🍆",
                    "🍆<@"+taggedUser.id+">'s pp is 25cm big.🍆");
                  }else{
  
                    let Gained = Math.floor(Math.random() * 20);
                    let XPneu = (parseInt(Gained));
                    SpracheUndSendMessagePerms(0, "🍆<@"+taggedUser.id+">'s pp ist "+XPneu+"cm groß.🍆",
                    "🍆<@"+taggedUser.id+">'s pp is "+XPneu+"cm big.🍆");

                }
                }else {
                  if(message.author.id == "466596723297484810"){
                    

                    SpracheUndSendMessagePerms(0, "🍆Dein pp ist 25cm groß.🍆", "🍆Your pp is 25cm big.🍆");
                  }else{
  
                    let Gained = Math.floor(Math.random() * 20);
                    let XPneu = (parseInt(Gained));
                    SpracheUndSendMessagePerms(0, "🍆Dein pp ist "+XPneu+"cm groß.🍆", "🍆Your pp is "+XPneu+"cm big.🍆");
                  
                  }
                  }
                break;


                case ""+Prefix+"FYNNDERWAHRE":
                  SpracheUndSendMessagePerms(0, "Wahre Finns werden mit **y** geschrieben!", "The real Finns are written with a **y**!");
                break;

      default:

        break; 
       
        


  }


      if(!message.author.bot){
        let b1 = 0;

        con.query(`SELECT * FROM Togglelevel WHERE server = '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
             if(rows.length >= 1){
               if(rows[0].status === "off"){
                
               }else{
              


        con.query(`SELECT * FROM Leveling WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows) => {
          if(err) throw err;
                      

             if(rows.length >= 1){
              let XP = rows[0].xplevel;
              let Gained = Math.floor(Math.random() * 20);
              let Gained10bis30 = Gained + 10;
              let XPneu = (parseInt(XP)) + Gained10bis30;
              
              con.query(`SELECT * FROM LevelingLEVEL WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`, (err, rows2) => {
                if(err) throw err;
                   if(rows2.length >= 1){
                    let LevelNR = rows2[0].levelvoll;
                    con.query(`SELECT * FROM LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id LIKE '`+message.guild.id+`'`, (err, rows1) => {
                      if(err) throw err;
                      
                       if(rows1.length >= 1){
                              let alteUhr = rows1[0].cooldown;
                              let timen = BigInt(alteUhr);
                              if(BigInt(Date.now()) >= timen){
                                  
                                      let CooldownLevel = rows1[0].cooldown; 
                                      sql = `DELETE FROM LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id = '`+message.guild.id+`';`;
                                     
                                      con.query(sql)
                                      let COOLDOWN = Date.now()+CooldownLevel;
                                      sql = `Delete from LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql)
                                      sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', `+COOLDOWN+`,'`+message.guild.id+`');`;
                                      COOLDOWN = 0;
                                      con.query(sql)
                                      
                                      let b = parseInt(LevelNR);
                                      b1 = b;


                                      if(XPneu >= (200+(200*b))){


                                        SpracheUndSendMessagePerms(1, 'Glückwunsch, <@'+message.author.id+'>! Du hast Level '+(b+1)+' erreicht!', 
                                        'Congratulation, <@'+message.author.id+'>! You reached Level '+(b+1)+'!');
                                        


                                        sql = `UPDATE Leveling SET xplevel = `+(XPneu-(200+(200*b)))+` WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql);
                                      sql = `DELETE FROM LevelingLEVEL WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql);
                                    sql = `INSERT INTO LevelingLEVEL (player_id, levelvoll, server_id) VALUES ('`+message.author.id+`', `+(b+1)+`,'`+message.guild.id+`');`;
                                        con.query(sql);
                                      }else {
                                        sql = `UPDATE Leveling SET xplevel = `+XPneu+` WHERE player_id = '`+message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql);

                                      }





                                     
                                  }
                                
                                  }else{
                                    sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', 0,'`+message.guild.id+`');`;
                                    con.query(sql)
                                  }
                                      });

                  }else {
                                      sql = `INSERT INTO LevelingLEVEL (player_id, levelvoll, server_id) VALUES ('`+message.author.id+`', 0,'`+message.guild.id+`');`;
                                        con.query(sql);
                                     }
                                      let COOLDOWN = Date.now()+CooldownLevel;
                                      sql = `Delete from LevelCooldown WHERE player_id = '`+ message.author.id+`' AND server_id LIKE '`+message.guild.id+`';`;
                                      con.query(sql)
                                      sql = `INSERT INTO LevelCooldown (player_id, cooldown, server_id) VALUES ('`+ message.author.id+`', '`+COOLDOWN+`','`+message.guild.id+`');`;
                                      COOLDOWN = 0;
                                      con.query(sql)
                                      
                                     
                                      con.query(sql);

              });
              XP = 0;
            }else{
              sql = `Insert into Leveling values ("`+message.author.id+`", 15, "`+message.guild.id+`");`;
                      
              con.query(sql);
            }
                        });


                  
                        for(let a = 1; a <= b1; a++) {
                          con.query(`SELECT * FROM RollenFürLevel WHERE levelrang = `+b1+` AND server_id = '`+message.guild.id+`'`, (err, rows3) => {
                            if(err) throw err;
                            if(rows3.length >= 1){
                              let ROLLENID = rows3[0].rollen_id;
                              let LevelRolle = message.guild.roles.cache.find((r) => r.id == ""+ROLLENID);
                              if (LevelRolle != null && !message.member.roles.cache.has(LevelRolle)) {
                              message.member.roles.add(LevelRolle);
                              }
                             
                            }

                          });

                        }
                        
                      }
                    }else {
                      sql = `INSERT INTO Togglelevel (server, status) VALUES ('`+message.guild.id+`', "on");`;
                      con.query(sql);
                    }
                    });
              
      }

      
      

});

bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.partial) { //this whole section just checks if the reaction is partial
      try {
          await reaction.fetch(); //fetches reaction because not every reaction is stored in the cache
      } catch (error) {
          console.error('Fetching message failed: ', error);
          return;
      }
  }
  if (!user.bot) {
      if (reaction.emoji.id == "831149456325345310") { //if the user reacted with the right emoji

          const role = reaction.message.guild.roles.cache.find(r => r.id === "738166493891788870"); //finds role you want to assign (you could also user .name instead of .id)

          const { guild } = reaction.message //store the guild of the reaction in variable

          const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)

          member.roles.add(role); //assign selected role to member

      }
  }
})

   

bot.login(token)





//INSERT INTO verwarntimes (id, ms) VALUES ('`+ message.author.id+`', '`+times+`')
/* `*Name: *` + message.author.tag + ` \n*Grund für Sündenbock*: **5** mal Spam in #counting \n*Dauer*: 5 bis 10 Minuten, zum runterkommen` */



// const ser = client.users.cache.find(user => user.id === 'USER-ID');

// if (<Message>.mentions.members.size) { // or message.mentions.members.size > 0
  //DO STUFF
//}

/*con.query(`SELECT * FROM SpracheServer WHERE server_id = '`+message.guild.id+`';`, (err, rows) => {
  if(err) throw err;
  if(rows.length >= 1){
    let language = rows[0].lang;
    if(language == "de"){
      message.channel.send("Bitte wähle ein gültiges Level und Pinge eine Rolle! \n(§level 5 @...)");  

    }else if(language == "en"){
      message.channel.send("Please select a valid Level and mention a role! \n(§level 5 @...)");  

    }
 }else{
  message.channel.send("You're level "+Level+" with "+Experience+"/"+(200+(200*a))+" XP.").then(msg => msg.delete({timeout: 20000}));
  
  message.channel.send('(No Language set! "§lang" as a Administrator!)').then(msg => msg.delete({timeout: 10000}));
 }
});*/