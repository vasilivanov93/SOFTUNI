$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let source = await $.get(`./cat-template.hbs`);
        let compiled = Handlebars.compile(source);
        let template = compiled({
            cats: window.cats
        });

        $('body').append(template);
        $('button').on('click', (event) => {
            let targetBtn = $(event.target);
            let divInfo = targetBtn.next();
            let textBtn = targetBtn.text();

            if (textBtn.includes('Show')) {
                targetBtn.text(textBtn.replace('Show', 'Hide'))
            } else {
                targetBtn.text(textBtn.replace('Hide', 'Show'))
            }

            divInfo.toggle();  
        })
    }
})
