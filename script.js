// picture-gallery

$(document).ready(function () {

    $(".center").slick({
        //szamitogep
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                //tablet
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '20px',
                    slidesToShow: 2
                }
            },
            {
                //mobil
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            }
        ]
    });


});

// webshop

document.getElementById('subtraction-1').addEventListener('click', function () {
    kivon(1)
})
document.getElementById('subtraction-2').addEventListener('click', function () {
    kivon(2)
})
document.getElementById('subtraction-3').addEventListener('click', function () {
    kivon(3)
})
document.getElementById('subtraction-4').addEventListener('click', function () {
    kivon(4)
})

document.getElementById('addition-1').addEventListener('click', function () {
    hozzaad(1)
})
document.getElementById('addition-2').addEventListener('click', function () {
    hozzaad(2)
})
document.getElementById('addition-3').addEventListener('click', function () {
    hozzaad(3)
})
document.getElementById('addition-4').addEventListener('click', function () {
    hozzaad(4)
})

document.getElementById('delete_cart').addEventListener('click', kosar_torles)

function hozzaad(value) {
    let pieces = document.getElementById(`value-${value}`)
    let int_pieces = parseInt(pieces.innerHTML)
    int_pieces++
    pieces.innerHTML = int_pieces
    kosar()

}

function kivon(value) {
    let pieces = document.getElementById(`value-${value}`)
    let int_pieces = parseInt(pieces.innerHTML)
    if (int_pieces != 0) {
        int_pieces--
        pieces.innerHTML = int_pieces
    }
    kosar()
}

function kosar() {

    let cartItems = document.getElementById("cart-items");

    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    let pieces_value_1 = document.getElementById(`value-1`)
    let int_pieces_value_1 = parseInt(pieces_value_1.innerHTML)
    let pieces_value_2 = document.getElementById(`value-2`)
    let int_pieces_value_2 = parseInt(pieces_value_2.innerHTML)
    let pieces_value_3 = document.getElementById(`value-3`)
    let int_pieces_value_3 = parseInt(pieces_value_3.innerHTML)
    let pieces_value_4 = document.getElementById(`value-4`)
    let int_pieces_value_4 = parseInt(pieces_value_4.innerHTML)

    let total = document.getElementById(`cart-total`)
    let int_total = parseInt(total.innerHTML)

    total.innerHTML = int_pieces_value_1 * 20000 + int_pieces_value_2 * 6000 + int_pieces_value_3 * 2000 + int_pieces_value_4 * 8000

    if (int_pieces_value_1 != 0) {
        let kosar_elemek = document.getElementById("cart-items")
        let mez = document.createElement("li")

        mez.classList.add("list-items")

        let mezImage = document.createElement("img")
        mezImage.src = "webshop/mez.jpg"
        mezImage.alt = "mez"
        mezImage.style.width = "50px"
        mezImage.style.height = "auto"
        mez.appendChild(mezImage)

        mez.innerHTML += (`Válogatott mez: ${int_pieces_value_1} db x 20000 Ft = ${int_pieces_value_1 * 20000} Ft`)
        kosar_elemek.appendChild(mez)
    }

    if (int_pieces_value_2 != 0) {
        let kosar_elemek = document.getElementById("cart-items")
        let sal = document.createElement("li")

        sal.classList.add("list-items")

        let salImage = document.createElement("img")
        salImage.src = "webshop/sal.jpg"
        salImage.alt = "sal"
        salImage.style.width = "50px"
        salImage.style.height = "auto"
        sal.appendChild(salImage)

        sal.innerHTML += (`Szurkolói sál: ${int_pieces_value_2} db x 6000 Ft = ${int_pieces_value_2 * 6000} Ft`)
        kosar_elemek.appendChild(sal)
    }

    if (int_pieces_value_3 != 0) {
        let kosar_elemek = document.getElementById("cart-items")
        let kulcstarto = document.createElement("li")

        kulcstarto.classList.add("list-items")

        let kulcstartoImage = document.createElement("img")
        kulcstartoImage.src = "webshop/kulcstarto.jpg"
        kulcstartoImage.alt = "kulcstarto"
        kulcstartoImage.style.width = "50px"
        kulcstartoImage.style.height = "auto"
        kulcstarto.appendChild(kulcstartoImage)

        kulcstarto.innerHTML += (`Kulcstartó: ${int_pieces_value_3} db x 2000 Ft = ${int_pieces_value_3 * 2000} Ft`)
        kosar_elemek.appendChild(kulcstarto)
    }

    if (int_pieces_value_4 != 0) {
        let kosar_elemek = document.getElementById("cart-items")
        let sapka = document.createElement("li")

        sapka.classList.add("list-items")

        let sapkaImage = document.createElement("img")
        sapkaImage.src = "webshop/sapka.jpg"
        sapkaImage.alt = "Sapka"
        sapkaImage.style.width = "50px"
        sapkaImage.style.height = "auto"
        sapka.appendChild(sapkaImage)

        sapka.innerHTML += (`Sapka: ${int_pieces_value_4} db x 8000 Ft = ${int_pieces_value_4 * 8000} Ft`)
        kosar_elemek.appendChild(sapka)
    }

}

function kosar_torles() {
    let pieces_value_1 = document.getElementById(`value-1`)
    let pieces_value_2 = document.getElementById(`value-2`)
    let pieces_value_3 = document.getElementById(`value-3`)
    let pieces_value_4 = document.getElementById(`value-4`)
    let total = document.getElementById(`cart-total`)
    total.innerHTML = 0
    pieces_value_1.innerHTML = 0
    pieces_value_2.innerHTML = 0
    pieces_value_3.innerHTML = 0
    pieces_value_4.innerHTML = 0

    let cartItems = document.getElementById("cart-items");

    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

}

// JQUERY form validálás

$(document).ready(function () {
    //ide jön a rules és a messages rész
    $("#myform").validate({
        rules: {
            name: "required",
            address: "required",
            city: "required",
            postalcode: {
                required: true,
                digits: true,
                maxlength: 4,
                minlength:4,
            },
            phone: {
                required: true,
                minlength:9,
                maxlength: 11,
                digits: true,
            },
            email: {
                required: true,
                email: true,
            },
            shippingmethod: {
                required: true,
            },
            paymentmethod: {
                required: true,
            },
        },
        messages: {
            name: " Kérlek, írd be a teljes neved!",
            address: "Kérlek, add meg a szállítási címed!",
            city: "Kérlek, add meg a várost!",
            postalcode: {
                required: "Kérlek, add meg az irányítószámot!",
                digits: "Kérlek, csak számot írj be!",
                 minlength: "Az irányítószámnak pontosan 4 számjegyűnek kell lennie!",
                maxlength: "Az irányítószámnak pontosan 4 számjegyűnek kell lennie!"
            },
            phone: {
                required: "Kérlek, add meg a telefonszámod!",
                minlength: "A telefonszám túl rövid!",
                maxlength: "A telefonszám túl hosszú!",
                digits: "Kérlek, csak számot írj be!",
            },
            email: "Kérlek, valós email címet adj meg!",
            shippingmethod: {
                required: "Kérlek, adj meg egy szállítási lehetőséget!",
            },
            paymentmethod: {
                required: "Kérlek, adj meg egy fizetési lehetőséget!",
            },
        },

        errorPlacement: function (error, element) {
            if (element.attr("name") == "shippingmethod") {
                error.appendTo("#shipping-error");
            } else if (element.attr("name") == "paymentmethod") {
                error.insertAfter("#payment-method");
            } else {
                error.insertAfter(element);
            }
        }
        
    
    });
});