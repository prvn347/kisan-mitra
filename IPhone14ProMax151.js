import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const IPhone14ProMax151 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14ProMax151, styles.iconLayout2]}>
      <View
        style={[styles.sellWithPrideHappinessParent, styles.frameChildLayout]}
      >
        <Text
          style={[styles.sellWithPride, styles.government1Typo]}
        >{`SELL with pride & happiness`}</Text>
        <Image
          style={[
            styles.frameChild,
            styles.frameChildPosition,
            styles.frameChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/frame-1491.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone14ProMax156")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/frame-236.png")}
        />
      </Pressable>
      <View style={[styles.component45, styles.component45Layout1]}>
        <View
          style={[
            styles.component45Child,
            styles.component45Layout,
            styles.component45Layout1,
            styles.frameChildPosition,
          ]}
        />
        <View style={[styles.component45Item, styles.component45Layout]} />
        <Text
          style={[
            styles.privateMitras,
            styles.governmentPosition,
            styles.government1Typo,
            styles.government1Typo1,
          ]}
        >
          PRIVATE-MITRAS
        </Text>
        <Pressable
          style={[styles.government, styles.governmentPosition]}
          onPress={() => navigation.navigate("IPhone14ProMax148")}
        >
          <Text
            style={[
              styles.government1,
              styles.government1Typo,
              styles.government1Typo1,
            ]}
          >
            GOVERNMENT
          </Text>
        </Pressable>
      </View>
      <View style={[styles.iphone14ProMax164, styles.component33IconPosition]}>
        <View
          style={[
            styles.rectangleParent,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Image
            style={[
              styles.whatsappImage20230319At9,
              styles.iconLayout1,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/whatsapp-image-20230319-at-903.png")}
          />
          <Text style={styles.cropInsurance}>Crop Insurance</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            6000 RS / Quintal
          </Text>
        </View>
        <View
          style={[
            styles.rectangleGroup,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Image
            style={[styles.iconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-691.png")}
          />
          <Text style={styles.cropInsurance}>Farmcut</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            6511 RS / Quintal
          </Text>
        </View>
        <View
          style={[
            styles.rectangleContainer,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Text style={styles.cropInsurance}>Freshfood</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            4578 RS / Quintal
          </Text>
          <Image
            style={[
              styles.image65Icon,
              styles.iconLayout1,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/image-651.png")}
          />
        </View>
        <View
          style={[
            styles.frameView,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Image
            style={styles.iconPosition}
            resizeMode="cover"
            source={require("../assets/image-661.png")}
          />
          <Text style={styles.cropInsurance}>Ourfood</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            6956 RS / Quintal
          </Text>
        </View>
        <View
          style={[
            styles.rectangleParent1,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Image
            style={[styles.image67Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-671.png")}
          />
          <Text style={styles.cropInsurance}>Healthy Food</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            6985 RS / Quintal
          </Text>
        </View>
        <View
          style={[
            styles.rectangleParent2,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Text style={styles.cropInsurance}>Arla</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            7001 RS / Quintal
          </Text>
          <Image
            style={[styles.image68Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-68.png")}
          />
        </View>
        <View
          style={[
            styles.rectangleParent3,
            styles.frameParentLayout,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.frameItem,
              styles.frameParentLayout,
              styles.frameChildPosition,
            ]}
          />
          <Text style={styles.cropInsurance}>Farm Market</Text>
          <Text style={[styles.raipurChhattisgarh, styles.rsQuintalLayout]}>
            Raipur, Chhattisgarh
          </Text>
          <Text style={[styles.rsQuintal, styles.rsQuintalLayout]}>
            7001 RS / Quintal
          </Text>
          <Image
            style={[styles.image70Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-701.png")}
          />
        </View>
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
  iconLayout2: {
    width: "100%",
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  government1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  frameChildPosition: {
    left: 0,
    top: 0,
  },
  component45Layout1: {
    height: 40,
    width: 387,
  },
  component45Layout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  governmentPosition: {
    top: 11,
    position: "absolute",
  },
  government1Typo1: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  component33IconPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  frameParentLayout: {
    height: 177,
    width: 384,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 23,
    width: 384,
    overflow: "hidden",
  },
  iconLayout1: {
    width: 90,
    position: "absolute",
  },
  iconPosition: {
    left: 29,
    top: 47,
  },
  rsQuintalLayout: {
    width: 186,
    height: 25,
    fontSize: FontSize.size_xl,
    left: 136,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 90,
    width: 90,
    position: "absolute",
  },
  sellWithPride: {
    top: 10,
    left: 81,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChild: {
    width: 58,
  },
  sellWithPrideHappinessParent: {
    top: 33,
    left: 71,
    width: 302,
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
  component45Child: {
    backgroundColor: Color.gainsboro_100,
  },
  component45Item: {
    top: 5,
    left: 198,
    backgroundColor: Color.forestgreen,
    width: 182,
    height: 30,
  },
  privateMitras: {
    left: 219,
    color: Color.white,
  },
  government1: {
    color: Color.darkslategray_100,
  },
  government: {
    left: 41,
  },
  component45: {
    top: 91,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.whitesmoke,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
  },
  whatsappImage20230319At9: {
    height: 70,
  },
  cropInsurance: {
    width: 145,
    height: 25,
    fontSize: FontSize.size_xl,
    left: 136,
    fontFamily: FontFamily.iBMPlexSansRegular,
    top: 34,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  raipurChhattisgarh: {
    top: 96,
    fontFamily: FontFamily.iBMPlexSansRegular,
    width: 186,
    color: Color.black,
  },
  rsQuintal: {
    top: 65,
    fontFamily: FontFamily.iBMPlexSansBold,
    color: Color.forestgreen,
    width: 186,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 34,
    left: 23,
  },
  rectangleGroup: {
    top: 250,
  },
  image65Icon: {
    height: 77,
  },
  rectangleContainer: {
    top: 466,
  },
  frameView: {
    top: 682,
  },
  image67Icon: {
    top: 41,
    left: 22,
  },
  rectangleParent1: {
    top: 898,
  },
  image68Icon: {
    left: 17,
    height: 60,
    top: 47,
    width: 90,
  },
  rectangleParent2: {
    top: 1114,
  },
  image70Icon: {
    top: 42,
    left: 18,
    height: 93,
  },
  rectangleParent3: {
    top: 1330,
  },
  iphone14ProMax164: {
    top: 131,
    height: 768,
    backgroundColor: Color.white,
  },
  component33Icon: {
    top: 856,
    height: 76,
    overflow: "hidden",
  },
  iphone14ProMax151: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax151;
