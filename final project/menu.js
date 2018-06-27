$(document).ready(function () {
    var uri = "https://api.openweathermap.org/data/2.5/weather?q=New%20York,us&units=imperial&appid=1350efe766beffe716f6b79859c00eff";

    // console.log(uri);
    $.get(uri, onRes);
});



function onRes(response) {
    console.log(response);
    $(".city").html(response.name);
    $(".weather").html(response.weather[0].description);
    if (response.main.temp > 60)
        $(".temp").html("<p>" + response.main.temp + "<br>" + "The suggested drink for this today's weather in New York is a cup of iced tea :" + "</p>");
    $(".temp").append('<img id="theImg" src="https://globalassets.starbucks.com/assets/c2830c76f23247249710e97d532e3e65.jpg" />');
}




