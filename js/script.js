// declaring globallly scoped variables
const API_KEY = 'c62b03b56dd627a3a2f170666d351415'
const BASE_URL = 'openweathermap.org/'
const $cityName = $('#city-name');
const $temperature = $('#temperature')
const $feelsLike = $('#feels-like');
const $weather = $('#weather');
const $form = $('form');
const $input = $('input[type="text"]');
// input field event listener
$form.on('submit', getWeatherData)

// weather fetching function
function getWeatherData(evt) {
    // prevent page refresh
    evt.preventDefault();
    // declaring locally scoped variable to fetch input parameters
    const getWeather = $input.val();
    // resets the input after a search
    $input.val('');

    // ajax request
    $.ajax(`https://api.${BASE_URL}/data/2.5/weather?q=${getWeather}&units=imperial&appid=${API_KEY}`).then(function(data)  {

        weatherData = data;
        render();

    }, function (error) {
        console.log(error);
    });

}


function render(){
    $cityName.text(weatherData.name);
    $temperature.text(weatherData.main.temp);
    $feelsLike.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].description);

}
