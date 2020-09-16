import React from "react";
import Link from "next/link";
import { View, Text } from "react-native";
import { platform } from "renative";
import paths from "../../config/paths";

const isWeb = platform === "web";
const isMobile = platform === "ios" || "android";

const Service = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <Text>Service page</Text>

    {isWeb && (
      <>
        <Text>Profile</Text>
        <Link href={paths.home}>
          <a>Go to profile page</a>
        </Link>
      </>
    )}
  </View>
);

export default Service;
