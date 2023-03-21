import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone14ProMax177 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14ProMax177}>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={styles.nareshChandrakar}>naresh_chandrakar</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-75.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-75.png")}
        />
        <Image
          style={[styles.vectorPosition1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Pressable
          style={styles.vectorPosition1}
          onPress={() => navigation.navigate("IPhone14ProMax107")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Image
          style={[styles.frameInner, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-61.png")}
        />
        <View style={styles.frameView} />
      </View>
      <View style={styles.iphone14ProMax175Wrapper}>
        <View style={styles.iphone14ProMax175}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View
                style={[styles.ellipseLayout, styles.ellipseParentPosition]}
              >
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-76.png")}
                />
                <Image
                  style={styles.image50Icon}
                  resizeMode="cover"
                  source={require("../assets/image-50.png")}
                />
              </View>
              <View style={styles.frameChild1} />
            </View>
            <View style={styles.followersParent}>
              <Text
                style={[
                  styles.followers,
                  styles.postsTypo,
                  styles.followersLayout,
                ]}
              >
                Followers
              </Text>
              <Text
                style={[
                  styles.followers,
                  styles.postsTypo,
                  styles.followersLayout,
                ]}
              >
                Followers
              </Text>
              <Text
                style={[
                  styles.text,
                  styles.textTypo,
                  styles.textTypo1,
                  styles.textLayout,
                ]}
              >
                601
              </Text>
              <Text
                style={[
                  styles.following,
                  styles.postsTypo,
                  styles.followersLayout,
                ]}
              >
                Following
              </Text>
              <Text
                style={[
                  styles.following,
                  styles.postsTypo,
                  styles.followersLayout,
                ]}
              >
                Following
              </Text>
              <Text
                style={[
                  styles.text1,
                  styles.textTypo,
                  styles.textTypo1,
                  styles.textLayout,
                ]}
              >
                301
              </Text>
              <Text style={[styles.posts, styles.postsTypo]}>Posts</Text>
              <Text style={[styles.posts, styles.postsTypo]}>Posts</Text>
              <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
                12
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                <View
                  style={[styles.frameChild26Position, styles.rectangleLayout]}
                />
                <Text style={[styles.editProfile, styles.profileTypo]}>
                  Edit Profile
                </Text>
              </View>
              <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                <View style={styles.rectangleLayout} />
                <Text style={[styles.shareProfile, styles.profileTypo]}>
                  Share Profile
                </Text>
              </View>
              <View style={styles.frameChild3} />
            </View>
            <View style={styles.ellipseGroup}>
              <Image
                style={[
                  styles.frameChild4,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild5,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild6,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild7,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild8,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild9,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild10,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-4.png")}
              />
              <Image
                style={[
                  styles.frameChild11,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-6.png")}
              />
              <Image
                style={[
                  styles.frameChild12,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-8.png")}
              />
              <Image
                style={[
                  styles.frameChild13,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[
                  styles.frameChild14,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Image
                style={[
                  styles.frameChild15,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-13.png")}
              />
              <Image
                style={[styles.frameChild16, styles.frameChildPosition2]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[styles.frameChild17, styles.frameChildPosition2]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[styles.frameChild18, styles.frameChildPosition2]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild19,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[
                  styles.frameChild20,
                  styles.frameChildLayout9,
                  styles.frameChildLayout10,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-3.png")}
              />
              <Image
                style={[styles.frameChild21, styles.frameChildLayout7]}
                resizeMode="cover"
                source={require("../assets/ellipse-17.png")}
              />
              <Image
                style={[styles.frameChild22, styles.frameChildLayout7]}
                resizeMode="cover"
                source={require("../assets/ellipse-19.png")}
              />
              <Image
                style={[styles.frameChild23, styles.frameChildLayout7]}
                resizeMode="cover"
                source={require("../assets/ellipse-23.png")}
              />
              <Image
                style={[
                  styles.frameChild24,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-25.png")}
              />
              <Image
                style={[
                  styles.frameChild25,
                  styles.frameChildLayout7,
                  styles.frameChildLayout8,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-27.png")}
              />
              <Text style={[styles.venice, styles.seaTypo]}>Venice</Text>
              <Text style={[styles.holi, styles.seaTypo]}>Holi</Text>
              <Text style={[styles.india, styles.seaTypo]}>India</Text>
              <Text style={[styles.summer, styles.seaTypo]}>Summer</Text>
              <Text style={[styles.himalayas, styles.seaTypo]}>Himalayas</Text>
              <Text style={[styles.flower, styles.seaTypo]}>Flower</Text>
              <Text style={[styles.sea, styles.seaTypo]}>Sea</Text>
              <Text style={[styles.mountain, styles.seaTypo]}>Mountain</Text>
              <Text style={[styles.waterfall, styles.seaTypo]}>Waterfall</Text>
              <Text style={[styles.usa, styles.seaTypo]}>USA</Text>
              <Text style={[styles.rain, styles.seaTypo]}>Rain</Text>
            </View>
            <Image
              style={[styles.component36Icon, styles.ellipseParentPosition]}
              resizeMode="cover"
              source={require("../assets/component-36.png")}
            />
            <View
              style={[styles.rectangleContainer, styles.frameChild26Layout]}
            >
              <View
                style={[styles.frameChild26Layout, styles.frameChild26Position]}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <View style={styles.nareshChandrakarParent}>
              <Text style={[styles.nareshChandrakar1, styles.textTypo]}>
                Naresh Chandrakar
              </Text>
              <Text style={[styles.jayJawaanJay, styles.jayTypo]}>
                Jay Jawaan Jay Kisan
              </Text>
              <Text style={[styles.indianfarmer, styles.jayTypo]}>
                #IndianFarmer
              </Text>
            </View>
          </View>
          <View style={[styles.iphone14Pro28, styles.iphone14ShadowBox]}>
            <View
              style={[styles.iphone14Pro28Child, styles.iphone14ChildLayout2]}
            />
            <Image
              style={[styles.iphone14Pro28Item, styles.iphone14ItemLayout]}
              resizeMode="cover"
              source={require("../assets/frame-391.png")}
            />
            <Image
              style={[styles.iphone14Pro28Inner, styles.iphone14InnerLayout]}
              resizeMode="cover"
              source={require("../assets/frame-42.png")}
            />
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame-44.png")}
            />
            <Image
              style={[styles.iphone14Pro28Child1, styles.iphone14ChildLayout1]}
              resizeMode="cover"
              source={require("../assets/frame-45.png")}
            />
            <View style={[styles.iphone14ChildLayout1, styles.vectorPosition]}>
              <Image
                style={[styles.vectorIcon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
              <View style={[styles.frameChild27, styles.frameChildLayout6]} />
              <View style={[styles.frameChild28, styles.frameChildLayout6]} />
              <View style={[styles.frameChild29, styles.frameChildLayout5]} />
              <View style={[styles.frameChild30, styles.frameChildLayout5]} />
            </View>
            <Image
              style={[styles.iphone14Pro28Child2, styles.iphone14ChildLayout1]}
              resizeMode="cover"
              source={require("../assets/frame-43.png")}
            />
            <Image
              style={[styles.iphone14Pro28Child3, styles.iphone14ChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-37.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-36.png")}
            />
            <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
            <Text style={[styles.yourActivity, styles.yourTypo]}>
              Your activity
            </Text>
            <Text style={[styles.archive, styles.archiveTypo]}>Archive</Text>
            <Text style={[styles.qrCode, styles.codeTypo]}>QR code</Text>
            <Text style={[styles.saved, styles.savedTypo]}>Saved</Text>
            <Text style={[styles.digitalCollectibles, styles.digitalTypo]}>
              Digital collectibles
            </Text>
            <Text style={[styles.closefriends, styles.closefriendsTypo]}>
              CloseFriends
            </Text>
            <Text style={[styles.favorites, styles.favoritesTypo]}>
              Favorites
            </Text>
          </View>
          <View style={styles.rectangleParent1}>
            <Image
              style={[styles.frameChild31, styles.frameChildLayout3]}
              resizeMode="cover"
              source={require("../assets/rectangle-51.png")}
            />
            <Image
              style={[styles.frameChild32, styles.frameChildLayout3]}
              resizeMode="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Image
              style={[
                styles.frameChild33,
                styles.frameChildLayout2,
                styles.frameChildPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-55.png")}
            />
            <Image
              style={[styles.frameChild34, styles.frameChildLayout4]}
              resizeMode="cover"
              source={require("../assets/rectangle-54.png")}
            />
            <Image
              style={[styles.frameChild35, styles.frameChildLayout4]}
              resizeMode="cover"
              source={require("../assets/rectangle-61.png")}
            />
            <Image
              style={[
                styles.frameChild36,
                styles.frameChildLayout2,
                styles.frameChildPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-521.png")}
            />
            <Image
              style={[styles.frameChild37, styles.frameChildLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-57.png")}
            />
            <Image
              style={[styles.frameChild38, styles.frameChildLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-60.png")}
            />
            <Image
              style={[styles.frameChild39, styles.frameChildLayout4]}
              resizeMode="cover"
              source={require("../assets/rectangle-56.png")}
            />
            <Image
              style={[
                styles.frameChild40,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-59.png")}
            />
            <Image
              style={[
                styles.frameChild41,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-53.png")}
            />
            <Image
              style={[styles.frameChild42, styles.frameChildLayout2]}
              resizeMode="cover"
              source={require("../assets/rectangle-50.png")}
            />
            <Image
              style={[styles.frameChild43, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-58.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.component48Icon, styles.frameChildLayout9]}
        resizeMode="cover"
        source={require("../assets/component-48.png")}
      />
      <View style={[styles.iphone14Pro29, styles.iphone14ShadowBox]}>
        <View
          style={[styles.iphone14Pro29Child, styles.iphone14ChildLayout2]}
        />
        <Image
          style={[styles.iphone14Pro29Item, styles.iphone14ItemLayout]}
          resizeMode="cover"
          source={require("../assets/frame-39.png")}
        />
        <Image
          style={[styles.iphone14Pro29Inner, styles.iphone14InnerLayout]}
          resizeMode="cover"
          source={require("../assets/frame-42.png")}
        />
        <Image
          style={[styles.iphone14Pro29Child1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-44.png")}
        />
        <Image
          style={[styles.iphone14Pro29Child2, styles.iphone14ChildPosition]}
          resizeMode="cover"
          source={require("../assets/frame-45.png")}
        />
        <View style={[styles.iphone14ChildPosition, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={[styles.frameChild27, styles.frameChildLayout6]} />
          <View style={[styles.frameChild28, styles.frameChildLayout6]} />
          <View style={[styles.frameChild29, styles.frameChildLayout5]} />
          <View style={[styles.frameChild30, styles.frameChildLayout5]} />
        </View>
        <Image
          style={[styles.iphone14Pro29Child3, styles.iphone14ChildPosition]}
          resizeMode="cover"
          source={require("../assets/frame-43.png")}
        />
        <Image
          style={[styles.iphone14Pro29Child4, styles.iphone14ChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-37.png")}
        />
        <Image
          style={[styles.iphone14Pro29Child5, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <Text style={[styles.settings1, styles.settingsTypo]}>Settings</Text>
        <Text style={[styles.yourActivity1, styles.yourTypo]}>
          Your activity
        </Text>
        <Text style={[styles.archive1, styles.archiveTypo]}>Archive</Text>
        <Text style={[styles.qrCode1, styles.codeTypo]}>QR code</Text>
        <Text style={[styles.saved1, styles.savedTypo]}>Saved</Text>
        <Text style={[styles.digitalCollectibles1, styles.digitalTypo]}>
          Digital collectibles
        </Text>
        <Text style={[styles.closefriends1, styles.closefriendsTypo]}>
          CloseFriends
        </Text>
        <Text style={[styles.favorites1, styles.favoritesTypo]}>Favorites</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseParentPosition: {
    left: 2,
    overflow: "hidden",
  },
  ellipseLayout: {
    width: 100,
    height: 100,
    top: 0,
    position: "absolute",
  },
  postsTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: "53.34%",
    height: "23.64%",
    textAlign: "left",
    position: "absolute",
  },
  followersLayout: {
    width: "12.56%",
    fontSize: FontSize.size_xs,
    top: "53.34%",
    height: "23.64%",
  },
  textTypo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_5xl,
    top: "15.52%",
    height: "45.71%",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  textLayout: {
    width: "10.23%",
    fontSize: FontSize.size_5xl,
    top: "15.52%",
    height: "45.71%",
  },
  rectangleLayout: {
    width: 152,
    height: 33,
    position: "absolute",
  },
  profileTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "21.21%",
    height: "57.11%",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChildLayout9: {
    height: 76,
    position: "absolute",
  },
  frameChildLayout10: {
    width: 76,
    height: 76,
    top: 0,
  },
  frameChildLayout7: {
    height: 69,
    width: 68,
    position: "absolute",
  },
  frameChildLayout8: {
    top: 4,
    height: 69,
    width: 68,
  },
  frameChildPosition2: {
    top: 1,
    height: 76,
    width: 76,
    position: "absolute",
  },
  seaTypo: {
    color: Color.dimgray,
    top: 88,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChild26Layout: {
    height: 38,
    width: 38,
    position: "absolute",
  },
  frameChild26Position: {
    backgroundColor: Color.forestgreen,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  jayTypo: {
    color: Color.darkgray,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iphone14ShadowBox: {
    height: 1,
    width: 426,
    borderRadius: Border.br_xl,
    left: 2,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  iphone14ChildLayout2: {
    height: 8,
    borderTopWidth: 8,
    borderColor: "#948b8b",
    borderStyle: "solid",
    top: 20,
    width: 68,
    position: "absolute",
  },
  iphone14ItemLayout: {
    height: 48,
    width: 51,
    top: 186,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14InnerLayout: {
    height: 47,
    width: 36,
    top: 365,
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    height: 40,
    top: 74,
    width: 37,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14ChildLayout1: {
    width: 40,
    height: 40,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    top: 250,
    backgroundColor: Color.gray_200,
  },
  iconLayout: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout6: {
    height: 10,
    width: 10,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: Color.gainsboro_400,
    borderRadius: Border.br_12xs,
    left: 8,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChildLayout5: {
    left: 22,
    height: 10,
    width: 10,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: Color.gainsboro_400,
    borderRadius: Border.br_12xs,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone14ChildLayout: {
    width: 33,
    top: 428,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconLayout: {
    height: 43,
    width: 30,
    top: 306,
    position: "absolute",
  },
  settingsTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 84,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  yourTypo: {
    top: 140,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  archiveTypo: {
    top: 200,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  codeTypo: {
    top: 257,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  savedTypo: {
    top: 314,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  digitalTypo: {
    top: 374,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  closefriendsTypo: {
    top: 439,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  favoritesTypo: {
    top: 487,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChildLayout3: {
    width: 135,
    borderRadius: Border.br_3xs,
    left: 289,
    position: "absolute",
  },
  frameChildLayout2: {
    height: 135,
    width: 135,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameChildPosition1: {
    top: 335,
    height: 135,
  },
  frameChildLayout4: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 292,
    width: 200,
    top: 735,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameChildLayout: {
    width: 199,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameChildPosition: {
    left: 16,
    width: 199,
  },
  iphone14ChildPosition: {
    left: 114,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    width: "5.81%",
    right: "90.47%",
    left: "3.72%",
    bottom: "17.46%",
    top: "34.92%",
    height: "47.62%",
    maxWidth: "100%",
    position: "absolute",
  },
  nareshChandrakar: {
    top: "39.68%",
    left: "11.63%",
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansBold,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    position: "absolute",
  },
  frameChild: {
    right: "18.84%",
    left: "74.19%",
    width: "6.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "17.46%",
    top: "34.92%",
    height: "47.62%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition1: {
    left: "87.56%",
    bottom: "16.67%",
    right: "4.3%",
    top: "35.71%",
    width: "8.14%",
    height: "47.62%",
    position: "absolute",
  },
  frameInner: {
    height: "26.98%",
    width: "3.95%",
    top: "46.03%",
    right: "50%",
    bottom: "26.98%",
    left: "46.05%",
    position: "absolute",
  },
  frameView: {
    height: "185.71%",
    width: "38.84%",
    top: "100%",
    right: "29.77%",
    bottom: "-185.71%",
    left: "31.4%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: 63,
    width: 430,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  ellipseIcon: {
    left: 0,
  },
  image50Icon: {
    borderRadius: Border.br_71xl,
    width: 90,
    height: 90,
    left: 5,
    top: 5,
    position: "absolute",
  },
  frameChild1: {
    top: 128,
    width: 71,
    height: 14,
    backgroundColor: Color.gray_200,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameGroup: {
    top: 10,
    left: 164,
    width: 102,
    height: 100,
    backgroundColor: Color.gray_200,
    position: "absolute",
    overflow: "hidden",
  },
  followers: {
    left: "43.26%",
    color: Color.black,
    width: "12.56%",
  },
  text: {
    left: "44.42%",
  },
  following: {
    left: "72.09%",
    color: Color.gray_100,
  },
  text1: {
    left: "73.26%",
  },
  posts: {
    width: "7.44%",
    left: "15.35%",
    fontSize: FontSize.size_xs,
    top: "53.34%",
    height: "23.64%",
    color: Color.black,
  },
  text2: {
    left: "15.58%",
    fontSize: FontSize.size_5xl,
    top: "15.52%",
    height: "45.71%",
    width: "6.98%",
  },
  followersParent: {
    top: 180,
    left: 6,
    height: 58,
    width: 430,
    position: "absolute",
    overflow: "hidden",
  },
  editProfile: {
    width: "55.26%",
    left: "22.37%",
  },
  rectangleParent: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  shareProfile: {
    width: "65.13%",
    left: "17.76%",
  },
  rectangleGroup: {
    left: 169,
    top: 0,
    overflow: "hidden",
  },
  frameChild3: {
    left: 338,
    height: 37,
    width: 37,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameContainer: {
    left: 25,
    width: 375,
    height: 33,
    top: 250,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild4: {
    left: 442,
  },
  frameChild5: {
    left: 527,
  },
  frameChild6: {
    left: 615,
  },
  frameChild7: {
    left: 703,
  },
  frameChild8: {
    left: 879,
  },
  frameChild9: {
    left: 791,
  },
  frameChild10: {
    left: 446,
  },
  frameChild11: {
    left: 531,
  },
  frameChild12: {
    left: 619,
  },
  frameChild13: {
    left: 707,
  },
  frameChild14: {
    left: 883,
  },
  frameChild15: {
    left: 795,
  },
  frameChild16: {
    left: 0,
  },
  frameChild17: {
    left: 88,
  },
  frameChild18: {
    left: 175,
  },
  frameChild19: {
    left: 263,
  },
  frameChild20: {
    left: 351,
  },
  frameChild21: {
    left: 4,
    top: 5,
  },
  frameChild22: {
    left: 92,
    top: 5,
  },
  frameChild23: {
    left: 179,
    top: 5,
  },
  frameChild24: {
    left: 267,
  },
  frameChild25: {
    left: 355,
  },
  venice: {
    left: 10,
  },
  holi: {
    left: 109,
  },
  india: {
    left: 193,
  },
  summer: {
    left: 447,
  },
  himalayas: {
    left: 531,
  },
  flower: {
    left: 630,
  },
  sea: {
    left: 726,
  },
  mountain: {
    left: 795,
  },
  waterfall: {
    left: 888,
  },
  usa: {
    left: 371,
  },
  rain: {
    left: 283,
  },
  ellipseGroup: {
    top: 298,
    width: 423,
    height: 107,
    left: 3,
    position: "absolute",
    backgroundColor: Color.white,
  },
  component36Icon: {
    top: 413,
    width: 427,
    height: 70,
    position: "absolute",
  },
  vectorIcon2: {
    height: "47.21%",
    width: "63.16%",
    top: "26.32%",
    right: "18.42%",
    bottom: "26.48%",
    left: "18.42%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 249,
    left: 358,
    backgroundColor: Color.gray_200,
    overflow: "hidden",
  },
  nareshChandrakar1: {
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
  },
  jayJawaanJay: {
    top: 24,
    left: 31,
  },
  indianfarmer: {
    top: 39,
    left: 52,
  },
  nareshChandrakarParent: {
    top: 114,
    left: 121,
    width: 188,
    height: 54,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    height: 868,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iphone14Pro28Child: {
    left: 179,
  },
  iphone14Pro28Item: {
    left: 24,
  },
  iphone14Pro28Inner: {
    left: 32,
  },
  frameIcon: {
    left: 30,
    height: 40,
    top: 74,
  },
  iphone14Pro28Child1: {
    top: 130,
  },
  vectorIcon3: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  frameChild27: {
    top: 7,
  },
  frameChild28: {
    top: 22,
  },
  frameChild29: {
    top: 7,
  },
  frameChild30: {
    top: 22,
  },
  iphone14Pro28Child2: {
    top: 477,
  },
  iphone14Pro28Child3: {
    left: 33,
  },
  rectangleIcon: {
    left: 35,
  },
  settings: {
    left: 92,
  },
  yourActivity: {
    left: 92,
  },
  archive: {
    left: 95,
  },
  qrCode: {
    left: 92,
  },
  saved: {
    left: 92,
  },
  digitalCollectibles: {
    left: 92,
  },
  closefriends: {
    left: 92,
  },
  favorites: {
    left: 92,
  },
  iphone14Pro28: {
    top: 868,
    backgroundColor: Color.gray_200,
  },
  frameChild31: {
    top: 173,
    height: 152,
  },
  frameChild32: {
    height: 159,
    top: 5,
  },
  frameChild33: {
    left: 148,
  },
  frameChild34: {
    top: 479,
    width: 425,
    height: 246,
    left: 3,
  },
  frameChild35: {
    width: 271,
    height: 320,
    left: 8,
    borderRadius: Border.br_3xs,
    top: 5,
  },
  frameChild36: {
    left: 5,
  },
  frameChild37: {
    left: 11,
  },
  frameChild38: {
    left: 221,
  },
  frameChild39: {
    top: 1037,
    width: 410,
    height: 280,
    left: 11,
  },
  frameChild40: {
    height: 194,
    top: 1327,
  },
  frameChild41: {
    top: 1531,
    height: 191,
  },
  frameChild42: {
    top: 334,
    height: 135,
    left: 289,
  },
  frameChild43: {
    left: 222,
    height: 395,
    top: 1327,
  },
  rectangleParent1: {
    top: 493,
    height: 1803,
    width: 430,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iphone14ProMax175: {
    height: 2296,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  iphone14ProMax175Wrapper: {
    top: 64,
    height: 866,
    width: 430,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  component48Icon: {
    top: 856,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  iphone14Pro29Child: {
    left: 100,
  },
  iphone14Pro29Item: {
    left: 108,
  },
  iphone14Pro29Inner: {
    left: 116,
  },
  iphone14Pro29Child1: {
    left: 115,
    height: 40,
    top: 74,
  },
  iphone14Pro29Child2: {
    top: 130,
  },
  iphone14Pro29Child3: {
    top: 477,
  },
  iphone14Pro29Child4: {
    left: 117,
  },
  iphone14Pro29Child5: {
    left: 119,
  },
  settings1: {
    left: 103,
  },
  yourActivity1: {
    left: 87,
  },
  archive1: {
    left: 106,
  },
  qrCode1: {
    left: 101,
  },
  saved1: {
    left: 110,
  },
  digitalCollectibles1: {
    left: 66,
  },
  closefriends1: {
    left: 85,
  },
  favorites1: {
    left: 99,
  },
  iphone14Pro29: {
    top: 932,
    backgroundColor: Color.white,
  },
  iphone14ProMax177: {
    flex: 1,
    height: 933,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax177;
