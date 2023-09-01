import { GoogleIcon, VerticalLogo } from "@/assets/svg/Icon";
import { Text, View } from "@/components/Themed";
import BackButton from "@/components/ui/BackButton";
import { router } from "expo-router";
import { Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const RegisterScreen = () => {
    return (
        <View className="flex-1">
            <BackButton />

            <View className="flex justify-center items-center pt-3">
                <VerticalLogo width="80" height="80" />

                <Text className="text-[30px] mt-8 text-gray-900"> Create your account </Text>
                <Text className="text-[15px] mt-1 text-gray-600"> Please enter your details. </Text>

                <Pressable className="flex flex-row justify-center items-center space-x-2 mt-8 border border-gray-300 w-[90%] py-3.5 rounded-md">
                    <GoogleIcon width="20" height="20" />
                    <Text className="text-[16px]"> Sign up with Google </Text>
                </Pressable>

                <View className="flex flex-row justify-center items-center mt-8">
                    <View className="w-[40%] h-[1px] bg-gray-300"></View>
                    <Text className="text-gray-400 mx-2"> OR </Text>
                    <View className="w-[40%] h-[1px] bg-gray-300"></View>
                </View>

                <View className="w-[90%] mt-6">
                    <Text className="text-[15px] mb-1.5"> Name </Text>
                    <TextInput className="border border-gray-300 px-4 py-3.5 rounded-md text-[16px]" placeholder="Jane Doe" />
                </View>

                <View className="w-[90%] mt-6">
                    <Text className="text-[15px] mb-1.5"> Email </Text>
                    <TextInput className="border border-gray-300 px-4 py-3.5 rounded-md text-[16px]" placeholder="example@mail.com" />
                </View>

                <View className="w-[90%] mt-6">
                    <Text className="text-[15px] mb-1.5"> Password </Text>
                    <TextInput className="border border-gray-300 px-4 py-3.5 rounded-md text-[16px]" placeholder="min 8. characters" />
                </View>

                <Pressable className="flex flex-row justify-center items-center space-x-2 mt-10 bg-[#326BEB] w-[90%] py-3.5 rounded-md">
                    <Text className="text-[16px] text-white"> Register </Text>
                </Pressable>

                <View className="flex flex-row space-x-1 mt-7">
                    <Text className="text-[15px] text-gray-600"> I have already got one,</Text>
                    <Text className="text-[14px] text-gray-800 font-bold" onPress={() => router.push("/login")}>
                        Login
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;
