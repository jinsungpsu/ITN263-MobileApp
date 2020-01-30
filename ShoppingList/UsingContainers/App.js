
import React from 'react';
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';
import Constants from 'expo-constants';

import styles from "./Styles"

export default function App() {
  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Text style={styles.shopCaption}>Item 1 </Text>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.shopCaption}>Item 2 </Text>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.shopListImages} />
      </View>
    </View>
  );
}

