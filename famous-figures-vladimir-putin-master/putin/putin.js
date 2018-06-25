$(".btn").click(function () {
    //api call here
    var city = $(".city").val();
    var uri = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",ru$units=si&appid=4e651d58543d2bad33b52678226ee6e6";
    console.log (uri);
    $.get(uri, onRes);
});

function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description);
}
