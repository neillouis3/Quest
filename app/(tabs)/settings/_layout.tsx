import React from "react";
import { Stack } from "expo-router";
import StyleSheets from "react-native";
import { View } from "react-native";

export default function Layout({  }) {
    return (
        <Stack>
        <Stack.Screen name="Settings" />
            <View></View>
        </Stack>
    );

}

// Path: Quest/app/%28tabs%29/settings/_layout.tsx

