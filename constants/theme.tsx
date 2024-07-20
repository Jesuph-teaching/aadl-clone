import { MD3LightTheme } from "react-native-paper";

export const theme = {
  ...MD3LightTheme,

  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...MD3LightTheme.colors,
    primary: "#fAbA55",
    onPrimary: "#2c256a",
  },
};
