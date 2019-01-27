import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "./../constants/Colors";

const { tintColor } = Colors;

function Invest({ category, hour, value, kind, description }) {
  return (
    <View style={styles.invest}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "https://static1.squarespace.com/static/536145d2e4b0c0f6c53f6d5f/t/536aed2be4b0128e37aa920b/1544478913952/"
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.hour}>{hour}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.value}>
          {kind === "spend" ? "-" : "+"} {value}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  invest: {
    backgroundColor: "#fff",
    padding: 6,
    paddingLeft: 0,
    margin: 15,
    marginLeft: 40,
    flex: 1,
    flexDirection: "row",
    borderRadius: 2
  },
  value: {
    fontSize: 15,
    fontWeight: "600",
    color: tintColor
  },
  hour: {
    fontSize: 12,
    paddingTop: 5,
    color: "#aaa"
  },
  imageContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  description: {
    color: "#555"
  },
  infoContainer: {
    paddingRight: 5,
    flex: 1
  }
});

export default Invest;
