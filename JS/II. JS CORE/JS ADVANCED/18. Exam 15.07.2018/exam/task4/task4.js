function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    
    $(".custom-select").on('input', function () {
        $(".button").prop("disabled", false);
    });


    $('#submit').on('click', function () {
        let product = $('.custom-select').val();
        let price = $('#price').val();
        let quantity = $('#quantity').val();
        let ul = $('.display');
        ul.append($('<li>').text(`Product: ${product} Price: ${price} Quantity: ${quantity}`));

        let totalQuantity = $('#capacity').val();
        let capacity = Number(quantity) + Number(totalQuantity);
        $('#capacity').val(capacity);

        let totalPrice = $('#sum').val();
        let sum = Number(price) + Number(totalPrice);
        $('#sum').val(sum);

        if (capacity >= 150) {
            $('#capacity').addClass('fullCapacity').val('full');
            $('.custom-select').val('');
            $('#price').attr("disabled", "disabled").val('');
            $('#quantity').attr("disabled", "disabled").val('');
            $('.custom-select').attr("disabled", "disabled");
        }

        $('.custom-select').val('');
        $('#price').val('1');
        $('#quantity').val('1');

        $(".button").prop("disabled", true);
    })
}
