var emitter = require('emitter-io');
var connection = emitter.connect({ host: '127.0.0.1', port: 8080 });

// once we're connected, subscribe to the 'chat' channel
connection.on('connect', function(){
    console.log('connected 1')
    connection.subscribe({
        key: "lwzzq3LWoCml6NW__bbbtvWMPHlJqpTY",
        channel: "user/user1/"
    });

    console.log('connected 2')
    connection.subscribe({
        key: "nwWtZJSfLjKPYhy3ES8YjIXyrOCQfEKh",
        channel: "user/user2/"
    });

    console.log('connected 3')
    connection.subscribe({
        key: "hABPUY9kYSyKdQMpJvA0pauRumsonz_U",
        channel: "user/user3/"
    });
    
    connection.on('message', function(data) {
        console.log(data);
    })
});

// publish a message to the chat channel
// emitter.publish({
//     key: "<channel key>",
//     channel: "chat/my_name",
//     message: "hello, emitter!"
// });