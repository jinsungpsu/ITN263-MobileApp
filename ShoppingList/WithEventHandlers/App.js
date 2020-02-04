import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight
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

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressButton.bind(this)} style={styles.touchArea}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
        </TouchableHighlight>
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
    borderWidth: 1
  },
  shopListImages: {
    width: 150,
    height: 100
  },
  touchArea: {
    backgroundColor: 'yellow',
    borderRadius:100
  }
});

export default ButtonBasics;
