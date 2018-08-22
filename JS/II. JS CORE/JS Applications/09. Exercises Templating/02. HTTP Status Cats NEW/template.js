$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let cats = await $.get('./templates/cats.hbs');
        let catsTemplate = Handlebars.compile(cats);
        let data = window.cats;
        let obj = {
            cats: data
        };
        let html = catsTemplate(obj);
        $('#allCats').append(html);

        $('button').on('click', function (event) {
            let targetBtn = $(event.target);
            let divInfo = targetBtn.next();
            let textBtn = targetBtn.text();
            if (textBtn.includes('Show')) {
                targetBtn.text(textBtn.replace('Show', 'Hide'));
            } else {
                targetBtn.text(textBtn.replace('Hide', 'Show'));
            }
            divInfo.toggle();
        });
    }
});