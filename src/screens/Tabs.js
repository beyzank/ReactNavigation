import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import SecondTabScreen from "./SecondTabScreen";
import ThirdTabScreen from "./ThirdTabScreen";
import CustomTabBar from "./CustomTabBar";

const Tabs = () => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={MyStack}/>
        <Tab.Screen name="SecondTab" component={SecondTabScreen}  />
        <Tab.Screen name="ThirdTab" component={ThirdTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tabs;
