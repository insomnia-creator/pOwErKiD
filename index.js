const { Plugin } = require('powercord/entities');

module.exports = class Powerkid extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'powerkid',
            description:
                'eVeR wAnTeD tO gO lIkE tHis?',
            usage: '{c} [length]',
            executor: (args) => this.powerkid(args)
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('powerkid');
    }

    powerkid(args) {
        let string = '';
        let argumentslol = args.join(' ');
        console.log("pOwErKiD: Received arguments: " + argumentslol);
        if(args.length >= 2000){
            return {
                send: false,
                result: "nO tHaT's tOo bIg mAkE iT sMaLl"
            }
        } else {
            //idk how else should I do this
            for(let i = 0; i < argumentslol.length; i++){
                console.log(argumentslol[i]);
                if(i % 2 === 0){
                    if(argumentslol[i].toUpperCase() === argumentslol[i]){
                        string += argumentslol[i];
                    } else {
                        string += argumentslol[i].toUpperCase();
                    }
                } else {
                    if(argumentslol[i].toUpperCase() === argumentslol[i]){
                        string += argumentslol[i].toLowerCase();
                    } else {
                        string += argumentslol[i];
                    }
                }
            }
        }
        return {
            send: true,
            result: string
        };
    }
};