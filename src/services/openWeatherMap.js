import axios from 'axios';

export default async  (cityId, apiKey) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${apiKey}&units=metric&cnt=12`)
    return response.data;
};