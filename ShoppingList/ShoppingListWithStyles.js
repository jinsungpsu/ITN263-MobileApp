import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.ShoppingListContainer}>
      <Text style={{ fontWeight: 'bold' }}>Shopping List: </Text>
      <Text style={styles.shoppingListText}>Item1: Bananas! </Text>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.ShoppingListImage} />
      <Text style={styles.shoppingListText}>Item2: More Bananas! </Text>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.ShoppingListImage} />
      <Text style={styles.shoppingListText}>Item2: More Bananas! </Text>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.ShoppingListImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  ShoppingListImage: {
    width: 120,
    height: 90
  },
  ShoppingListContainer: {
    marginTop: 30,
    marginLeft: 15
  },
  shoppingListText: {
    textAlign: 'right'
  }
});
