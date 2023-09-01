import { GoogleIcon, VerticalLogo } from "@/assets/svg/Icon";
import { Text, View } from "@/components/Themed";
import BackButton from "@/components/ui/BackButton";
import { router } from "expo-router";
import { Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
    return (
        <View className="flex-1">
            <BackButton />

            <View className="flex justify-center items-center pt-5">
                <VerticalLogo width="80" height="80" />

                <Text className="text-[30px] mt-10 text-gray-900"> Welcome Back 👋 </Text>
                <Text className="text-[15px] mt-1 text-gray-600"> Please enter your details. </Text>

                <Pressable className="flex flex-row justify-center items-center space-x-2 mt-10 border border-gray-300 w-[90%] py-3.5 rounded-md">
                    <GoogleIcon width="20" height="20" />
                    <Text className="text-[16px]"> Log in with Google </Text>
                </Pressable>

                <View className="flex flex-row justify-center items-center mt-10">
                    <View className="w-[40%] h-[1px] bg-gray-300"></View>
                    <Text className="text-gray-400 mx-2"> OR </Text>
                    <View className="w-[40%] h-[1px] bg-gray-300"></View>
                </View>

                <View className="w-[90%] mt-8">
                    <Text className="text-[15px] mb-1.5"> Email </Text>
                    <TextInput className="border border-gray-300 px-4 py-3.5 rounded-md text-[16px]" placeholder="example@mail.com" />
                </View>

                <View className="w-[90%] mt-8">
                    <View className="flex flex-row justify-between mb-1.5">
                        <Text className="text-[15px] mb-1"> Password </Text>
                        <Text className="text-[15px] mb-1 text-[#326BEB]"> Forgot password </Text>
                    </View>
                    <TextInput className="border border-gray-300 px-4 py-3.5 rounded-md text-[16px]" placeholder="your password" />
                </View>

                <Pressable className="flex flex-row justify-center items-center space-x-2 mt-14 bg-[#326BEB] w-[90%] py-3.5 rounded-md">
                    <Text className="text-[16px] text-white"> Login</Text>
                </Pressable>

                <View className="flex flex-row space-x-1 mt-10">
                    <Text className="text-[15px] text-gray-600">Don't have an account?</Text>
                    <Text className="text-[14px] text-gray-800 font-bold" onPress={() => router.push("/register")}>
                        Sign up
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
