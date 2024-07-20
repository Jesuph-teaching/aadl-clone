import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function RegisterLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Policy",
          headerTitleAlign: "center",
          headerLeft: ({ tintColor }) => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons name="chevron-back" size={24} color={tintColor} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          headerTitle: "Register",
          headerTitleAlign: "center",
          headerLeft: ({ tintColor }) => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons name="chevron-back" size={24} color={tintColor} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
