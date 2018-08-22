$(() => {
    async function loadData() {
        let contacts = await $.get('./templates/contacts.hbs');
        let contactsTemplates = Handlebars.compile(contacts);
        let data = await $.get('./data.json');
        let obj = {
            contacts: data
        };
        let htmlContacts = contactsTemplates(obj);
        $('#list').append(htmlContacts);

        $('.contact').on('click', async function () {
            $('#details').empty();
            let details = await $.get('./templates/details.hbs');
            let detailsTemplates = Handlebars.compile(details);
            let htmlDetails = detailsTemplates(data[$(this).attr('data-id')]);
            $('#details').append(htmlDetails);
            $('.contact').removeClass('active');
            $(this).addClass('active');
        });
    }
    loadData();
});