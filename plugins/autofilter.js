const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'hunter', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "Hunter πΈπ πΌπ’ πΎπ πππ";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'homer', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "Homer πΈπ πΌπ’ πΎπ πππ";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'hunter', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "Hunter πΈπ πΌπ’ π²πππππππ₯°";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'homer', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "Homer πΈπ πΌπ’ πΎπ πππ";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    


}
