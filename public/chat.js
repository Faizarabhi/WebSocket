// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback')


btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
})

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value)
})
socket.on('typing',function(data){
    feedback.innerHTML = '<p><em>'+data+' is typing a message...</em></p>'
})
// listen for events
socket.on('chat',function(data){
    console.log(data,'ryr')
    output.innerHTML += '<p><strong>'+data.handle+':</strong>'+data.message+'</p>'
})