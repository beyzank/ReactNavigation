import * as React from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const MyStack = props => {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="First">
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
          <Stack.Screen name="Third" component={ThirdScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default MyStack;
