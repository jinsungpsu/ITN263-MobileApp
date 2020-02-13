import React, { Component } from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';

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
      <View style={styles.mainView}>
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset='200'>
          <TextInput
            style={styles.formFields}
            placeholder="Name"
            placeholderTextColor="black"
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />
          <TextInput
            style={styles.formFields}
            placeholder="Major"
            placeholderTextColor="black"
            onChangeText={(major) => this.setState({ major })}
            value={this.state.major}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.name + "\n" + this.state.major}

          </Text>
          <Button title="clear" onPress={this.clearHandler.bind(this)} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#C3FFBA'
  },
  formFields: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
    borderWidth: 1
  }
})
