import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 40,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("@/assets/images/AADL-logo.png")}
        style={{
          width: "90%",
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <Button
        mode="contained"
        style={{
          padding: 8,
        }}
        labelStyle={{
          fontSize: 20,
        }}
        onPress={() => {
          router.push("/register");
        }}
      >
        Register
      </Button>
    </View>
  );
}
