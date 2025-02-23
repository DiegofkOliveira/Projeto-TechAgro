/* eslint-disable react/prop-types */
function WeatherInformations5Days({ weather5Days }) {

  let dailyForecast = {}

    for (let forecast of weather5Days.data.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
    
        if (!dailyForecast[date]) {
            dailyForecast[date] = { ...forecast, rainTotal: forecast.rain?.["3h"] || 0 };
          } else {
            dailyForecast[date].rainTotal += forecast.rain?.["3h"] || 0;
          }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(0, 5)


    function convertDate(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', {weekday : 'long', day : '2-digit'})

        return newDate
    }
    

    console.log(next5DaysForecast)
    return (
        <div className="w-full h-auto gap-4 flex flex-col items-center justify-between md:flex-row md:h-64 lg:flex-row lg:px-24 lg:h-64">
            {next5DaysForecast.map(forecast => (
                <div key={forecast.dt} className="w-full flex flex-col items-center border-t border-green-100 justify-center gap-1 md:border-none">
                    <p className="capitalize bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 md:text-sm lg:text-xl">{convertDate(forecast)} </p>
                    <img className="w-16 h-16" src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                    <p className="text-base text-green-100 font-kanadaka font-normal lg:text-lg">{Math.round(forecast.main.temp)}ºC</p>
                    <p className="text-mg text-white capitalize font-light md:text-sm lg:text-lg">{forecast.weather[0].description}</p>
                    <p className="text-base text-green-100 font-kanadaka font-normal lg:text-lg">{forecast.rainTotal.toFixed(1)} mm</p>
                    <p className="font-light text-white font-kanadaka text-base md:text-sm md:text-center lg:text-lg">Umidade: {forecast.main.humidity}% </p>
                </div>
            ))}
        </div>
    )
}

//  
export default WeatherInformations5Days;
