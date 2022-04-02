const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";

$(document).ready(function () {
    $.get(API_URL,
    function(data){
        $.each(data.results, function(i, item){
            $("#Pokemon").append("<tr><td>" + item.name + "</td><td>" + item.url + "<td></tr>");
        });
    });
});
