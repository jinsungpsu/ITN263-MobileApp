import React, {
  Component
} from 'react';

import {
  Text, View
} from 'react-native';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);


    this.state = { 
      todoText: "Loading",
      todoResponse: null
    };

    this.todoFetch();

  }
  
  todoFetch = async() => {
    try {
      let todoData = await fetch('https://jsonplaceholder.typicode.com/users/1/todos',{method: 'GET'});
      let tempData = await todoData.text();
      var parsedData = JSON.parse(tempData);
      this.setState({todoResponse:parsedData});
      this.setState({todoText: this.state.todoResponse[0].title + "\n" + this.state.todoResponse[1].title});
    }
    catch(error) {
      console.log(error);
      this.setState({weatherText: 'Error loading.  Maximum requests exceeded.'});
    }
  }
  
  render() {
    
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Awesome To Do App</Text>
        <Text>{this.state.todoText}</Text>
      </View>
    )
  }
}
