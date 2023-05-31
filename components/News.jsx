import { Text, View, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import TestImg1 from "../assets/TestImg1.jpg";
import TestImg2 from "../assets/TestImg2.jpg";
import TestImg3 from "../assets/TestImg3.jpg";
import TestImg4 from "../assets/TestImg4.jpg";
import TestImg5 from "../assets/TestImg5.jpg";


const News = () => {
    const router = useRouter();

    const DATA = [
        {
            id: '1',
            title: 'Coronavirus: India records 16,738 cases, 138 deaths in a day; tally over 1.10 crore',
            img: TestImg1,
            author: '~ Mr. HT devinc',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores sit officiis fugit temporibus rerum, eius, vitae cumque voluptatem facilis sunt. Quaerat incidunt quas dignissimos expedita recusandae ex neque itaque!'
        },
        {
            id: '2',
            title: 'Covid-19: India records 16,738 cases, 138 deaths in a day; tally over 1.10 crore',
            img: TestImg2,
            author: '~ Times of India',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores sit officiis fugit temporibus rerum, eius, vitae cumque voluptatem facilis sunt. Quaerat incidunt quas dignissimos expedita recusandae ex neque itaque!'
        },
        {
            id: '3',
            title: 'Vaccine hesitancy: 40% of health workers in UP\'s Hardoi refuse to take Covid-19 vaccine',
            img: TestImg3,
            author: '~ NDTV News',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores sit officiis fugit temporibus rerum, eius, vitae cumque voluptatem facilis sunt. Quaerat incidunt quas dignissimos expedita recusandae ex neque itaque!'
        },
        {
            id: '4',
            title: 'Cowin 2.0: How to register for Covid-19 vaccine online, get an appointment',
            img: TestImg4,
            author: '~ India Today',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores sit officiis fugit temporibus rerum, eius, vitae cumque voluptatem facilis sunt. Quaerat incidunt quas dignissimos expedita recusandae ex neque itaque!'
        },
        {
            id: '5',
            title: "PM Modi takes first dose of Covid-19 vaccine at Delhi's AIIMS",
            img: TestImg5,
            author: '~ The Hindu',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores sit officiis fugit temporibus rerum, eius, vitae cumque voluptatem facilis sunt. Quaerat incidunt quas dignissimos expedita recusandae ex neque itaque!'
        },

    ];

    const Item = ({ title, img, author, body }) => (
        <View className="bg-white p-2 mt-4 flex flex-row rounded-xl shadow space-x-2" >
            <View>
                <Image source={img} style={{ width: 80, height: 80 }} className="rounded-lg"/>
            </View>
            <View className="w-9/12 flex flex-col">
                <Text onPress={() => {
                    router.push("/newsDetails")
                }} className="break-words">{title}</Text>
                <Text className="text-xs text-gray-400 ml-auto pr-3">{author}</Text>
            </View>
        </View>
    );

    return (
        <View className="p-7 pt-0 flex-1 overflow-hidden">
            <Text className="text-lg font-extrabold border-b">INDIA COVID NEWS 🗞️</Text>
            <FlatList
                className="mb-20"
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} img={item.img} author={item.author} body={item.body} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default News;