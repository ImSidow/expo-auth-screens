import { OnboardingIcon1, OnboardingIcon2, OnboardingIcon3 } from "@/assets/svg/Onboarding";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { useMemo } from "react";
import { Pressable } from "react-native";
import Slides from "./components/Slides";
import { Link } from "expo-router";
import SlideIndicators from "./components/SlideIndicators";

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
            <SlideIndicators count={slidesContent.length} currentIndex={slideIndex} />

            <View className="h-[80%]">
                <Slides slidesContent={slidesContent} onIndexChange={setSlideIndex} />
            </View>

            <View className="flex flex-row justify-center">
                <Link href="/login" asChild>
                    <Pressable className="bg-blue-500 px-16 py-4 rounded-3xl">
                        <Text className="text-xl text-white"> Skip </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
};

export default OnboardingScreen;
