import { Modal, FlatList, View, Text, Image, TextInput, TouchableOpacity, Keyboard } from "react-native"
import { useState } from "react"
import logo from "../assets/logo.png";
import { useContext } from "react";
import MyContext from "../store/MyContext";

const Search = () => {
    // to store the modal visibility state of the country picker
    const [modalVisible, setModalVisible] = useState(false);
    // to store the selected country value
    const [selectedValue, setSelectedValue] = useState('IN');
    // to store the search query
    const [text, onChangeText] = useState('');
    // getting the country and query setter from the context
    const [, setCountry, , setQuery] = useContext(MyContext);

    const options = [
        // to store the country options
        { label: 'India', value: 'IN' },
        { label: 'United States of America', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'GB' },
        { label: 'Australia', value: 'AU' },
        { label: 'China', value: 'CN' },
        { label: 'Japan', value: 'JP' },
        { label: 'France', value: 'FR' },
        { label: 'Germany', value: 'DE' },
        { label: 'Italy', value: 'IT' },
        { label: 'Spain', value: 'ES' },
        { label: 'Russia', value: 'RU' },
        { label: 'Brazil', value: 'BR' },
        { label: 'Mexico', value: 'MX' },
        { label: 'Argentina', value: 'AR' },
        { label: 'South Africa', value: 'ZA' },
        { label: 'Nigeria', value: 'NG' },
        { label: 'Egypt', value: 'EG' },
        { label: 'Kenya', value: 'KE' },
        { label: 'Pakistan', value: 'PK' },
        { label: 'Bangladesh', value: 'BD' },
        { label: 'Sri Lanka', value: 'LK' },
        { label: 'Afghanistan', value: 'AF' },
        { label: 'Nepal', value: 'NP' },
        { label: 'Bhutan', value: 'BT' },
        { label: 'Maldives', value: 'MV' },
        { label: 'Myanmar', value: 'MM' },
        { label: 'Thailand', value: 'TH' },
        { label: 'Malaysia', value: 'MY' },
        { label: 'Singapore', value: 'SG' },
        { label: 'Indonesia', value: 'ID' },
        { label: 'Philippines', value: 'PH' },
        { label: 'Vietnam', value: 'VN' },
        { label: 'Cambodia', value: 'KH' },
        { label: 'Laos', value: 'LA' },
        { label: 'Mongolia', value: 'MN' },
        { label: 'North Korea', value: 'KP' },
        { label: 'South Korea', value: 'KR' },
        { label: 'Taiwan', value: 'TW' },
        { label: 'Hong Kong', value: 'HK' },
        { label: 'Macau', value: 'MO' },
    ];

    const handleOptionPress = (value) => {
        // to set the selected country value
        setSelectedValue(value);
        setCountry(value);
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
            <TextInput placeholder="Search for keywords" className="bg-white p-3 rounded-xl shadow mb-3" onChangeText={onChangeText} value={text} />
            <View className="flex flex-row space-x-2">
                <TouchableOpacity onPress={() => setModalVisible(true)} className="p-3 w-6/12 bg-white rounded-lg shadow">
                    <View className="flex flex-row justify-between">
                        <Text>Country: {selectedValue}</Text>
                        <Text>˅</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="p-3 bg-[#6297FF] w-[47%] rounded-lg shadow" onPress={() => {
                    if (text != '') {
                        // to set the search query on search button press only if the query is not empty
                        // to remove all the spaces and convert the query to lowercase and then dismiss the keyboard
                        setQuery(text.toLowerCase().replace(/\s/g, ""));
                        onChangeText('');
                        Keyboard.dismiss();
                    }
                }}>
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