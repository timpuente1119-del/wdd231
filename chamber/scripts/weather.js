const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');
const foreCast = document.querySelector('#forecast');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.059&lon=-112.044&units=imperial&appid=4879c94e57a141560dfa77db776dd3e0";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=33.059&lon=-112.044&appid=4879c94e57a141560dfa77db776dd3e0";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else{
            throw new Error(await response.text())
        }
    }catch(error){
        console.error(error);

    }
};
 apiFetch();

 async function forecastFetch (){
    try{
        const forecastResponse = await fetch(forecastURL);
        if(forecastResponse.ok){
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else{
            throw new Error(await forecastResponse.text())
        }
    }catch(error){
        console.error(error);
    }
 }

 forecastFetch();

 function displayResults(data){
    currentTemp.innerHTML= `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    figCaption.textContent = desc;
    
 };

 const displayForecast = (days) => {
    // used AI for suggestions on how to only get 3 days
    const threeDays = days.list.filter((item) => item.dt_txt.includes("18:00:00")).slice(0, 3);
    // 
    threeDays.forEach((day) => {
        let card = document.createElement('figure');
        let min = document.createElement('p');
        let max = document.createElement('p');
        let date = document.createElement('p');
        let icon = document.createElement('img');
        let desc = document.createElement('figcaption')

        
        // AI suggested this format to help make the date readable
        const readableDate = new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });


        min.innerHTML = `Low: ${day.main.temp_min}`;
        max.innerHTML = `High: ${day.main.temp_max}`;
        date.innerHTML = readableDate;

        icon.setAttribute('src', `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`);
        icon.setAttribute('alt', day.weather[0].description);
        desc.innerHTML = `${day.weather[0].description}`;

        card.appendChild(min);
        card.appendChild(max);
        card.appendChild(date);
        card.appendChild(icon);
        card.appendChild(desc);

        foreCast.appendChild(card);




    });

 }