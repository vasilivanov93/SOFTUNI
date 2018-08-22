/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />

function attachEvents() {
    $('#btnLoadTowns').on('click', clickBtn);

    async function clickBtn() {
        let towns = $('#towns').val()
                               .split(',')
                               .map(e => ({town: e.trim()}))
                               .filter(e => e.town.length > 0);

        let template = await $.get('./template.hbs');
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            towns: towns
        });

        $('#towns').val('');
          
        $('#root').html(rendered);
    } 
}