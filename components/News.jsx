import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, Linking } from "react-native";
import { useContext, useState } from "react";
import MyContext from "../store/MyContext";

const News = () => {
    const [, , news, , loading, clickedArticle, setClickedArticle] = useContext(MyContext);
    const [expanding, setExpanding] = useState(false);

    const handleOpenLink = (link) => {
        Linking.openURL(link);
    };

    const handleExpand = () => {
        setExpanding(true);
        setTimeout(() => {
            setExpanding(false);
        }, 1000);
    };

    const Item = ({ title, img, author, id, body, link }) => (
        clickedArticle == id && expanding == true 
        ? 
        <ActivityIndicator size="large" className="mt-5" /> 
        :
            <TouchableOpacity className={`bg-white p-2 mt-4 flex ${clickedArticle == id ? "flex-col" : "flex-row"} rounded-xl shadow`}
                onPress={() => {
                    handleExpand();
                    clickedArticle == id ? setClickedArticle(null) : setClickedArticle(id);
                }}>
                <View>
                    <Image source={{ uri: img }} style={clickedArticle != id && { width: 80, height: 80 }} className={`rounded-lg h-full mr-1 ${clickedArticle == id && 'w-full h-[200]'}`} />
                </View>
                <View className={`flex flex-col p-1 ${clickedArticle != id ? 'w-9/12' : 'w-full space-y-2'}`}>
                    <Text className="break-words font-bold">{title}</Text>
                    <Text className={`text-xs text-gray-400 ${clickedArticle != id && 'mr-2 ml-auto'}`}>~ {author}</Text>
                    {clickedArticle == id && <Text className='break-word'>{body}</Text>}
                </View>
                {clickedArticle == id && <TouchableOpacity onPress={() => handleOpenLink(link)} className="w-full">
                    <Text className="text-center text-white bg-blue-500 p-2 rounded-xl mt-1">Open Article ↗</Text>
                </TouchableOpacity>}
            </TouchableOpacity>
    );

    return (
        <View className="p-7 pt-0 flex-1 overflow-hidden">
            <Text className="text-lg font-extrabold border-b">INDIA COVID NEWS 🗞️</Text>
            {loading ? <ActivityIndicator size="large" className="mt-5" /> : <FlatList
                className="mb-20"
                data={news}
                renderItem={item =>
                    <Item title={item.item.title} img={item.item.media} author={item.item.rights} id={item.item._id} link={item.item.link} body={item.item.summary} />
                }
                keyExtractor={item => item._id}
            />}
        </View >
    );
}

export default News;