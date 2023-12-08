import React from "react";
import { Stack } from "expo-router";

export default function Layout({  }) {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

