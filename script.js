$(function(){
	var socket = io.connect();

	var $messa = $('#message-to-send');
	var $chat = $('#here');
	var btn = document.getElementById('btn');
	var mess = document.getElementById('message-to-send');

	var name = document.getElementById('form1');


	btn.addEventListener('click',function(){
		if(name.value != ''){
		socket.emit('send', {
			message: $messa.val(),
			name:name.value
		});
		document.getElementById('message-to-send').value = '';
	}else{
		alert("insert Username");
	}
	});

	socket.on('send1',function(data){
		if(data.name == name.value){
			$chat.append('<li class="clearfix"><div class="message-data align-right"><span class="message-data-name">Me</span></div><div class="message other-message float-right">'
				+data.message+'</div></li>' );

		}else{

			$chat.append('<li><div class="message-data"><span class="message-data-name">'+data.name+'</span></div><div class="message my-message">'
				+data.message+'</div></li>');

		}

	});
});

