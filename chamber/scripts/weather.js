async function FetchCurrentWeatherReport(link){
    try{
        const response = await fetch(link);
        const data = await response.json();
        
        return JSON.stringify(data); 

    }catch(error){
        console.log(error)
    }
}

async function  FetchWeatherForecastReport(link){
    try{
        const response = await fetch(link);
        const data = await response.json();
        return JSON.stringify(data); 

       

    }catch(error){
        console.log(error)
    }
}

export { FetchCurrentWeatherReport, FetchWeatherForecastReport };