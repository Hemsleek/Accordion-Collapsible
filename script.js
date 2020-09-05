$(document).ready(function() {

    $("header").click(function() {

        if ($("section").hasClass("active")) {

            $("section").toggleClass("active");
        }

        $(this).parent().toggleClass("active");

        const headerText = $(this).children(".title").text();

        $(".container").html(`<h1>${headerText}</h1><p>loremsfjskfbjfhfhfg</p>`);

    });
});