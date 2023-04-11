$(document).ready(function() {

    $('#get-data').click(function() {
        //$.getJSON('https://akademia108.pl/api/ajax/get-post.php')

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {
                let pId = $('<p></p>').text(`Post Id: ${data.id}`);
                let puserId = $('<p></p>').text(`User Id: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');

                let jqBody = $('body');
                jqBody.append(pId);
                jqBody.append(puserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);



            })
            .fail(function(error) {
                console.error(error);
            })
    })
})