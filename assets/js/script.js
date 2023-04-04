
var APIKey = "daf6739626e4defe871d6e34398cd5af"
var searchInput = document.getElementById("searchvalue");
var searchButton = document.getElementById("searchbtn");

searchButton.addEventListener("click", function(event){
    var city = searchInput.value;
    var weatherurl = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial")

    event.preventDefault()
    console.log(city);

    fetch(weatherurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.name)
      console.log(data.weather)
      console.log(data.weather[0].description)
      console.log(weatherurl)
        var cityNameEl= document.getElementById("cityName")
        cityNameEl.innerHTML= (data.name)
        var cityDataCardEl= document.getElementById("cityDataCard")
        cityDataCardEl.innerHTML= ("Weather: " + data.weather[0].description)
        var cityDataCardTemp= document.getElementById("cityDataCardTemp")
        cityDataCardTemp.innerHTML= ("Temp: " + data.main.temp + "°F")
        var cityDataCardHumid= document.getElementById("cityDataCardHumid")
        cityDataCardHumid.innerHTML = ("Humidity: " + data.main.humidity)
        var cityDataCardWind= document.getElementById("cityDataCardWind")
        cityDataCardWind.innerHTML = ("Wind: " + data.wind.speed + "mph")
    })
    .catch(error => {
      console.log(error)
    });

});