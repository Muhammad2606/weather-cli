import axios from 'axios'
import { TOKEN_DICTIONARY, getKeyValue } from './stroge.servis.js'


const getWeather = async (city) => {
  
        const token = await getKeyValue(TOKEN_DICTIONARY.token);
        
        if (!token) {
            throw new Error("API key doesn't exist. Use '-t [API_KEY]' to save the token.");
        }

        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: token,
                lang: 'en',
                units: 'metric',
            },
        });

        console.log(data);
        return data;
    

}
export { getWeather };