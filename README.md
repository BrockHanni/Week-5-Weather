# Week-6-Weather
Responsive 5-day weather app using OpenWeather API


# User Story

AS A traveler

I WANT to see the weather outlook for multiple cities

SO THAT I can plan a trip accordingly


# Acceptance criteria

GIVEN a weather dashboard with form inputs

WHEN I search for a city

THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

WHEN I view future weather conditions for that city

THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history

THEN I am again presented with current and future conditions for that city



When the user enters a city into the search bar-
    -The city will then be created into a button under "Recent Searches" to easily be clicked again.
        -These buttons are stored in local storage.
        -There will be a maximum of 5 recent search buttons, which will be deleted as more are entered.
    -The city which they typed in will appear on the top section, along with the current Weather, temp, Humidity, and wind speed.
    -The cities next 5 days forecast will appear on the bottom section, containing dates, weather, and high and low temps.

    Here is a link to the deployed app:
    https://brockhanni.github.io/Week-6-Weather/

    Screenshot of completed app:
    ![Working app image](assets/images/Screenshot%202023-04-03%20221018.jpg)

