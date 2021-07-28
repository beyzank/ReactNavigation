import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const SecondTab = props => {

  return <TouchableOpacity style={props.style.tab} onPress={() => {
    props.navigation.emit({
      type: "tabPress",
      target: "SecondTab",
      canPreventDefault: true,
    });

    props.navigation.navigate("SecondTab");
  }}>
    <Icon name="grin-hearts" size={props.iconSize} color="#00b4d8" style={props.style.iconStyle} />
    <Text style={{ ...props.style.textStyle }}>SecondTab</Text>
  </TouchableOpacity>;
};

export default SecondTab;
