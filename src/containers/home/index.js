import React from "react";
// Custom
import NavLink from "../../components/Link";
// Regular link
import Link from "next/link";
import { View, Text } from "react-native";
import { platform } from "renative";
import paths from "../../config/paths";

const isWeb = platform === "web";
const isMobile = platform === "ios" || platform === "android";

const Home = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {isWeb && (
        <NavLink
          to={paths.profile("24i")}
          name="Custom Link - profile (test)"
        />
      )}

      {isMobile && <Text>Profile</Text>}
      {isWeb && (
        <>
          <Text>Profile</Text>
          <Link href={paths.profile("24i").href} as={paths.profile("24i").as}>
            <a>Go to profile page</a>
          </Link>
        </>
      )}

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

export default Home;
