$("#clicker").click(function() {
    $(document).ready(function() {
        $.ajax({
                url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
                statusCode: {
                    200: function() {
                        console.log('200 works');
                    }
                },
                dataType: 'json',
            })
            .done(function(data) {
                console.log(data);
                $('#button').append("<div id='dane-programisty'>Imie: " + data.imie + "<br/>Nazwisko: " +
                    data.nazwisko + "<br/>Zawod: " +
                    data.zawod + "<br/>Firma: " +
                    data.firma + "</div>");
            });
    });
});