import React from "react";
import Link from "next/link";
import { View, Text } from "react-native";
import { platform } from "renative";
import paths from "../../config/paths";

const isWeb = platform === "web";
const isMobile = platform === "ios" || platform === "android";

const Profile = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {isMobile && <Text>Account</Text>}
      {isWeb && (
        <>
          <Text>Account</Text>
          <Link href={paths.account("24i").href} as={paths.account("24i").as}>
            <a>Go to account page</a>
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

export default Profile;
