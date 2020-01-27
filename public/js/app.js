console.log("client side JS is loaded");

const searchForm = document.getElementById("search-form");
const formInput = document.getElementById("search-value");
const errorMessage = document.getElementById("error-response");
const forecastMessage = document.getElementById("forecast-response");

searchForm.addEventListener("submit", event => {
  event.preventDefault();

  handleFetch(formInput.value);
});

const handleFetch = location => {
  fetch(`http://localhost:3000/weather?location=${location}`)
    .then(res => res.json())
    .then(data => console.log(data.forecast, data.location));
};
