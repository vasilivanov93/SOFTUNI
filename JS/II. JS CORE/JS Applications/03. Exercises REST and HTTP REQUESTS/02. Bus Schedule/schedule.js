/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

let result = (function solve() {
    let currentId = 'depot';
    let oldName = '';

    function depart() {
        $.get(`https://judgetests.firebaseio.com/schedule/${currentId}.json`).then(displayInfo);
    }

    function arrive() {
        $('#info').find('span').text(`Arriving at ${oldName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }

    function displayInfo(stopInfo) {
        let name = stopInfo.name;
        $('#info').find('span').text(`Next stop ${name}`);
        currentId = stopInfo.next;
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', false);
        oldName = name;
    }

    return {
        depart,
        arrive
    };
})();