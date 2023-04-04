$("#btn_1").click(function() {
    $("#div_1").animate({ height: "100px", width: "100px" }, 3000, function() {
        $("#div_1").animate({ backgroundColor: "blue" }, 5000, function() {
            $("#div_1").html("<h2>Animacja zakonczona</h2>")
        });
    });
});