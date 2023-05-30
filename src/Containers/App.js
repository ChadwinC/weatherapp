import React, {Component} from "react";

import Header from "../Components/Header";
import ".//App.css";
import WeatherCards from "../Components/WeatherCards";
import SearchBox from "../Components/SearchBox";

class App extends Component{
constructor(props) {
  super(props);
  this.state = {
    weatherData:[],// define a weather null property
    searchField:"cape town" //predifined value
  };
}

componentDidMount(){
  this.fetchWeatherData();// mounts the data if it has been initiated
   
}
fetchWeatherData = () =>{
    const {searchField} = this.state;
    const url = `http://api.weatherapi.com/v1/current.json?key=788159cff6bf462eac793318232605&q=${searchField}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({weatherData:data}))
      .catch(error =>{
        console.error("Error: ",error);
      });

}

onInputChange = (event) =>{
  this.setState({searchField:event.target.value})
}

onSearch = () =>{
  this.fetchWeatherData();
}


render() { 
    const {weatherData, searchField} = this.state;

    
    
    return weatherData.length?
        <h1>Loading</h1>:
    (
              <div>
                  <Header/>
                  
                      <SearchBox
                      onInputChange={this.onInputChange}
                      onSearch={this.onSearch}
                      />
                        <WeatherCards 
                        name={weatherData?.location?.name} 
                        region={weatherData?.location?.region}
                        country={weatherData?.location?.country}
                        temp={weatherData?.current?.temp_c} 
                        icon={weatherData?.current?.condition?.icon} 
                        text={weatherData?.current?.condition?.text}
                        />
                      
               </div>
            
          );
      }
}

export default App;
