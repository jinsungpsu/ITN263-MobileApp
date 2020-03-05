import React, {
  Component
} from 'react';

import {
  Text, View
} from 'react-native';

export const API_KEY = '1cf6c987ec0fdb7bc68a6c8428059280';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);

    weather = this.fetchWeather();

    this.state = { 
      weather: null,
      weatherText: "Loading..."
    };
  }

  
  fetchWeather() {
    var lat = 25;
    var lon = 25;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log("Successfully fetched!")
        console.log(json.main.temp);
        this.setState({weatherText: json.main.temp});
      });
  }
      
  render() {
    

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.state.weatherText}</Text>
      </View>
    )
  }
}
