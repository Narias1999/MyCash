import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Colors from "./../constants/Colors";
import Invest from "./../components/Invest";
const { tintColor } = Colors;
export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      invests: [
        {
          category: "food",
          value: "$ 100.000",
          kind: "spend",
          description: "This is the description",
          hour: "12:00 am"
        },
        {
          category: "food",
          value: "$ 200.000",
          kind: "recieve",
          description:
            "It's my fucking cash and I will spend it on whatever I want",
          hour: "1:00 pm"
        },
        {
          category: "food",
          value: "$ 100.000",
          kind: "spend",
          description: "This is the description",
          hour: "12:00 am"
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.invests.map((el, i) => (
          <Invest {...el} key={i} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: tintColor
  }
});
