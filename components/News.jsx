import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, Linking } from "react-native";
import { useContext, useState, useMemo } from "react";
import MyContext from "../store/MyContext";

const News = () => {
    // getting the news data from the context
    const [, , news, , loading, clickedArticle, setClickedArticle] = useContext(MyContext);
    // to store the expanding state of the article
    const [expanding, setExpanding] = useState(false);

    const Item = useMemo(() => {
    
    const handleOpenLink = (link) => {
        // to open the article in the browser
        Linking.openURL(link);
    };

    const handleExpand = () => {
        // to set the expanding state to true
        setExpanding(true);
        setTimeout(() => {
            // to set the expanding state to false after 1 second
            setExpanding(false);
        }, 1000);
    };

    return ({ title, img, author, id, body, link }) => (
        // to render the news item component only if the article is not expanding
        clickedArticle == id && expanding == true 
        ? 
        <ActivityIndicator size="large" className="mt-5" /> 
        :
        // to render the news item component conditionally depending on the expanding state and if the item is clicked
            <TouchableOpacity className={`bg-white p-2 mt-4 flex ${clickedArticle == id ? "flex-col" : "flex-row"} rounded-xl shadow`}
                onPress={() => {
                    handleExpand();
                    // to set the clicked article id to null if the article is already clicked
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
    }, [clickedArticle, expanding]);

    return (
        <View className="p-7 pt-0 flex-1 overflow-hidden">
            <Text className="text-lg font-extrabold border-b">INDIA COVID NEWS 🗞️</Text>
            {/* to display the loading indicator if the news is loading */}
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