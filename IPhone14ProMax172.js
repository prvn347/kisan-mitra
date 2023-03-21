import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone14ProMax172 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14ProMax172, styles.iconLayout]}>
      <View
        style={[
          styles.frameParent,
          styles.frameParentPosition,
          styles.frameBorder,
        ]}
      >
        <Image
          style={[styles.frameChild, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/frame-306.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone14ProMax169")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-236.png")}
          />
        </Pressable>
        <Text style={styles.community}>Community</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameLayout, styles.vectorIconPosition]}>
            <View style={styles.vectorIconPosition} />
          </View>
        </View>
      </View>
      <View style={[styles.iphone14ProMax162, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <View style={[styles.rectangleParent, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text style={[styles.kisaanCommunity, styles.textTypo]}>
              KISAAN community
            </Text>
            <Text style={[styles.followers, styles.textTypo]}>
              308,845 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.5 ⭐</Text>
            <Image
              style={[styles.image67Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-67.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text style={[styles.kisaanCommunity, styles.textTypo]}>
              KISAAN community 2.0
            </Text>
            <Text style={[styles.followers, styles.textTypo]}>
              105,121 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.0 ⭐</Text>
            <Image
              style={[styles.image65Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-65.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleContainer, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text style={[styles.kisaanCommunity, styles.textTypo]}>
              KISAAN community 3.0
            </Text>
            <Text style={[styles.followers, styles.textTypo]}>
              405,996 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.9 ⭐</Text>
            <Image
              style={[styles.image67Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-67.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.frameView, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text style={[styles.kisaanCommunity, styles.textTypo]}>
              KISAAN Manch
            </Text>
            <Text style={[styles.followers, styles.textTypo]}>
              105,111 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.0 ⭐</Text>
            <Image
              style={[styles.image66Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-66.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleParent1, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text style={[styles.kisaanCommunity, styles.textTypo]}>
              Farmer Welfare
            </Text>
            <Text style={[styles.followers, styles.textTypo]}>
              45,555 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.8 ⭐</Text>
            <Image
              style={[styles.image71Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-71.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleParent2, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text style={[styles.kisaanCommunity, styles.textTypo]}>
              Kisan Sabha
            </Text>
            <Text style={[styles.followers, styles.textTypo]}>
              156,455 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>3.9 ⭐</Text>
            <Image
              style={[styles.image70Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-70.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={styles.frameChild9}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleParent3, styles.frameParentLayout]}>
            <View
              style={[
                styles.frameInner,
                styles.frameParentLayout,
                styles.frameBorder,
              ]}
            />
            <Text style={[styles.adminAjay, styles.adminAjayTypo]}>
              Admin: - Ajay Singh Thakur
            </Text>
            <Text
              style={[styles.kisaanCommunity, styles.textTypo]}
            >{`Harvest `}</Text>
            <Text style={[styles.followers, styles.textTypo]}>
              308,845 followers
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.5 ⭐</Text>
            <Image
              style={[styles.image69Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-69.png")}
            />
            <View style={styles.followingParent}>
              <Text style={[styles.following, styles.adminAjayTypo]}>
                Following
              </Text>
              <Image
                style={styles.frameChild9}
                resizeMode="cover"
                source={require("../assets/vector-46.png")}
              />
            </View>
          </View>
          <View style={[styles.frameChild12, styles.frameParentLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  frameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  wrapperLayout: {
    height: 30,
    width: 40,
    top: 24,
    position: "absolute",
  },
  frameLayout: {
    height: 107,
    width: 366,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: 0,
    top: 0,
  },
  frameParentLayout: {
    height: 164,
    width: 381,
    left: 0,
    position: "absolute",
  },
  adminAjayTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    left: 147,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconPosition: {
    width: 93,
    top: 54,
    left: 19,
    position: "absolute",
  },
  frameChild: {
    left: 66,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: 13,
  },
  community: {
    top: 30,
    left: 124,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameWrapper: {
    left: 29,
    top: 86,
  },
  frameParent: {
    borderColor: "#acacac",
    height: 74,
    overflow: "hidden",
  },
  frameInner: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.gainsboro_300,
    borderColor: "#afafaf",
  },
  adminAjay: {
    left: 19,
    fontSize: FontSize.size_xs,
    top: 23,
    color: Color.black,
  },
  kisaanCommunity: {
    top: 58,
  },
  followers: {
    top: 81,
  },
  text: {
    top: 104,
  },
  image67Icon: {
    borderRadius: Border.br_xl,
    height: 80,
  },
  following: {
    left: 31,
    color: Color.forestgreen,
    top: 0,
  },
  vectorIcon: {
    width: 26,
    height: 16,
    position: "absolute",
  },
  followingParent: {
    left: 270,
    width: 88,
    height: 17,
    top: 23,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 0,
    overflow: "hidden",
  },
  image65Icon: {
    height: 93,
  },
  rectangleGroup: {
    top: 184,
    overflow: "hidden",
  },
  rectangleContainer: {
    top: 368,
    overflow: "hidden",
  },
  image66Icon: {
    height: 68,
  },
  frameView: {
    top: 552,
    overflow: "hidden",
  },
  image71Icon: {
    height: 105,
  },
  rectangleParent1: {
    top: 736,
    overflow: "hidden",
  },
  image70Icon: {
    height: 61,
  },
  frameChild9: {
    top: 1,
    left: 1,
    width: 25,
    height: 14,
    position: "absolute",
  },
  rectangleParent2: {
    top: 920,
    overflow: "hidden",
  },
  image69Icon: {
    height: 74,
  },
  rectangleParent3: {
    top: 1104,
    overflow: "hidden",
  },
  frameChild12: {
    top: 1288,
    overflow: "hidden",
  },
  frameGroup: {
    left: 25,
    height: 900,
    width: 381,
    top: 0,
    position: "absolute",
  },
  iphone14ProMax162: {
    height: 878,
    top: 86,
    backgroundColor: Color.white,
  },
  iphone14ProMax172: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax172;
