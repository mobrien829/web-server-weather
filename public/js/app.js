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
  errorMessage.innerText = "loading...";
  forecastMessage.innerText = ``;
  fetch(`http://localhost:3000/weather?location=${location}`)
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => setMessage(data));
};

const setMessage = data => {
  if (data.error) {
    return (
      (errorMessage.innerText = `${data.error}`),
      (forecastMessage.innerText = ``)
    );
  }
  errorMessage.innerText = ``;
  forecastMessage.innerText = `${data.forecast}`;
};
