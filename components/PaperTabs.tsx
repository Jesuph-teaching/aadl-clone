import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from "@react-navigation/material-bottom-tabs";
import { EventMapBase, NavigationState } from "@react-navigation/native";

import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialBottomTabNavigator();

export const PaperTabs = withLayoutContext<
  MaterialBottomTabNavigationOptions,
  typeof Navigator,
  NavigationState,
  EventMapBase
>(Navigator);
