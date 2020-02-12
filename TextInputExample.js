import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class Blink extends Component {

  //state object
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      major: ''
    };
  }

  clearHandler() {
    this.setState({
      name: '',
      major: ''
    });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Some more text!"
          onChangeText={(major) => this.setState({major})}
          value={this.state.major}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.name + "\n" + this.state.major}

        </Text>
        <Button title="clear" onPress={this.clearHandler.bind(this)} />
      </View>
    );
  }
}
