import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import image1 from "../assets/images/coffee5b.png";
import image2 from "../assets/images/coffee6b.png";
import image3 from "../assets/images/coffee8.png";

export default function OnboardingPage() {
  const FlatListRef = useRef(null);
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      FlatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={images}
          ref={FlatListRef}
          horizontal
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image style={styles.image} source={item}></Image>
          )}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
        ></FlatList>
        <View>
          <Text style={styles.title}>Select the Favourite Menu</Text>
          <Text style={styles.subTitle}>
            Sip, relax, and enjoy. One click coffee ordering.
          </Text>
        </View>
        <View>
          <Link href="/onboarding2" asChild>
            <Pressable>
              <Text style={styles.button}>Next</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.bottom}>
          <View>
            <Link href="/signup" asChild>
              <Pressable>
                <MaterialIcons
                  name="arrow-back"
                  size={25}
                  color="rgb(89, 44, 0)"
                />
              </Pressable>
            </Link>
          </View>
          <View style={styles.dot__Wrapper}>
            <View style={styles.dotBlur}></View>
            <View style={styles.dot}></View>
            <View style={styles.dotBlur}></View>
          </View>
          <Text>Skip</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
    resizeMode: "contain",
    marginTop: -30,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: 70,
    height: "100vh",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "arial",
    paddingVertical: "12px",
    letterSpacing: 1,
    marginTop: -140,
    fontWeight: "bold",
    width: 200,
    marginHorizontal: "auto",
    lineHeight: 30,
  },
  subTitle: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "arial",
    letterSpacing: 1,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "rgb(89, 44, 0)",
    width: 250,
    padding: 10,
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    alignSelf: "center",
    fontSize: 14,
    letterSpacing: 1,
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  dot__Wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  dotBlur: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "rgba(89, 44, 0, 0.5)",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "rgb(89, 44, 0)",
  },
});
