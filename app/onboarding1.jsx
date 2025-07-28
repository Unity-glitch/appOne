import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

import coffeeImage from "@/assets/images/coffee5.jpg";


export default function OnboardingPage() {
    return (
        <View style={styles.container}>
        <ImageBackground
            source={coffeeImage}
            style={styles.image}
        >
            <View style={styles.heroSection}>
            <Text style={styles.title}>Welcome to Our Coffee Shop</Text>
            <Text style={styles.subTitle}>
                Discover the finest coffee blends and cozy atmosphere.
            </Text>
            <Link href="/login" asChild>
                <Pressable>
                <Text style={styles.buttonGetStarted}>Next</Text>
                </Pressable>
            </Link>
            </View>
        </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    heroSection: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        marginBottom: 20,
    },
    buttonGetStarted: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: "black",
        fontSize: 16,
        textAlign: "center",
    },
});