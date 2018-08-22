const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_HyJkLuv5z';
const APP_SECRET = '7ce286ddda9a483892cb12edf195266f';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser() {
    let username = $('#formLogin input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: { username, password }
    }).then(function (res) {
        signInUser(res, 'Login successful.');
    }).catch(handleAjaxError);
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: { username, password }
    }).then(function (res) {
        signInUser(res, 'Registration successful.');
    }).catch(handleAjaxError);
}

function listBooks() {
    showView('viewBooks');
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        displayPaginationAndBooks(res.reverse());
        showInfo('View all books.');
    }).catch(handleAjaxError);
}

function createBook() {
    let title = $('#formCreateBook input[name=title]').val();
    let author = $('#formCreateBook input[name=author]').val();
    let description = $('#formCreateBook textarea[name=description]').val();

    $.ajax({
        method: "POST",
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
        data: { title, author, description }
    }).then(function (res) {
        listBooks();
        showInfo('Book created.')
    }).catch(handleAjaxError);
}

function deleteBook(book) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        listBooks();
        showInfo('Book deleted.')
    }).catch(handleAjaxError);
}

function loadBookForEdit(book) {
    showView('viewEditBook');
    $('#formEditBook input[name=title]').val(book.title);
    $('#formEditBook input[name=author]').val(book.author);
    $('#formEditBook textarea[name=description]').val(book.description);
    $('#formEditBook input[name=id]').val(book._id);
}

function editBook() {
    let title = $('#formEditBook input[name=title]').val();
    let author = $('#formEditBook input[name=author]').val();
    let description = $('#formEditBook textarea[name=description]').val();
    let id = $('#formEditBook input[name=id]').val();

    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
        data: { title, author, description }
    }).then(function (res) {
        listBooks();
        showInfo('Book edited.')
    }).catch(handleAjaxError);
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
}

function logoutUser() {
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        showInfo('Logout successful.');
    }).catch(handleAjaxError);

    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    $('#loggedInUser').text('');
}

function signInUser(res, message) {
    saveAuthInSession(res);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo');
    if (pagination.data("twbs-pagination")) {
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            $('#books > table tr').each((index, element) => {
                if (index > 0) {
                    $(element).remove();
                }
            })
            let startBook = (page - 1) * BOOKS_PER_PAGE
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startBook; i < endBook; i++) {
                let tr = $('<tr>');
                tr.append($('<td>').text(books[i].title));
                tr.append($('<td>').text(books[i].author));
                tr.append($('<td>').text(books[i].description));

                if (books[i]._acl.creator === sessionStorage.getItem('userId')) {
                    let btnDelete = $('<a href="#">').text('[Delete]').on('click', function () {
                        deleteBook(books[i]);
                    });
                    let btnEdit = $('<a href="#">').text('[Edit]').on('click', function () {
                        loadBookForEdit(books[i]);
                    });

                    tr.append(btnDelete);
                    tr.append(btnEdit);
                }

                $('#books table').append(tr);
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0) {}
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}