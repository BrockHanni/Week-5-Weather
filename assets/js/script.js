
var APIKey = "daf6739626e4defe871d6e34398cd5af"
var searchInput = document.getElementById("searchvalue");
var searchButton = document.getElementById("searchbtn");

searchButton.addEventListener("click", function(event){
    var city = searchInput.value;
    var weatherurl = ("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)

    event.preventDefault()
    console.log(city);
    console.log("working")

    fetch(weatherurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    });
});