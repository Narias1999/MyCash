import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import Colors from "./../constants/Colors";
import { MonoText } from "../components/StyledText";
import Radio from "./../components/Radios";

const { tintColor, primaryText } = Colors;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      transferenceOptions: [
        { label: "Spend", value: "spend" },
        { label: "Recieve", value: "recieve" }
      ],
      selectedTransferenceType: 0
    };
  }

  onPress = index =>
    this.setState({
      selectedTransferenceType: index
    });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.title}>Hi Nicolás Mateo</Text>
          <Text style={styles.tabBarInfoText}>Your actual cash is</Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>$ 1'300.000</MonoText>
          </View>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.header}>Make a movement</Text>
          <View style={styles.fromField}>
            <Radio
              elements={this.state.transferenceOptions}
              selected={this.state.selectedTransferenceType}
              onPress={this.onPress}
            />
          </View>
          <View style={styles.fromField}>
            <TextInput
              style={styles.input}
              placeholder="Cash quantity"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.fromField}>
            <TextInput
              style={styles.input}
              placeholder="Description"
              keyboardType="default"
              multiline={true}
              numberOfLines={3}
            />
          </View>
          <View style={styles.fromField}>
            <Button title="Register" color={tintColor} onPress={this.onPress} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 230,
    paddingHorizontal: 25
  },
  fromField: {
    paddingVertical: 15
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#EDE3D0",
    color: primaryText
  },
  header: {
    color: primaryText,
    fontWeight: "bold",
    fontSize: 22,
    paddingBottom: 5
  },
  codeHighlightText: {
    color: "#FFF4E0",
    paddingVertical: 5,
    fontSize: 16
  },
  tabBarInfoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    elevation: 20,
    alignItems: "center",
    backgroundColor: tintColor,
    paddingTop: 60,
    paddingBottom: 50
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "#FFF4E0",
    textAlign: "center"
  }
});
