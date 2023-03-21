import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone14ProMax160 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14ProMax160, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.frameParentPosition1]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-172.png")}
        />
        <View style={[styles.frameItem, styles.wrapperLayout]} />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone14ProMax156")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-236.png")}
          />
        </Pressable>
        <Text style={styles.notifications}>Notifications</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameLayout, styles.rectangleViewPosition]}>
            <View style={styles.rectangleViewPosition} />
          </View>
        </View>
      </View>
      <View style={styles.iphone14Plus1}>
        <View style={styles.frameGroup}>
          <View style={[styles.vectorParent, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-40.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorGroup, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame-288.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-49.png")}
              />
            </View>
            <Text
              style={[styles.commentedOnYour, styles.yourTypo]}
            >{`Commented on your
post.`}</Text>
            <Text style={[styles.hAgo1, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorContainer, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-49.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.frameView, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-33.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent1, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector5.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-38.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Shared your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent2, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-43.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent3, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-36.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent4, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-45.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent5, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-43.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent6, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-46.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent7, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-42.png")}
              />
            </View>
          </View>
          <View style={[styles.vectorParent8, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-47.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
          <View style={[styles.vectorParent9, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-44.png")}
              />
            </View>
          </View>
          <View style={[styles.vectorParent10, styles.frameParentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <Image
              style={[styles.frameChild2, styles.frameParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-74.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View
                style={[
                  styles.rectangleView,
                  styles.image40IconLayout,
                  styles.rectangleLayout,
                  styles.rectangleViewPosition,
                ]}
              />
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                resizeMode="cover"
                source={require("../assets/image-48.png")}
              />
            </View>
            <Text style={[styles.likedYourPost, styles.yourTypo]}>
              Liked your post.
            </Text>
            <Text style={[styles.hAgo, styles.agoTypo]}>3h ago</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.component47Icon, styles.frameParentPosition1]}
        resizeMode="cover"
        source={require("../assets/component-47.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition1: {
    width: 430,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 30,
    width: 40,
    position: "absolute",
  },
  frameLayout: {
    height: 107,
    width: 366,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewPosition: {
    left: 0,
    top: 0,
  },
  frameParentPosition: {
    height: 70,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "28.57%",
    top: "28.57%",
    height: "42.86%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 63,
    width: 63,
  },
  image40IconLayout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  yourTypo: {
    left: 73,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  agoTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    left: 73,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  frameChild: {
    top: 32,
    left: 72,
    width: 30,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    left: 375,
    backgroundColor: Color.gray_200,
    top: 40,
    width: 40,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: 19,
    top: 35,
  },
  notifications: {
    left: 114,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 40,
    position: "absolute",
  },
  frameWrapper: {
    top: 86,
    left: 29,
  },
  frameParent: {
    height: 86,
    top: 0,
  },
  rectangleIcon: {
    borderRadius: Border.br_3xs,
    width: 339,
    top: 0,
  },
  frameChild2: {
    width: 57,
    top: 0,
  },
  vectorIcon: {
    width: "10.32%",
    right: "87.02%",
    left: "2.65%",
  },
  rectangleView: {
    backgroundColor: Color.forestgreen,
  },
  image40Icon: {
    top: 2,
    width: 59,
    height: 59,
    left: 2,
  },
  rectangleParent: {
    top: 3,
    left: 272,
    position: "absolute",
    overflow: "hidden",
  },
  likedYourPost: {
    top: 20,
  },
  hAgo: {
    top: 39,
  },
  vectorParent: {
    width: 339,
    top: 0,
    overflow: "hidden",
  },
  vectorIcon1: {
    width: "8.85%",
    right: "87.91%",
    left: "3.24%",
  },
  commentedOnYour: {
    top: 12,
  },
  hAgo1: {
    top: 50,
  },
  vectorGroup: {
    top: 112,
    width: 339,
    overflow: "hidden",
  },
  vectorContainer: {
    top: 224,
    width: 339,
    overflow: "hidden",
  },
  frameView: {
    top: 336,
    width: 339,
    overflow: "hidden",
  },
  vectorIcon4: {
    width: "7.37%",
    right: "88.5%",
    left: "4.13%",
  },
  vectorParent1: {
    top: 448,
    width: 339,
    overflow: "hidden",
  },
  vectorParent2: {
    top: 560,
    width: 339,
    overflow: "hidden",
  },
  vectorParent3: {
    top: 672,
    width: 339,
    overflow: "hidden",
  },
  vectorParent4: {
    top: 784,
    width: 339,
    overflow: "hidden",
  },
  vectorParent5: {
    top: 896,
    width: 339,
    overflow: "hidden",
  },
  vectorParent6: {
    top: 1008,
    width: 339,
    overflow: "hidden",
  },
  vectorParent7: {
    top: 1120,
    width: 339,
    overflow: "hidden",
  },
  vectorParent8: {
    top: 1232,
    width: 339,
    overflow: "hidden",
  },
  vectorParent9: {
    top: 1344,
    width: 339,
    overflow: "hidden",
  },
  vectorParent10: {
    top: 1456,
    width: 339,
    overflow: "hidden",
  },
  frameGroup: {
    left: 45,
    height: 764,
    width: 339,
    top: 0,
    position: "absolute",
  },
  iphone14Plus1: {
    top: 101,
    width: 428,
    height: 819,
    left: 2,
    position: "absolute",
    backgroundColor: Color.white,
  },
  component47Icon: {
    top: 856,
    height: 76,
  },
  iphone14ProMax160: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax160;
