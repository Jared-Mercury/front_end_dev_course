let sum = 0;

$("#count-sum").click(function() {
    $(".salary").map(function() {
        sum += Number(this.innerHTML);

    });
    console.log(sum);
    $("#sum").html(sum);
});