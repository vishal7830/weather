
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi");






fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'shanghai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			// cloud_pct.innerHTML = response.cloud_pct
			shanghaiCloud_pct.innerHTML = response.cloud_pct
			shanghaiFeels_like.innerHTML = response.feels_like
			shanghaiHumidity.innerHTML = response.humidity
			shanghaiMin_temp.innerHTML = response.min_temp
			shanghaiMAX_TEMP.innerHTML = response.max_temp
			shanghaiWindSpeed.innerHTML = response.wind_speed
			shanghaiWind_degrees.innerHTML = response.wind_degrees
			shanghaiSUNRISE.innerHTML = response.sunrise
			shanghaiSunset.innerHTML = response.sunset
			shanghaiTemp.innerHTML = response.temp
		})
		.catch(err => console.error(err));


		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'boston', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			// cloud_pct.innerHTML = response.cloud_pct
			bostonCloud_pct.innerHTML = response.cloud_pct
			bostonFeels_like.innerHTML = response.feels_like
			bostonHumidity.innerHTML = response.humidity
			bostonMin_temp.innerHTML = response.min_temp
			bostonMAX_TEMP.innerHTML = response.max_temp
			bostonWindSpeed.innerHTML = response.wind_speed
			bostonWind_degrees.innerHTML = response.wind_degrees
			bostonSUNRISE.innerHTML = response.sunrise
			bostonSunset.innerHTML = response.sunset
			bostonTemp.innerHTML = response.temp
		})
		.catch(err => console.error(err));


		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'lucknow', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			// cloud_pct.innerHTML = response.cloud_pct
			lucknowCloud_pct.innerHTML = response.cloud_pct
			lucknowFeels_like.innerHTML = response.feels_like
			lucknowHumidity.innerHTML = response.humidity
			lucknowMin_temp.innerHTML = response.min_temp
			lucknowMAX_TEMP.innerHTML = response.max_temp
			lucknowWindSpeed.innerHTML = response.wind_speed
			lucknowWind_degrees.innerHTML = response.wind_degrees
			lucknowSUNRISE.innerHTML = response.sunrise
			lucknowSunset.innerHTML = response.sunset
			lucknowTemp.innerHTML = response.temp
		})
		.catch(err => console.error(err));



		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'kolkata', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			// cloud_pct.innerHTML = response.cloud_pct
			kolkataCloud_pct.innerHTML = response.cloud_pct
			kolkataFeels_like.innerHTML = response.feels_like
			kolkataHumidity.innerHTML = response.humidity
			kolkataMin_temp.innerHTML = response.min_temp
			kolkataMAX_TEMP.innerHTML = response.max_temp
			kolkataWindSpeed.innerHTML = response.wind_speed
			kolkataWind_degrees.innerHTML = response.wind_degrees
			kolkataSUNRISE.innerHTML = response.sunrise
			kolkataSunset.innerHTML = response.sunset
			kolkataTemp.innerHTML = response.temp
		})
		.catch(err => console.error(err));