/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_rkbR0OU9f';
    const username = 'vasil';
    const password = 'vasil';
    const base64auth = btoa(`${username}:${password}`);
    const authHeader = {
        'Authorization': `Basic ${base64auth}`,
        'Content-type': `application/json`
    }
    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: authHeader,
            data: JSON.stringify(data)
        });
    }

    $('.load').on('click', loadAllCatches);
    $('.add').on('click', createCatches)

    function loadAllCatches() {
        request('GET', '/biggestCatches').then(displayAllCathes).catch(handleError);
    }

    function displayAllCathes(data) {
        let catches = $('#catches');
        catches.empty();
        
        for (let el of data) {
            catches.append($('<div>').addClass("catch").attr("data-id", el._id)
                    .append($('<label>').text("Angler"))
                    .append($('<input>').attr("type", "text").addClass("angler").val(el.angler))
                    .append($('<label>').text("Weight"))
                    .append($('<input>').attr("type", "number").addClass("weight").val(el.weight))
                    .append($('<label>').text("Species"))
                    .append($('<input>').attr("type", "text").addClass("species").val(el.species))
                    .append($('<label>').text("Location"))
                    .append($('<input>').attr("type", "text").addClass("location").val(el.location))
                    .append($('<label>').text("Bait"))
                    .append($('<input>').attr("type", "text").addClass("bait").val(el.bait))
                    .append($('<label>').text("Capture Time"))
                    .append($('<input>').attr("type", "number").addClass("captureTime").val(el.captureTime))
                    .append($('<button>').addClass("update").text("Update").click(updateCatch))
                    .append($('<button>').addClass("delete").text("Delete").click(deleteCatch)));
        }
    }

    function updateCatch() {
        let catchEl = $(this).parent();
        let dataObj = createDataJson(catchEl);
        let catchId = $(this).parent().attr('data-id');
        request('PUT', `/biggestCatches/${catchId}`, dataObj).then(loadAllCatches).catch(handleError)
    }

    function deleteCatch(catchEl) {
        let catchId = $(this).parent().attr('data-id');
        request('DELETE', `/biggestCatches/${catchId}`).then(loadAllCatches).catch(handleError)
    }

    function createCatches() {
        let catchEl = $('#addForm');
        let dataObj = createDataJson(catchEl);
        request('Post', `/biggestCatches`, dataObj).then(loadAllCatches).catch(handleError);
    }

    function createDataJson(catchEl) {
        return {
            angler: catchEl.find('.angler').val(),
            weight: +catchEl.find('.weight').val(),
            species: catchEl.find('.species').val(),
            location: catchEl.find('.location').val(),
            bait: catchEl.find('.bait').val(),
            captureTime: +catchEl.find('.captureTime').val()
        }
    }

    function handleError(err) {
        console.warn(`Error: ${err}`);
    }
}