/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function attachEvents() {
    $('#refresh').on('click', attachRefresh);
    $('#submit').on('click', attachSend);

    function attachSend() {
        let messageJson = {
            "author": $('#author').val(),
            "content": $('#content').val(),
            "timestamp": Date.now()
        };

        let sendMessageRequest = {
            url: 'https://messenger-c11ac.firebaseio.com/messenger/.json',
            method: 'POST',
            data: JSON.stringify(messageJson),
            success: attachRefresh
        };

        $.ajax(sendMessageRequest);
    }

    function attachRefresh() {
        $.get('https://messenger-c11ac.firebaseio.com/messenger/.json').then(displayMessages);

        function displayMessages(messages) {
            let output = $('#messages');
            output.empty();
            let messagesStr = '';
            for (let key in messages) {
                messagesStr += `${messages[key]['author']}: ${messages[key]['content']}\n`;
            }

            output.text(messagesStr);
        }
    }
}