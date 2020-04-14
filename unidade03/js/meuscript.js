$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: '74QBQr4x3oo',
            key: 'AIzaSyDk-fGKJ-2ej8nSd6XG3VAQOv10Myq1U64'},
            function(data) {
                console.log(data);
            }
    )
});