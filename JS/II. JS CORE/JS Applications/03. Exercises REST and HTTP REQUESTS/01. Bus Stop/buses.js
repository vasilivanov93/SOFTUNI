/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function getInfo() {
    let stopId = $('#stopId').val();
    let list = $('#buses');
    list.empty();
    $.get(`https://judgetests.firebaseio.com/businfo/${stopId}.json `).then(displayBusStopInfo).catch(displayError);

    function displayBusStopInfo(busStopInfo) {
        $('#stopName').text(busStopInfo.name);
        let buses = busStopInfo.buses
        for (let busNumber in buses) {
            let busMinutes = buses[busNumber];
            let liItem = $('<li>');
            liItem.text(`Bus ${busNumber} arrives in ${busMinutes} minutes`);
            list.append(liItem);
        }
    }

    function displayError() {
        $('#stopName').text('Error')
    }
}