/**
 * Weather App
 */

// API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let API_KEY = "KQ94H0JXII5IWAZ4";
/**
 * Retrieve weather data from openweathermap
 */
// getWeatherData = (city) => {
//   const URL = "https://api.openweathermap.org/data/2.5/weather";
//   const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
//   const weatherPromise = fetch(FULL_URL);
//   return weatherPromise.then((response) => {
//     return response.json();
//   });
// };

getWeatherData = (city) => {
  const URL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol";
  //=IBM&apikey=demo
  const FULL_URL = `${URL}=${city}&apikey=${API_KEY}`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      console.log(res);
      showWeatherData(res);
    })
    .catch((error) => {
      console.log(error);
      console.log("Something happend");
    });
};

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.Name;
  document.getElementById("weather-type").innerText = weatherData.Description;
  document.getElementById("EBITDA").innerText = weatherData.EBITDA;
  document.getElementById("BookValue").innerText = weatherData.BookValue;
  document.getElementById("EPS").innerText = weatherData.EPS;
  document.getElementById("DividendPerShare").innerText =
    weatherData.DividendPerShare;
  document.getElementById("Exchange").innerText = weatherData.Exchange;
  document.getElementById("PEGRatio").innerText = weatherData.PEGRatio;
};
