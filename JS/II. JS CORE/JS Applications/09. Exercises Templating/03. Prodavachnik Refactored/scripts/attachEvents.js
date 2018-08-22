function attachCreateAdEvent() {
    $('#buttonCreateAd').on('click', createAd);
}

function attachEditAdEvent() {
    $('#buttonEditAd').on('click', editAd);
}

function attachRegisterEvent() {
    $('#buttonRegisterUser').on('click', registerUser);
}

function attachLoginEvent() {
    $('#buttonLoginUser').on('click', loginUser);
}

function attachEventsToLinks() {
    $('#linkHome').on('click', showHomeView);
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    })

    if(sessionStorage.getItem('authToken') != null){
        $('#linkLogout').on('click', logoutUser);
        $('#linkCreateAd').on('click', showCreateAdView);
        $('#linkListAds').on('click', listAds);
        $('#loggedInUser').text("Welcome, " + sessionStorage.getItem('username') + "!");
        $('#loggedInUser').show();
    }
    else{
        $('#linkRegister').on('click', showRegisterView);
        $('#linkLogin').on('click', showLoginView);
        $('#loggedInUser').text('');
    }
}