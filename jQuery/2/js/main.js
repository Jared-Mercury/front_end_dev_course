$("#btn_1").click(function() {
    $("p").last().prependTo($('#paragraphs'));
});

$("#btn_2").click(function() {
    $("p").first().appendTo($('#paragraphs'));
});