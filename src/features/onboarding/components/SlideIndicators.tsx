import { View } from "@/components/Themed";

const SlideIndicators: React.FC<{ count: number; currentIndex: number }> = ({ count, currentIndex }) => {
    return (
        <View className="flex flex-row justify-center space-x-5 mt-[5%]">
            {[...Array(count).keys()].map((v) => {
                const bgColor = v === currentIndex ? "bg-blue-700" : "bg-blue-200";
                return <View key={v.toString()} className={`w-[15%] h-1 rounded-lg ${bgColor}`} />;
            })}
        </View>
    );
};

export default SlideIndicators;
