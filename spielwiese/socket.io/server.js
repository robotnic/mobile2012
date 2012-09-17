var chat = require('socket.io').listen(8000,{origins: '*:*'});  //CORS

chat.on('connection', function (socket) {
	console.log("connect");
	socket.emit("message",{text:"Endlich"});
	
	socket.on('message', function (data) {
		console.log("message",data);
		socket.broadcast.emit("message",data);
	});

});
/*

    socket.emit('a message', {
        that: 'only'
      , '/chat': 'will get'
    });
    chat.emit('a message', {
        everyone: 'in'
      , '/chat': 'will get'
    });
  });

var news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.emit('item', { news: 'item' });
  });
*/
