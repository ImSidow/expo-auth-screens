import { OnboardingIcon1, OnboardingIcon2, OnboardingIcon3 } from "@/assets/svg/Icon";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { useMemo } from "react";
import { Pressable } from "react-native";
import Slides from "./components/Slides";

const OnboardingScreen = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slidesContent = useMemo(() => {
        return [
            {
                title: "Track Your Crypto",
                description: "Track and buy cryptocurrencies at real value, trade with ease and confidence in one safe and fast application.",
                icon: <OnboardingIcon1 width="250" height="250" />,
            },
            {
                title: "Explore Best Coins",
                description: "All cryptos go through a rigorous evaluation process and are compared to thousands of other crypto projects.",
                icon: <OnboardingIcon2 width="250" height="250" />,
            },
            {
                title: "Fast Optimization",
                description: "Ongoing optimization of portfolios to market conditions and adjustment of cryptocurrency selections.",
                icon: <OnboardingIcon3 width="200" height="200" />,
            },
        ];
    }, []);

    return (
        <View className="flex-1">
            {/*  */}
            <View className="flex flex-row justify-center space-x-5 mt-[5%]">
                {[...Array(slidesContent.length).keys()].map((v) => (
                    <View key={v.toString()} className={`w-[15%] h-1 bg-gray-${v === slideIndex ? "800" : "200"} rounded-lg`} />
                ))}
                {/* <View className="w-[15%] h-1 bg-gray-800 rounded-lg" />
                <View className="w-[15%] h-1 bg-gray-200 rounded-lg" />
                <View className="w-[15%] h-1 bg-gray-200 rounded-lg" /> */}
            </View>

            <View className="h-[80%]">
                <Slides slidesContent={slidesContent} onIndexChange={setSlideIndex} />
            </View>

            {/*  */}
            <View className="flex flex-row justify-center">
                <Pressable className="bg-[#FFBD54] px-16 py-4 rounded-3xl">
                    <Text className="text-xl text-gray-800"> Skip </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default OnboardingScreen;
