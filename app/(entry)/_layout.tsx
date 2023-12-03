import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() { 
    return (
        <Stack>
            <Stack.Screen name="index" />
        </Stack>
    )
}