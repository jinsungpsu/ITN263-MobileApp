/*
Example API call:
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAB0FRlzdUgtdwM9eWuXKi71OAKs5D_bSg

Example fetch:
https://snack.expo.io/@jinsungpsu/fetch-example?session_id=snack-session-cAxTaVkH_&preview=true&platform=web&iframeId=48k8zktn64&supportedPlatforms=ios,android,web&name=Fetch%20Example&description=Example%20usage&waitForData=true

Lists:
https://reactnative.dev/docs/0.8/using-a-listview

Topics:
API's
FlatList component
SectionList component

parsing API responses in JSON format - especially dealing with arrays correctly

*/


import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  SectionList,
  Text,
  TouchableOpacity
} from "react-native";
export default class Source extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Book Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 }
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAB0FRlzdUgtdwM9eWuXKi71OAKs5D_bSg")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      />
    );
  }
  renderItem = (data) =>
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.volumeInfo.title}</Text>
      <Text style={styles.lightText}>{data.item.volumeInfo.subtitle}</Text>
    </TouchableOpacity>
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (
      <View style={styles.view}>
        <Text>Finished loading!</Text>
        <FlatList
          data={this.state.dataSource.items}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  }
});
