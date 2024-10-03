const temperature = 17;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16)
  );
}

function displayWindChill() {
  const weatherSection = document.getElementById("weather");
  let windChill = "N/A";

  if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(2); // Calculate wind chill
  }

  weatherSection.textContent = `Wind Chill: ${windChill} °F`;
}

const temperatureElement = document.getElementById("temperature");
temperatureElement.textContent = `${temperature} °C`;

const conditionsElement = document.getElementById("conditions");
conditionsElement.textContent = "Sunny";

const windElement = document.getElementById("wind");
windElement.textContent = `${windSpeed} km/h`;

const windChillElement = document.getElementById("windChill");
windChillElement.textContent = "9.8°C";

const date = new Date();

function getCurrentYear(date) {
  return date.getFullYear();
}

function getLastModified(date) {
  return `${new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  }).format(date)}`;
}

const currentYearElement = document.getElementById("currentyear");
currentYearElement.innerHTML = getCurrentYear(date);

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.innerHTML = `Last Updated: ${getLastModified(date)}`;
lastModifiedElement.classList.add("footer__text-accent");