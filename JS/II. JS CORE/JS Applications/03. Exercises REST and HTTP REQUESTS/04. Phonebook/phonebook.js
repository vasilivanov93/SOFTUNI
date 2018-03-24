/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function attachEvents() {
    const URL = 'https://phonebook-nakov.firebaseio.com/phonebook';

    $('#btnLoad').on('click', loadData);
    $('#btnCreate').on('click', postData);

    function loadData() {
        $('#phonebook').empty();
        $.ajax({
            method: 'GET',
            url: URL + '.json'
        }).then(handleSuccess).catch(handleError);

        function handleSuccess(res) {
            for (let key in res) {
                let li = $(`<li>${res[key].person}: ${res[key].phone} </li>`)
                .append($('<button href="#">[Delete]</button>').on('click', function() {
                    $.ajax({
                        method: 'DELETE',
                        url: URL + '/' + key + '.json'
                    }).then(() => $(li).remove()).catch(handleError)
                }));
                $('#phonebook').append(li);
            }
        }
    }

    function postData() {
        let newContactJSON = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });

        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data: postData,
            success: appendElement,
            error: handleError
        });

        function appendElement(res) {
            let li = $(`<li>${person}: ${phone} </li>`)
                .append($('<button href="#">[Delete]</button>').on('click', function() {
                    $.ajax({
                        method: 'DELETE',
                        url: URL + '/' + res.person + '.json'
                    }).then(() => $(li).remove()).catch(handleError)
                }));
            $('#phonebook').append(li);
        }
        $('#person').val('');
        $('#phone').val('');
    }

    function handleError(err) {
        $('#phonebook').append($('<li>').text("Error"));
    }
}