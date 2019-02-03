import React, { Component } from "react";
import { TextInput } from "react-native";

class MaskedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maskedValue: ""
    };
  }

  transformText = text => {
    text = text.replace(/[$\.]/g, "");
    this.props.value = text;
    const masked = text ? "$" + text.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";
    this.setState({
      maskedValue: masked
    });
  };

  render() {
    const { style, placeholder, keyboardType } = this.props;
    return (
      <TextInput
        value={this.state.maskedValue}
        style={style}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={this.transformText}
      />
    );
  }
}

export default MaskedInput;
