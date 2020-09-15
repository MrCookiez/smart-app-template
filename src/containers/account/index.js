import React from "react";
import Link from "next/link";
import { View, Text } from "react-native";
import { platform } from "renative";
import paths from "../../config/paths";

const isWeb = platform === "web";
const isMobile = platform === "ios" || platform === "android";

const Account = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {isMobile && <Text>Account</Text>}
      {isWeb && (
        <>
          <Text>Home</Text>
          <Link href={paths.home}>
            <a>Go to home page</a>
          </Link>
        </>
      )}

      {isMobile && <Text>Service</Text>}
      {isWeb && (
        <>
          <Text>Service</Text>
          <Link href={paths.service("24i").href} as={paths.service("24i").as}>
            <a>Go to service page</a>
          </Link>
        </>
      )}
    </View>
  );
};

export default Account;
