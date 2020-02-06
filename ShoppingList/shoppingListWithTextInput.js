import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';


class ButtonBasics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopItem: '',
      shopQty: ''
    };
  }
  onPressButton() {
    Alert.alert('Added ' + this.state.shopItem + ' ' + this.state.shopQty);
  }

  onPressTH() {
    Alert.alert('Event banana area');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchArea} onPress={this.onPressTH.bind(this)}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
        </TouchableHighlight>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
        <KeyboardAvoidingView style={styles.addItemArea} behavior="padding" enabled keyboardVerticalOffset='200'>
          <TextInput style={styles.txtField}
            placeholder="Shopping Item: "
            onChangeText={(shopItem) => this.setState({ shopItem })}
          />
          <TextInput style={styles.txtField}
            placeholder="Quantity"
            onChangeText={(shopQty) => this.setState({ shopQty })}
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.onPressButton.bind(this)}
              title="Press Me"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtField: {
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1
  },
  shopListImages: {
    width: 150,
    height: 100
  },
  touchArea: {
    backgroundColor: 'yellow',
    borderRadius: 100
  },
  addItemArea: {
    flexDirection: 'row'
  }
});

export default ButtonBasics;
