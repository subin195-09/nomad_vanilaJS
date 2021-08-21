const API_KEY = "680bca552e3fdfa5a7dd19b18e7c44e6";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	console.log("You live in", lat, ",", lng);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json()).then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");

		weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
		city.innerText = data.name;
	});
}

function onGeoError() {
	alert("Can't find you. NO weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
