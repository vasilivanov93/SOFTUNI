/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com';
    $('#submit').on('click', loadForecast)

    function request(endpoint) {
        return $.ajax({
            method: "GET",
            url: baseUrl + endpoint
        })
    }

    function loadForecast() {
        request('/locations.json').then(displayLocations).catch(handleError);
    }

    function displayLocations(dataArr) {
        let inputLocation = $('#location').val();
        let code = dataArr.filter(loc => loc['name'] === inputLocation).map(loc => loc['code'])[0];
        
        if(code === 'undefined') {
            handleError();
        }

        let todayForecastP = request(`/forecast/today/${code}.json`);
        let upcomingForecastP = request(`/forecast/upcoming/${code}.json`);

        Promise.all([todayForecastP, upcomingForecastP]).then(displayAllForecastInfo).catch(handleError);
    }
    function displayAllForecastInfo([today, upcoming]) {
        let icons = {
            ['Sunny']: "&#x2600;",
            ['Partly sunny']: "&#x26C5;",
            ['Overcast']: "&#x2601;",
            ['Rain']: "&#x2614;",
            ['Degrees']: "&#176;"
        };

        $('#current')
            .append($('<span>').addClass("condition symbol").html(icons[today.forecast.condition]))
            .append($('<span>').addClass("condition")
                .append($('<span>').addClass("forecast-data").text(today.name))
                .append($('<span>').addClass("forecast-data").html(`${today.forecast.low}${icons.Degrees}/${today.forecast.high}${icons.Degrees}`))
                .append($('<span>').addClass("forecast-data").text(today.forecast.condition)));

        for (let forecast of upcoming.forecast){
            $('#upcoming')
                .append($('<span>').addClass("upcoming")
                    .append($('<span>').addClass("symbol").html(icons[forecast.condition]))
                    .append($('<span>').addClass("forecast-data").html(`${forecast.low}${icons.Degrees}/${forecast.high}${icons.Degrees}`))
                    .append($('<span>').addClass("forecast-data").text(forecast.condition)));
        }

        $('#forecast').css("display", "block");
    }

    function handleError() {
        $('#forecast').html("Error");
        $('#forecast').css("display", "block");
    }
}