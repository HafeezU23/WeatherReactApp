import axios from 'axios';

export const Insights = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c3d27a6ca307311ced0d87ddd83a3fd&units=metric`;

    try {
        const response = await axios.get(base);
        const data = response.data;

        if (data.cod === '404') {
            throw new Error('City not found');
        }

        

        return {
            sunsetTime: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
            sunriseTime: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            main: data.weather[0].main,
            time: new Date().toLocaleTimeString(),
            city: data.name,
            wind_degree: data.wind.deg,
            visi: data.visibility,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
        };
    } catch (error) {
        return {
            error: error.message,
        };
    }
};