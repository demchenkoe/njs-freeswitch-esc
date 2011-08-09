

var freeSwitch = require('./freeswitch');

fsc = new freeSwitch.client('localhost', 8021, 'ClueCon');

fsc.on('connect',function(){

    //subscribe on events from FreeSWITCH
    fsc.event('CHANNEL_CREATE CHANNEL_DESTROY');

    //...
});

fsc.on('disconnect',function(){
    //called on disconnect from FreeSWITCH
});


//set handlers for event

fsc.on('CHANNEL_CREATE', function(event){

}

fsc.on('CHANNEL_DESTROY', function(event){

}

//connect to FreeSWITCH

freeswitch.connect()
