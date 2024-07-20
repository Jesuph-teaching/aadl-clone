import { Link, useRouter } from "expo-router";
import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Checkbox, List, Text } from "react-native-paper";

export default function Policy() {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const [checked, setChecked] = React.useState(false);
  const router = useRouter();
  const handlePress = (id: string) => () =>
    setExpanded(id === expanded ? null : id);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 20,
        }}
      >
        <Text variant="displaySmall">
          The rules to participate in AADL 2024
        </Text>
      </View>

      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded === "0"}
            onPress={handlePress("0")}
          >
            <List.Item
              title="First item"
              description="dfsg sdfhger sdhfds hrs hrtdfg hd shtr hxfgh sd"
            />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded === "1"}
            onPress={handlePress("1")}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded === "2"}
            onPress={handlePress("2")}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 20,
        }}
      >
        <Text>I agree to the terms and conditions of the AADL 2024</Text>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <Button
        onPress={() => {
          router.replace("/register/form");
        }}
        disabled={!checked}
        labelStyle={{
          fontSize: 24,
          lineHeight: 24,
        }}
        mode="contained"
        style={{
          marginTop: 50,
          padding: 10,
          width: "80%",
          marginBottom: 40,
        }}
      >
        go to form
      </Button>
    </View>
  );
}
