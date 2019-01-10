import React from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import Colors from "./../constants/Colors";
import { View, StyleSheet } from "react-native";

const { tintColor, primaryText } = Colors;

function RadioComponent({ elements, selected, onPress }) {
  return (
    <RadioForm formHorizontal={true}>
      {elements.map((obj, i) => (
        <View key={i} style={styles.radiosContainer}>
          <RadioButton labelHorizontal={true}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={selected === i}
              onPress={() => onPress(i)}
              buttonInnerColor={tintColor}
              buttonOuterColor={selected === i ? tintColor : "#ccc"}
              buttonSize={10}
              buttonOuterSize={23}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={() => onPress(i)}
              labelStyle={{ fontSize: 20, color: primaryText }}
            />
          </RadioButton>
        </View>
      ))}
    </RadioForm>
  );
}

const styles = StyleSheet.create({
  radiosContainer: {
    flex: 1,
    justifyContent: "space-between"
  }
});

export default RadioComponent;
