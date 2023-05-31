import { ImageBackground, Text, View, ScrollView } from "react-native";
import bg from "../assets/bg.jpg";
import Search from "../components/Search";
import { StatusBar } from "expo-status-bar";
import Status from "../components/Status";
import News from "../components/News";

export default function Page() {
  return (
    <ImageBackground source={bg} className="pt-8 h-[110%]">
      <StatusBar backgroundColor="#D9D9D9" />
      <Search />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <Status />
        <News />
      </ScrollView>
    </ImageBackground>

  );
}


