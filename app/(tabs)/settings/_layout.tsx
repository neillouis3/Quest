import React from "react";
import { Stack } from "expo-router";

export default function Layout({  }) {
    return (
        <Stack>
        <Stack.Screen name="Settings" />
        </Stack>
    );

}

export const _layout = Layout;

