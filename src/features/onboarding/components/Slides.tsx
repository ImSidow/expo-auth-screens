import { Text, View } from "@/components/Themed";
import React, { ReactNode } from "react";
import Swiper from "react-native-swiper";

type SlidesProps = {
    slidesContent: { title: string; description: string; icon: ReactNode }[];
    onIndexChange?: (index: number) => void;
};
const Slides: React.FC<SlidesProps> = React.memo(({ slidesContent, onIndexChange }) => {
    return (
        <Swiper showsPagination={false} onIndexChanged={onIndexChange}>
            {slidesContent.map((slide, index) => (
                <React.Fragment key={index.toString()}>
                    <Slide key={index} {...slide} />
                </React.Fragment>
            ))}
        </Swiper>
    );
});

const Slide = (slide: { icon: ReactNode; title: string; description: string }) => {
    return (
        <View className="flex items-center justify-center h-full">
            {slide.icon}
            <Text className="text-3xl mt-[15%] font-bold text-gray-800">{slide.title}</Text>
            <Text className="w-10/12 text-center mt-5 text-[21px] text-gray-600">{slide.description}</Text>
        </View>
    );
};

export default Slides;
