function attachEvents() {
    $('#btnLoadTowns').on('click', async function () {
        //$('#root').empty();
        let towns = await $.get('./templates/towns.hbs');
        let townsTemplates = Handlebars.compile(towns);
        let data = $('#towns').val()
                              .split(',')
                              .map(w => ({ town: w.trim() }))
                              .filter(w => w.town !== '');
        let obj = {
            towns: data
        };
        let html = townsTemplates(obj);
        $('#root').append(html);
        $('#towns').val('');
    })
}