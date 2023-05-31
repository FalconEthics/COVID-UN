import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, Linking } from "react-native"
import TestImg1 from "../assets/TestImg1.jpg";
import bg from "../assets/bg.jpg";
import { Link } from "expo-router";

const newsDetails = () => {
    const handleOpenLink = () => {
        const url = 'https://www.google.com'; // Replace with your desired URL
        Linking.openURL(url);
    };


    return (
        <SafeAreaView>
            <ImageBackground source={bg} className="pt-8 flex h-screen justify-center">
                <Image source={TestImg1} className="w-full mt-3" />
                <View className="p-6 flex flex-col space-y-3 bg-white/70 m-3 rounded-xl">
                    <Text className="text-lg font-black break-words border-b border-dashed pb-2">Coronavirus: India records 16,738 cases, 138 deaths in a day; tally over 1.10 crore</Text>
                    <Text className="text-sm">~ Mr. HT devinc</Text>
                    <Text className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores sit officiis fugit temporibus rerum, eius, vitae cumque voluptatem facilis sunt. Quaerat incidunt quas dignissimos expedita recusandae ex neque itaque!</Text>
                </View>
                <View className="flex flex-row w-full m-3 mt-0 space-x-2">
                    <TouchableOpacity onPress={handleOpenLink} className="w-[46%]">
                        <Text className="text-center text-white bg-blue-500 p-2 rounded-xl p-2 mt-0">Open Article ↗</Text>
                    </TouchableOpacity>
                    <Link href={"/"} className="text-center text-white bg-blue-500 p-2 rounded-xl p-2 mt-0 w-[46%]">
                        <Text>Back ↩</Text>
                    </Link>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default newsDetails;