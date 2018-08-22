/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function loadCommits() {
    let username = $('#username').val();
    let repository = $('#repo').val();
    let list =$('#commits');
    list.empty();
    $.get(`https://api.github.com/repos/${username}/${repository}/commits`).then(displayCommits).catch(displayError);

    function displayCommits(data) {
        data.map(e => ({author: e.commit.author.name, message: e.commit.message}))
            .map(e => `${e.author}: ${e.message}`)
            .forEach(e => list.append(`<li>${e}</li>`));
    }

    function displayError(error) {
        $('#commits').append(`<li>${`Error: ${error.status} (${error.statusText})`}</li>`);
    }
}