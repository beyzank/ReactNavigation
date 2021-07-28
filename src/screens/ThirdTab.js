import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ThirdTab = props => {

  return <TouchableOpacity style={props.style.tab} onPress={() => {
    props.navigation.emit({
      type: "tabPress",
      target: "ThirdTab",
      canPreventDefault: true,
    });

    props.navigation.navigate("ThirdTab");
  }}>
    <Icon name="star" size={props.iconSize} color="#613f75" style={props.style.iconStyle} />
    <Text style={{ ...props.style.textStyle }}>ThirdTab</Text>

  </TouchableOpacity>;
};

export default ThirdTab;
