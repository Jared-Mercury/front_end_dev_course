let sum = 0;
let x = 0;

$("#count-sum").click(function() {
    if (x < 1) {
        $(".salary").map(function() {
            sum += Number(this.innerHTML);

        });
        x++;
    }
    console.log(sum);
    $("#sum").html(sum);

});