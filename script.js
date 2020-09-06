$(document).ready(function() {

    $("header").click(function() {

        if ($(this).parent().hasClass("active")) {

            $("section").removeClass("active");

            $(this).parent().toggleClass("active");

        } else {
            $("section").removeClass("active");

        }
        $(this).parent().toggleClass("active");



        const headerText = $(this).children(".title").text();

        $(".container").html(`<h1>${headerText}</h1><p>loremsfjskfbjfhfhfg</p>
        <p id="1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veniam ab labore tempora, cumque adipisci nam error fugit sequi iusto, delectus assumenda animi quis a voluptas aut laudantium repellendus ratione?</p>
        <p id="2">this a second lorem <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veniam ab labore tempora, cumque adipisci nam error fugit sequi iusto, delectus assumenda animi quis a voluptas aut laudantium repellendus ratione?</p>
        <p id="3">this a third lorem <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veniam ab labore tempora, cumque adipisci nam error fugit sequi iusto, delectus assumenda animi quis a voluptas aut laudantium repellendus ratione</p>
        <p id="4">this a fourth lorem <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veniam ab labore tempora, cumque adipisci nam error fugit sequi iusto, delectus assumenda animi quis a voluptas aut laudantium repellendus ratione</p>`);

    });
});