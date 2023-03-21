import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const IPhone14ProMax181 = () => {
  return (
    <View style={[styles.iphone14ProMax181, styles.component49Layout]}>
      <View style={[styles.component49, styles.component49Layout]}>
        <Image
          style={styles.eagleAce11}
          resizeMode="cover"
          source={require("../assets/eagle-ace-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component49Layout: {
    overflow: "hidden",
    height: 932,
  },
  eagleAce11: {
    top: 342,
    left: 145,
    width: 141,
    height: 171,
    position: "absolute",
  },
  component49: {
    top: 0,
    left: 0,
    backgroundColor: "#12a651",
    width: 430,
    position: "absolute",
  },
  iphone14ProMax181: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
  },
});

export default IPhone14ProMax181;
