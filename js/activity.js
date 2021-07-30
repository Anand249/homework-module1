$(document).ready(function () {
    $('td').click(function () {
        var cellValue = $(this).text();
        var color = $(this).css('background-color');
        if (color == 'rgb(160, 201, 44)') {
            $(this).addClass('b');
        }
        if (cellValue !== 'Not Available') {
            $(this).addClass('a');
        }
    })
});
