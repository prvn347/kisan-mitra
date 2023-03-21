import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const IPhone14ProMax169 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14ProMax169, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-288.png")}
        />
        <Image
          style={[
            styles.frameItem,
            styles.wrapperLayout,
            styles.frameItemPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/frame-3061.png")}
        />
        <Pressable
          style={[styles.wrapperPosition, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone14ProMax156")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-236.png")}
          />
        </Pressable>
        <Text style={[styles.messages, styles.messagesTypo]}>Messages</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameLayout, styles.framePosition]}>
            <View style={styles.framePosition} />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-288.png")}
        />
        <Pressable
          style={[styles.wrapperLayout, styles.frameItemPosition]}
          onPress={() => navigation.navigate("IPhone14ProMax172")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-3061.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wrapperLayout}
          onPress={() => navigation.navigate("IPhone14ProMax156")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-236.png")}
          />
        </Pressable>
        <Text style={[styles.messages, styles.messagesTypo]}>Messages</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={styles.framePosition}>
            <View style={styles.framePosition} />
          </View>
        </View>
      </View>
      <View
        style={[styles.iphone14ProMax169Child, styles.rectangleParentLayout]}
      />
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-35.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Jeevan Singh
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View style={[styles.frameChild6, styles.frameChild6Layout]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-37.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Harishankar Chandrakar
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-32.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Jayshankar Chandrakar
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-49.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Lokesh Baghel
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-34.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Hariom Pawar
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentBorder]}>
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-33.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Jaggi Singh
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent10, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-39.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>Agro</Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent12, styles.rectangleParentBorder]}>
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-41.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Jimmy Sarpanch
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent14, styles.rectangleParentBorder]}>
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View style={[styles.rectangleView, styles.frameChild6Layout]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-38.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Raviraj Singh
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent16, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-36.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Jagjeet Sidhu
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent18, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-45.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Raviram Sahu
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent20, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-46.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Ramarao Raju
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent22, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-42.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Haridas Tavde
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
        </View>
        <View style={[styles.rectangleParent24, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View style={[styles.frameChild2, styles.rectangleParentBorder]} />
          <View
            style={[
              styles.rectangleGroup,
              styles.frameChild3Layout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.frameChild3,
                styles.frameChild3Layout,
                styles.frameChild3Layout1,
                styles.framePosition,
              ]}
            />
            <Image
              style={[styles.image35Icon, styles.frameChild3Layout]}
              resizeMode="cover"
              source={require("../assets/image-43.png")}
            />
          </View>
          <Text style={[styles.jeevanSingh, styles.messagesTypo]}>
            Akshay Engineer
          </Text>
          <Image
            style={[styles.frameChild4, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-289.png")}
          />
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
    position: "absolute",
    left: 0,
  },
  frameChildLayout: {
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    width: 40,
    height: 30,
    top: 24,
  },
  frameItemPosition: {
    left: 355,
    width: 40,
    position: "absolute",
  },
  messagesTypo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameLayout: {
    height: 107,
    width: 366,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  rectangleParentLayout: {
    height: 85,
    width: 430,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild6Layout: {
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_xl,
    height: 85,
    width: 430,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParentBorder: {
    borderColor: "#a1a1a1",
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_xl,
    height: 85,
    width: 430,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameChild3Layout1: {
    height: 63,
    width: 63,
  },
  wrapperPosition: {
    left: 13,
    position: "absolute",
  },
  frameChild3Layout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  frameChild: {
    left: 66,
    width: 30,
    top: 24,
    height: 30,
  },
  frameItem: {
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  messages: {
    top: 30,
    left: 108,
    fontFamily: FontFamily.interBold,
  },
  frameWrapper: {
    left: 29,
    top: 86,
  },
  frameParent: {
    borderColor: "#acacac",
    height: 74,
    borderWidth: 1,
    borderStyle: "solid",
    width: 430,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14ProMax169Child: {
    top: 1277,
  },
  rectangleView: {
    borderColor: "#e1e1e1",
  },
  frameChild2: {
    top: 0,
  },
  frameChild3: {
    backgroundColor: Color.forestgreen,
  },
  image35Icon: {
    top: 2,
    left: 2,
    width: 59,
    height: 59,
  },
  rectangleGroup: {
    top: 11,
    overflow: "hidden",
  },
  jeevanSingh: {
    top: 32,
    left: 96,
    fontFamily: FontFamily.iBMPlexSansBold,
  },
  frameChild4: {
    top: 28,
    left: 360,
    width: 35,
  },
  rectangleParent: {
    top: 0,
  },
  frameChild6: {
    borderColor: "#a9a9a9",
  },
  rectangleContainer: {
    top: 95,
    backgroundColor: Color.white,
  },
  rectangleParent2: {
    top: 190,
  },
  rectangleParent4: {
    top: 285,
  },
  rectangleParent6: {
    top: 380,
  },
  rectangleParent8: {
    top: 475,
    overflow: "hidden",
  },
  rectangleParent10: {
    top: 570,
  },
  rectangleParent12: {
    top: 665,
    overflow: "hidden",
  },
  rectangleParent14: {
    top: 760,
    overflow: "hidden",
  },
  rectangleParent16: {
    top: 855,
  },
  rectangleParent18: {
    top: 950,
  },
  rectangleParent20: {
    top: 1045,
  },
  rectangleParent22: {
    top: 1140,
  },
  rectangleParent24: {
    top: 1235,
  },
  frameParent1: {
    height: 878,
    top: 86,
    width: 430,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iphone14ProMax169: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax169;
