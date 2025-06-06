function updateTime() {
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM Do, YYYY");
    madridTimeElement.innerHTML = madridTime.format("HH:mm:ss");
  }
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");
  }
}
updateTime();
setInterval(updateTime, 1000);

function displayCity(event) {
  let choosenCity = event.target.value;
  let cityName = choosenCity.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(choosenCity);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="cities-clocks">
          <div>
            <h2 class="city-name">${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;
}
let citiesSelectElement = document.querySelector("#cities-dropdown");
citiesSelectElement.addEventListener("change", displayCity);
