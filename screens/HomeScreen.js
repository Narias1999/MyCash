import React from "react";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.title}>Hi Nicolás Mateo</Text>
          <Text style={styles.tabBarInfoText}>Your actual cash is</Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>$ 1'200.000</MonoText>
          </View>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.header}>Make a movement</Text>
          <TextInput placeholder="" />
          <View style={styles.getStartedContainer} />
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
  header: {
    color: "#393E46",
    fontWeight: "bold",
    fontSize: 22
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
    backgroundColor: "#00ADB5",
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
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
