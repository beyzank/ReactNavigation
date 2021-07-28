import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const HomeTab = props => {

  return <TouchableOpacity style={props.style.tab} onPress={() => {
    props.navigation.emit({
      type: "tabPress",
      target: "HomeTab",
      canPreventDefault: true,
    });

    props.navigation.navigate("Home");
  }}>
    <Icon name="home" size={props.iconSize} color="#f15152" style={props.style.iconStyle} />
    <Text style={{ ...props.style.textStyle }}>HomeTab</Text>
  </TouchableOpacity>;
};


export default HomeTab;
