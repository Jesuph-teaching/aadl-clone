import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Button, Pressable } from "react-native";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerLeft: ({ tintColor }) => (
            <Pressable
              onPress={() => alert("Menu button pressed")}
              style={{
                marginLeft: 10,
                padding: 5,
                backgroundColor: "rgba(150, 150, 150, 0.1)",
                borderRadius: 5,
              }}
            >
              <Ionicons name="menu" size={24} color={tintColor} />
            </Pressable>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="information"
        options={{
          headerTitle: "Personal Information",
          headerTitleAlign: "center",
          tabBarLabel: "Personal Information",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
