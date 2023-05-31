import { View, Text } from "react-native"

const Status = () => {

    const data = {
        Total: {
            confirmed: 11063491,
            death: 156861,
            recovered: 10750680
        },
        New: {
            confirmed: 16577,
            death: 119,
            recovered: 12179
        }
    }

    return (
        <View className="m-7 mb-4 p-6 bg-white/60 rounded-xl space-y-3">
            <Text className="text-lg font-extrabold border-b">INDIA COVID STATUS 📊</Text>
            <View className="space-y-2 border-b-2 pb-2 border-white border-dashed">
                <Text className="font-bold">New confirmed cases: {data.New.confirmed}</Text>
                <Text className="text-red-600 font-bold">New Deaths: {data.New.death}</Text>
                <Text className="text-[#6297FF] font-bold">New recovered cases: {data.New.recovered}</Text>
            </View>
            <View className="space-y-2">
                <Text className="font-bold">Total confirmed cases: {data.Total.confirmed}</Text>
                <Text className="font-bold">Total Deaths: {data.Total.death}</Text>
                <Text className="font-bold">Total recovered cases: {data.Total.recovered}</Text>
            </View>
        </View>
    );
}

export default Status;