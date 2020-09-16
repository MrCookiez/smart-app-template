import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { Api, TVOS, FORM_FACTOR_TV } from "renative";

import { enableScreens } from "react-native-screens";
import App from "./src";

Api.platform = TVOS;
Api.formFactor = FORM_FACTOR_TV;

enableScreens();
AppRegistry.registerComponent("App", () => App);
