import { View, Text } from "react-native";
import { useContext } from "react";
import MyContext from "../store/MyContext"; 

const Status = () => {
    // getting the stats data from the context
    const [data] = useContext(MyContext);

    return (
        <View className="m-7 mb-4 p-6 bg-white/60 rounded-xl space-y-3">
            <Text className="text-lg font-extrabold border-b">INDIA COVID STATUS 📊</Text>
            <View className="space-y-2 border-b-2 pb-2 border-white border-dashed">
                <Text className="font-bold">New confirmed cases: {data.newlyConfirmedCases}</Text>
                <Text className="text-red-600 font-bold">New Deaths: {data.newDeaths}</Text>
                <Text className="text-[#6297FF] font-bold">New recovered cases: {data.newlyRecoveredCases}</Text>
            </View>
            <View className="space-y-2">
                <Text className="font-base">Total confirmed cases: {data.totalConfirmedCases}</Text>
                <Text className="font-base">Total Deaths: {data.totalDeaths}</Text>
                <Text className="font-base">Total recovered cases: {data.totalRecoveredCases}</Text>
            </View>
        </View>
    );
}

export default Status;