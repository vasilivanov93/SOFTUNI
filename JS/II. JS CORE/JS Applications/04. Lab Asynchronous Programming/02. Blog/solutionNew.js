function attachEvents() {
    $('#btnLoadPosts').on('click', attachLoadPosts);
    $('#btnViewPost').on('click', attachViewPosts);
    const URL = `https://baas.kinvey.com/appdata/kid_HkRxNwfqf/`;
    const USERNAME = 'peter';
    const PASSWORD = '1';
    const AUTH = {"Authorization": "Basic " + btoa(`${USERNAME}:${PASSWORD}`)};

    function attachLoadPosts() {
        $('#posts').empty();
        $.ajax({
            method: 'GET',
            url: URL + 'posts',
            headers: AUTH
        }).then(displayPostsName).catch(handleError);
    }

    function displayPostsName(response) {
        for (let obj of response) {
            $('#posts').append($('<option>').text(obj.title).val(obj._id));
        }
    }

    function attachViewPosts() {
        let postId = $('#posts option:selected').val();
        $.ajax({
            method: 'GET',
            url: URL + `posts/${postId}`,
            headers: AUTH
        }).then(displayPostTitleAndBody).catch(handleError);

        $('#post-comments').empty();
        $.ajax({
            method: 'GET',
            url: URL + `comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        }).then(displayComments).catch(handleError);
    }

    function displayPostTitleAndBody(response) {
        $('#post-title').text(response.title);
        $('#post-body').text(response.body);
    }

    function displayComments(response) {
        for (let arr of response) {
            $('#post-comments').append($('<li>').text(arr.text))
        }
    }

    function handleError(error) {
        console.log(error);
    }
}