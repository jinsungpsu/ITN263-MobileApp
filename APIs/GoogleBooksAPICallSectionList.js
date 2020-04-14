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
        <FlatList
          data={this.state.dataSource.items}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <SectionList
          sections={[
            { title: 'Title: ' + this.state.dataSource.items[0].volumeInfo.title, data: this.state.dataSource.items[0].volumeInfo.authors},
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
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
