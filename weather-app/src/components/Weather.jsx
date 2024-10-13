import { useState } from 'react'
import axios from 'axios'

const WeatherCom = () => {

    const [weatherData, setWeatherData] = useState(null)
    
    const [inputCity, setInputCity] = useState('')
    
    const apikey = 'a26d513c1f633ea9e481384213bd1b12';

    const fetchData = async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

        try {

            let response = await axios.get(url)

        setWeatherData(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputCity = (e) => {
        setInputCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputCity(inputCity)
        fetchData(inputCity)
    }

  return (
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 p-6 text-gray-200'>
          <div className='bg-gray-800 p-8 rounded-lg shadow-2xl max-w-lg w-full'>
          
          <h1 className='text-4xl font-bold text-center mb-8 text-teal-400'>Weather Information</h1>
          <form onSubmit={handleSubmit} className='flex justify-between items-center space-x-4 mb-8'>
              <input  type='text' value={inputCity} onChange={handleInputCity}    className="w-full py-3 px-4 bg-gray-700 border border-teal-500 text-teal-400 rounded-lg shadow-inner focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all"></input>
              <button type='submit'>Search</button>
          </form>
          {weatherData ? (
              <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center transition-all">
              <h2 className="text-3xl font-bold text-teal-300 mb-4">{weatherData.name}</h2>
              <div className="flex justify-center items-center space-x-5">
                <p className="text-lg">
                  Temp: <span className="font-semibold text-teal-400">{(weatherData.main.temp - 273.15).toFixed(2)}°C</span>
                </p>
                <p className="text-lg">
                  Humidity: <span className="font-semibold text-teal-400">{weatherData.main.humidity}%</span>
                </p>
              </div>
              <div className="mt-4 flex justify-center items-center space-x-4">
                <p className="text-lg">
                  Weather: <span className="capitalize font-semibold text-teal-400">{weatherData.weather[0].description}</span>
                </p>
                <p className="text-lg">
                  Wind: <span className="font-semibold text-teal-400">{weatherData.wind.speed} m/s</span>
                </p>
              </div>
            </div>      
              
          ) : (
                  <p>Enter a city to get weather data</p>
                  
          )}

      
          </div>
          </div>
  )
}

export default WeatherCom












// Icons


// import { useState } from 'react';
// import axios from 'axios';
// import { CloudIcon, SunIcon, EyeIcon, ArrowUpIcon } from '@heroicons/react/24/outline'; // Updated import path for v2

// const WeatherCom = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [inputCity, setInputCity] = useState('');
//     const apikey = 'a26d513c1f633ea9e481384213bd1b12';

//     const fetchData = async (city) => {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

//         try {
//             let response = await axios.get(url);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleInputCity = (e) => {
//         setInputCity(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetchData(inputCity);
//     };

//     return (
//         <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 p-6 text-gray-200'>
//             <div className='bg-gray-800 p-8 rounded-lg shadow-2xl max-w-lg w-full'>
//                 <h1 className='text-4xl font-bold text-center mb-8 text-teal-400'>Weather Information</h1>
//                 <form onSubmit={handleSubmit} className='flex justify-between items-center space-x-4 mb-8'>
//                     <input 
//                         type='text' 
//                         value={inputCity} 
//                         onChange={handleInputCity}    
//                         className="w-full py-3 px-4 bg-gray-700 border border-teal-500 text-teal-400 rounded-lg shadow-inner focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all" 
//                     />
//                     <button type='submit' className="text-teal-400 hover:text-teal-200">Search</button>
//                 </form>
//                 {weatherData ? (
//                     <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center transition-all">
//                         <h2 className="text-3xl font-bold text-teal-300 mb-4">{weatherData.name}</h2>
//                         <div className="flex justify-center items-center space-x-5">
//                             <p className="text-lg flex items-center">
//                                 <SunIcon className="h-6 w-6 text-teal-400 mr-2" />
//                                 Temp: <span className="font-semibold text-teal-400">{(weatherData.main.temp - 273.15).toFixed(2)}°C</span>
//                             </p>
//                             <p className="text-lg flex items-center">
//                                 <EyeIcon className="h-6 w-6 text-teal-400 mr-2" />
//                                 Humidity: <span className="font-semibold text-teal-400">{weatherData.main.humidity}%</span>
//                             </p>
//                         </div>
//                         <div className="mt-4 flex justify-center items-center space-x-4">
//                             <p className="text-lg flex items-center">
//                                 <CloudIcon className="h-6 w-6 text-teal-400 mr-2" />
//                                 Weather: <span className="capitalize font-semibold text-teal-400">{weatherData.weather[0].description}</span>
//                             </p>
//                             <p className="text-lg flex items-center">
//                                 <ArrowUpIcon className="h-6 w-6 text-teal-400 mr-2" />
//                                 Wind: <span className="font-semibold text-teal-400">{weatherData.wind.speed} m/s</span>
//                             </p>
//                         </div>
//                     </div>      
//                 ) : (
//                     <p>Enter a city to get weather data</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default WeatherCom;
