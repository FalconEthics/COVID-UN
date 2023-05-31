import { Modal, FlatList, View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react"
import logo from "../assets/logo.png"

const Search = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('IN');

    const options = [
        { label: 'India', value: 'IN' },
        { label: 'United States of America', value: 'US' },
        { label: 'United Kingdom', value: 'UK' },
    ];

    const handleOptionPress = (value) => {
        setSelectedValue(value);
        setModalVisible(false);
    };


    return (
        <View className="p-10 rounded-b-2xl space-y-0 bg-[#D9D9D9] w-full">
            <View className="flex flex-row">
                <Image
                    style={{ width: 40, height: 40, }}
                    source={logo} />
                <Text className="p-1 text-lg">COVID-19 NEWS & </Text>
                <Text className="p-1 text-lg text-[#6297FF]">STATS</Text>
            </View>
            <TextInput placeholder="Search for keywords" className="bg-white p-3 rounded-xl shadow mb-3" />
            <View className="flex flex-row space-x-2">
                <TouchableOpacity onPress={() => setModalVisible(true)} className="p-3 w-6/12 bg-white rounded-lg shadow">
                    <View className="flex flex-row justify-between">
                        <Text>Country: {selectedValue}</Text>
                        <Text>˅</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="p-3 bg-[#6297FF] w-[47%] rounded-lg shadow">
                    <View className="flex flex-row justify-between">
                        <Text>Search</Text>
                        <Text>🔍</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <FlatList
                    data={options}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className="flex flex-row justify-between p-5 border-b border-gray-200"
                            onPress={() => handleOptionPress(item.value)}>
                            <Text>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.value}
                />
            </Modal>
        </View>
    );
}

export default Search;