import { BackArrowIcon } from "@/assets/svg/Icon";
import { router } from "expo-router";
import { Pressable } from "react-native";

const BackButton = () => {
    return (
        <Pressable onPress={() => router.back()} className="self-start p-2 mt-1 ml-1 rounded-md">
            <BackArrowIcon width="30" height="30" className="text-gray-800" />
        </Pressable>
    );
};

export default BackButton;
