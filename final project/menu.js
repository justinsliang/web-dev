$(document).ready(function () {
    $("#submit").click(function () {
        //Api Call
        var city = $('.city').val();
        console.log(city);
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=f21554abc6a6b12f74f81c089ec37cb1";
        console.log(uri);
        $.get(uri, onRes);
    });
});


function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    switch (response.weather[0].id) {
        case 801:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="few clouds.png" />');
            break;
        case 802:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="scattered clouds.png" />');
        case 803:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="broken clouds.png" />');
            break;
        case 804:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="broken clouds.png" />');
            break;
        case 200:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 201:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 202:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="weather Thunderstormm.png" />');
            break;
        case 210:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 211:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 212:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 221:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 230:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 231:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 232:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            break;
        case 300:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 301:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 302:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 310:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 311:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 312:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="img/showerrain.png" />');
            break;
        case 313:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 314:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 321:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            break;
        case 500:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 501:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 502:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 503:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 504:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 511:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 520:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 521:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 522:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 531:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            break;
        case 600:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 601:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 602:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 611:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 612:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 615:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 616:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 620:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 621:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 622:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            break;
        case 701:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 711:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 721:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 731:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 741:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;

        case 751:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 761:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 762:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 771:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 781:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            break;
        case 800:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="clear sky.png" />');
            break;
    }
    $(".city-name").html(response.name);
    $(".humidity").html(response.main.humidity);
}





