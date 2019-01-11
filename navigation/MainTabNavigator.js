import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HistoryScreen from "./../screens/HistoryScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-home"}
    />
  )
};

const HistoryStack = createStackNavigator({
  History: HistoryScreen
});

HistoryStack.navigationOptions = {
  tabBarLabel: "History",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-paper"} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />
};

export default createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  SettingsStack
});
