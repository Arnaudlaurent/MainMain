import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../Components/HomePage";
import SettingsPage from "../Components/SettingsPage";
import React from "react";
import StoryboardPage from "../Components/StoryboardPage";
import NightLightPage from "../Components/NightLightPage";
import LSFPage from "../Components/LSFPage";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import StoryDetail from "../Components/StoryDetail";
import StoryList from "../Components/StoryList";
import ProfilPage from "../Components/ProfilPage";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="StoryboardPage"
      barStyle={{ backgroundColor: "#caaffe" }}
    >
      <Stack.Screen
        name="StoryList"
        component={StoryList}
        options={{
          title: "Histoires",
          headerStyle: {
            backgroundColor: "white",
          },
          hearderTintColor: "black",
          headerBackTitleStyle: { color: "white" },
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 23,
            color: "black",
          },
        }}
      />

      <Stack.Screen
        name="StoryDetail"
        component={StoryDetail}
        options={{
          title: "Lecture",
          headerStyle: {
            backgroundColor: "white",
            borderRadius: 0,
          },
          hearderTintColor: "#fff",
          headerBackTitleStyle: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
            fontSize: 23,
            marginLeft: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      barStyle={{ backgroundColor: "#caaffe" }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: "Accueil",
          headerStyle: {
            backgroundColor: "white",
          },
          hearderTintColor: "black",
          headerBackTitleStyle: { color: "white" },
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 23,
            color: "black",
          },
        }}
      />
      <Stack.Screen name="Profil" component={ProfilPage} />
    </Stack.Navigator>
  );
}

function SettingStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SettingsPage"
      barStyle={{ backgroundColor: "#caaffe" }}
    >
      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          title: "Paramètres",
          headerStyle: {
            backgroundColor: "white",
          },
          hearderTintColor: "black",
          headerBackTitleStyle: { color: "white" },
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 23,
            color: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

class NavigationTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor="#4d4d4d"
        inactiveColor="#ffff"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Accueil"
          component={HomeStackNavigator}
          style={styles.icons}
          options={{
            title: "Acccueil",
            tabBarLabel: "Accueil",
            tabBarIcon: () => {
              return <Icon size={26} name="home" color="#caaffe" />;
            },
          }}
        />

        <Tab.Screen
          name="Histoires"
          component={MainStackNavigator}
          style={styles.icons}
          options={{
            tabBarLabel: "Histoires",
            tabBarIcon: () => {
              return <Icon size={27} name="book" color="#caaffe" />;
            },
          }}
        />

        <Tab.Screen
          name="Paramètres"
          component={SettingStackNavigator}
          style={styles.icons}
          options={{
            title: "Paramètres",
            tabBarLabel: "Paramètres",
            tabBarIcon: () => {
              return <Icon size={27} name="setting" color="#caaffe" />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = {
  icons: {
    fontFamily: "Helvetica-Bold",
    backgroundColor: "black",
  },
};

export default NavigationTabs;
