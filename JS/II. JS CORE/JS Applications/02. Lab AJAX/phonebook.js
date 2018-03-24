/// <reference path="./typings/globals/jquery/index.d.ts" />

const URL = 'https://phonebook-ccadc.firebaseio.com/phonebook';
const person = $('#person');
const phone = $('#phone');

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
            let li = $(`<li>${res[key].name}: ${res[key].phone} </li>`)
            .append($('<a href="#">[Delete]</a>').on('click', function() {
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
    let name = person.val();
    let phoneVal = phone.val();
    let postData = JSON.stringify({name: name, phone: phoneVal});

    $.ajax({
        method: 'POST',
        url: URL + '.json',
        data: postData,
        success: appendElement,
        error: handleError
    });

    function appendElement(res) {
        let li = $(`<li>${name}: ${phoneVal} </li>`)
            .append($('<a href="#">[Delete]</a>').on('click', function() {
                $.ajax({
                    method: 'DELETE',
                    url: URL + '/' + res.name + '.json'
                }).then(() => $(li).remove()).catch(handleError)
            }));
        $('#phonebook').append(li);
    }
    person.val('');
    phone.val('');
}

function handleError(err) {
    console.log(err);
}