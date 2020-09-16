import "react-native-gesture-handler";
import { AppRegistry, Platform } from "react-native";
import { Api, IOS, FORM_FACTOR_MOBILE } from "renative";
import { enableScreens } from "react-native-screens";
import App from "./src";

Api.platform = IOS;
Api.formFactor = FORM_FACTOR_MOBILE;

enableScreens();
AppRegistry.registerComponent("App", () => App);
