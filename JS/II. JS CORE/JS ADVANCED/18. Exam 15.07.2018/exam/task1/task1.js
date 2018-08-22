function addSticker() {
    let title = $('.title').val();
    let text = $('.content').val();

    if (title !== '' && text !== '') {
        let li = $('<li>').addClass('note-content').append($('<a>').addClass('button').text('x').on('click', function () {
            $(this).parent().remove();
        }));

        let h2 = $('<h2>').text(title);
        let hr = $('<hr>');
        let p = $('<p>').text(text);

        li.append(h2);
        li.append(hr);
        li.append(p);
        $('#sticker-list').append(li);
        $('.title').val('');
        $('.content').val('');
    }
}