import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone14ProMax165 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14ProMax165, styles.iconLayout]}>
      <View style={styles.sellWithPrideHappinessParent}>
        <Text
          style={styles.sellWithPride}
        >{`SELL with pride & happiness`}</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-149.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone14ProMax156")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-236.png")}
        />
      </Pressable>
      <View style={[styles.iphone14ProMax167, styles.component33IconPosition]}>
        <Pressable
          style={[
            styles.rectangleParent,
            styles.rectangleLayout,
            styles.rectanglePosition,
          ]}
          onPress={() => navigation.navigate("IPhone14ProMax148")}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-76.png")}
          />
          <View style={[styles.rectangleGroup, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.dhaanPaddy,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              DHAAN (Paddy)
            </Text>
          </View>
        </Pressable>
        <View
          style={[
            styles.rectangleContainer,
            styles.rectangleLayout,
            styles.rectanglePosition,
          ]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-77.png")}
          />
          <View style={[styles.frameView, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.dhaanPaddy,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              GEHU (Wheat)
            </Text>
          </View>
        </View>
        <View
          style={[styles.rectangleParent1, styles.rectangleParentPosition2]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-78.png")}
          />
          <View style={[styles.rectangleParent2, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.dhaanPaddy,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              SARSO (Mustard)
            </Text>
          </View>
        </View>
        <View
          style={[styles.rectangleParent3, styles.rectangleParentPosition2]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-79.png")}
          />
          <View style={[styles.rectangleGroup, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.dhaanPaddy,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              MAKKA (Corn)
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.rectangleParentLayout,
            styles.rectangleParentPosition1,
          ]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-80.png")}
          />
          <View style={[styles.rectangleParent6, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.gannaSugarcane,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              <Text style={styles.ganna}>Ganna (</Text>
              <Text style={styles.sugarcane}>Sugarcane</Text>
              <Text style={styles.ganna}>)</Text>
            </Text>
          </View>
        </View>
        <View
          style={[styles.rectangleParent7, styles.rectangleParentPosition1]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-81.png")}
          />
          <View style={[styles.rectangleParent2, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.dhaanPaddy,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              KELA (Banana)
            </Text>
          </View>
        </View>
        <View
          style={[styles.rectangleParentPosition, styles.rectangleParentLayout]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-82.png")}
          />
          <View style={[styles.rectangleParent6, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text
              style={[
                styles.dhaanPaddy,
                styles.dhaanPaddyTypo,
                styles.dhaanPaddyPosition,
              ]}
            >
              Chana (Gram)
            </Text>
          </View>
        </View>
        <View
          style={[styles.rectangleParent11, styles.rectangleParentPosition]}
        >
          <Image
            style={[
              styles.frameItem,
              styles.frameLayout,
              styles.rectangleLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-83.png")}
          />
          <View style={[styles.rectangleParent2, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameLayout,
              ]}
            />
            <Text style={[styles.surajmukhisunflower, styles.dhaanPaddyTypo]}>
              <Text style={styles.sugarcane}>Surajmukhi</Text>
              <Text style={styles.sunflower}>(Sunflower)</Text>
            </Text>
          </View>
        </View>
        <View style={styles.iphone14ProMax167Child} />
      </View>
      <Image
        style={[styles.component33Icon, styles.component33IconPosition]}
        resizeMode="cover"
        source={require("../assets/component-33.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  component33IconPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 144,
    position: "absolute",
  },
  rectanglePosition: {
    top: 35,
    width: 144,
    overflow: "hidden",
  },
  frameLayout: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  frameParentLayout: {
    height: 25,
    width: 144,
    left: 0,
    position: "absolute",
  },
  dhaanPaddyTypo: {
    color: Color.white,
    fontFamily: FontFamily.iBMPlexSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  dhaanPaddyPosition: {
    top: 2,
    color: Color.white,
    fontFamily: FontFamily.iBMPlexSansRegular,
  },
  rectangleParentPosition2: {
    top: 257,
    width: 144,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParentPosition1: {
    top: 479,
    width: 144,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParentLayout: {
    height: 169,
    left: 41,
  },
  rectangleParentPosition: {
    top: 681,
    width: 144,
    position: "absolute",
    overflow: "hidden",
  },
  sellWithPride: {
    top: 10,
    left: 81,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChild: {
    width: 58,
    left: 0,
    top: 0,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  sellWithPrideHappinessParent: {
    top: 33,
    left: 71,
    width: 302,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: 19,
    top: 37,
    width: 40,
    height: 30,
    position: "absolute",
  },
  frameItem: {
    height: 132,
    left: 0,
  },
  frameInner: {
    backgroundColor: Color.forestgreen,
  },
  dhaanPaddy: {
    left: 15,
    fontSize: FontSize.size_base,
  },
  rectangleGroup: {
    top: 140,
    overflow: "hidden",
  },
  rectangleParent: {
    height: 165,
    left: 41,
  },
  frameView: {
    top: 138,
    overflow: "hidden",
  },
  rectangleContainer: {
    height: 163,
    left: 245,
  },
  rectangleParent2: {
    top: 142,
    overflow: "hidden",
  },
  rectangleParent1: {
    height: 167,
    left: 41,
  },
  rectangleParent3: {
    left: 245,
    height: 165,
  },
  ganna: {
    fontSize: FontSize.size_base,
  },
  sugarcane: {
    fontSize: FontSize.size_smi,
  },
  gannaSugarcane: {
    left: 11,
  },
  rectangleParent6: {
    top: 144,
    overflow: "hidden",
  },
  rectangleParent7: {
    height: 167,
    left: 245,
  },
  sunflower: {
    fontSize: FontSize.size_xs,
  },
  surajmukhisunflower: {
    top: 4,
    left: 8,
  },
  rectangleParent11: {
    height: 167,
    left: 245,
  },
  iphone14ProMax167Child: {
    top: 898,
    left: 49,
    width: 333,
    height: 176,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14ProMax167: {
    top: 78,
    height: 850,
    backgroundColor: Color.white,
  },
  component33Icon: {
    top: 856,
    height: 76,
    overflow: "hidden",
  },
  iphone14ProMax165: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax165;
