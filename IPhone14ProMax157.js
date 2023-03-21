import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const IPhone14ProMax157 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14ProMax157, styles.iconLayout]}>
      <View style={[styles.eReghaAdhiyaThekaParent, styles.frameChildLayout]}>
        <Text
          style={[styles.eReghaAdhiyaTheka, styles.ratings44FlexBox]}
        >{`E-Regha / Adhiya-Theka `}</Text>
        <Image
          style={[
            styles.frameChild,
            styles.framePosition,
            styles.frameChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/frame-268.png")}
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
      <View style={[styles.iphone14ProMax158, styles.component48Position]}>
        <View
          style={[
            styles.iphone14ProMax158Inner,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={[styles.frameInnerLayout, styles.framePosition]}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.4 `}</Text>
            <Text style={styles.ravishankarTypo}>{`Ravishankar Patel `}</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>50 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>35 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>25 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Bagbahara, Mahasamud, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-61.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Child,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.2 `}</Text>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.2 `}</Text>
            <Text style={styles.ravishankarTypo}>Hariom Sahu</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age- `}</Text>
              <Text style={styles.years}>45 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>25 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>50 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Ghunchapali, Mahasamund, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-64.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.frameView,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.1 `}</Text>
            <Text style={styles.ravishankarTypo}>Balram Sahu</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>52 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>30 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>30 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Kasdol, Mahasamund
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-58.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner1,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.6 `}</Text>
            <Text style={styles.ravishankarTypo}>Jayprakash Singh</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>50 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>35 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>25 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Jabalpur, Madhyapradesh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-57.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner2,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 5 `}</Text>
            <Text style={styles.ravishankarTypo}>Mickey Chandrakar</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>60 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>45 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>100 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Farfoud, Arang, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-62.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner3,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.4 `}</Text>
            <Text style={styles.ravishankarTypo}>Pratap Gahlot</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>55 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>35 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>55 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Arang, Chhattisagrh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-53.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner4,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.8 `}</Text>
            <Text style={styles.ravishankarTypo}>Ishwari Bandhe</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>49 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>25 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>120 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Farfoud, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-63.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner5,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.6 `}</Text>
            <Text style={[styles.dilipBaghel, styles.ravishankarTypo]}>
              Dilip Baghel
            </Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>45 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>35 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>90 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Farfoud, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-59.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner6,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.0 `}</Text>
            <Text style={styles.ravishankarTypo}>Ishan Singh Sodhi</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>50 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>35 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>80 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Arang, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-56.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.iphone14ProMax158Inner7,
            styles.frameInnerLayout,
            styles.iphone14InnerPosition,
          ]}
        >
          <View style={styles.framePosition}>
            <View style={[styles.rectangleWrapper, styles.framePosition]}>
              <View style={styles.frameItem} />
            </View>
            <Text
              style={[
                styles.ratings44,
                styles.ageTypo,
                styles.ratings44Position,
                styles.ratings44FlexBox,
              ]}
            >{`Ratings :- 4.2 `}</Text>
            <Text
              style={[styles.ravishankarPatel1, styles.ravishankarTypo]}
            >{`Ravishankar Patel `}</Text>
            <Text style={[styles.age50Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Age - `}</Text>
              <Text style={styles.years}>56 years</Text>
            </Text>
            <Text style={[styles.experience35Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Experience - `}</Text>
              <Text style={styles.years}>46 years</Text>
            </Text>
            <Text style={[styles.regha25Container, styles.containerTypo]}>
              <Text style={styles.ageTypo}>{`Regha - `}</Text>
              <Text style={styles.years}>89 Acre</Text>
            </Text>
            <Text
              style={[
                styles.bagbaharaMahasamudChhattis,
                styles.containerTypo,
                styles.ageTypo,
              ]}
            >
              Raipur, Chhattisgarh
            </Text>
            <Text
              style={[styles.text, styles.containerTypo, styles.ageTypo]}
            >{` `}</Text>
            <Image
              style={styles.image61Icon}
              resizeMode="cover"
              source={require("../assets/image-60.png")}
            />
            <Image
              style={[styles.frameInner, styles.ratings44Position]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.component48, styles.component48Position]}
        onPress={() => navigation.navigate("IPhone14ProMax156")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/component-481.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  ratings44FlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  component48Position: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 168,
    width: 397,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14InnerPosition: {
    left: 16,
    width: 397,
  },
  ageTypo: {
    fontFamily: FontFamily.iBMPlexSansLight,
    fontWeight: "300",
  },
  ratings44Position: {
    top: 129,
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.size_3xs,
    left: 157,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  ravishankarTypo: {
    fontFamily: FontFamily.iBMPlexSansRegular,
    fontSize: FontSize.size_xl,
    left: 157,
    top: 42,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  eReghaAdhiyaTheka: {
    top: 10,
    left: 53,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    width: 34,
  },
  eReghaAdhiyaThekaParent: {
    top: 33,
    left: 71,
    width: 302,
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: 19,
    top: 37,
    width: 40,
    height: 30,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.gainsboro_300,
    borderStyle: "solid",
    borderColor: "#b9b9b9",
    borderWidth: 1,
    width: 377,
    height: 148,
  },
  rectangleWrapper: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  ratings44: {
    left: 54,
    fontSize: FontSize.size_5xs,
  },
  years: {
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
  },
  age50Container: {
    top: 70,
  },
  experience35Container: {
    top: 85,
  },
  regha25Container: {
    top: 100,
  },
  bagbaharaMahasamudChhattis: {
    top: 115,
  },
  text: {
    top: 113,
  },
  image61Icon: {
    top: 31,
    left: 35,
    borderRadius: Border.br_3xs,
    width: 98,
    height: 94,
    position: "absolute",
  },
  frameInner: {
    left: 102,
    width: 12,
    height: 10,
  },
  iphone14ProMax158Inner: {
    top: 17,
  },
  iphone14ProMax158Child: {
    top: 230,
  },
  frameView: {
    top: 443,
  },
  iphone14ProMax158Inner1: {
    top: 656,
  },
  iphone14ProMax158Inner2: {
    top: 869,
  },
  iphone14ProMax158Inner3: {
    top: 1082,
  },
  iphone14ProMax158Inner4: {
    top: 1295,
  },
  dilipBaghel: {
    width: 108,
  },
  iphone14ProMax158Inner5: {
    top: 1508,
  },
  iphone14ProMax158Inner6: {
    top: 1721,
  },
  ravishankarPatel1: {
    width: 161,
  },
  iphone14ProMax158Inner7: {
    top: 1934,
  },
  iphone14ProMax158: {
    top: 92,
    height: 824,
    backgroundColor: Color.white,
  },
  component48: {
    top: 856,
    height: 76,
  },
  iphone14ProMax157: {
    flex: 1,
    height: 932,
    backgroundColor: Color.white,
  },
});

export default IPhone14ProMax157;
