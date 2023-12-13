import React from "react";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function Layout({  }) {
    return (
        <Stack>
        <Stack.Screen name="Settings" />
            <View
                style={styles.container}
            >

            </View>
        </Stack>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",        alignItems: "center",
        justifyContent: "center",
    },
});