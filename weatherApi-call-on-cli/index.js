import axios from 'axios';
import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('Enter the city name : ', async (city)=>{
    const apikey = "e91b4d1a5b6391904de0cb8ff9da0f78";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric}`;
    try{
        const response = await axios.get(url);
        console.log(`The temperature in ${city} is ${response.data.main.feels_like}°C`);
        console.log(`Weather description: ${response.data.weather[0].description}`);
        console.log(`Humidity: ${response.data.main.humidity}%`);
    }
    catch(error){
        console.error("Error fetching data from api", error);
    }
    finally{
        rl.close();
    }
})
