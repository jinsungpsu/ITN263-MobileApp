import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

//https://reactjs.org/docs/conditional-rendering.html

class Favorite extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let fave;

    if (this.props.isFave) {
      fave = <Text>This is a fave!</Text>;
    } else {
      fave = <Text>This is NOT a fave!</Text>;
    }

    return (
      <View>
        {fave}
      </View>
    );
  }
}

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() { 
    
    return (

      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{item.name}</Text>
              <Favorite isFave={item.favorite}/>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
