import { ImageBackground, Text, View, ScrollView } from "react-native";
import bg from "../assets/bg.jpg";
import Search from "../components/Search";
import { StatusBar } from "expo-status-bar";
import Status from "../components/Status";
import News from "../components/News";
import MyContext from "../store/MyContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('IN');
  const [news, setNews] = useState([{}]);
  const [query, setQuery] = useState('covid');
  const [loading, setLoading] = useState(false);
  const [clickedArticle, setClickedArticle] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      const options = {
        method: 'GET',
        url: `https://coronavirus-smartable.p.rapidapi.com/stats/v1/${country}/`,
        headers: {
          'X-RapidAPI-Key': '6984c64f32mshfce0d19c79c79c5p141bb2jsn87e9f22b561d',
          'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setData(response.data.stats);
      }
      catch (error) {
        console.error(error);
      }
    }
    async function fetchNews() {
      const options = {
        method: 'GET',
        url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
        params: {
          q: query,
          lang: 'en',
          country: country,
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': '6984c64f32mshfce0d19c79c79c5p141bb2jsn87e9f22b561d',
          'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
        }
      };
      try {
        setLoading(true);
        const response = await axios.request(options);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setNews([{
          title: "The search feature is still under development, kindly use the following keywords only: covid, covid-19, coronavirus, коронавирус, koronavirüs, koronavirüs, coronavirüs, التاجى",
          media: "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg",
          rights: "Try again later",
          summary: "Something went wrong. Please try again later."
        }]);
      }
    }
    fetchStats();
    fetchNews();
  }, [country, query])

  return (
    <MyContext.Provider value={[data, setCountry, news, setQuery, loading, clickedArticle, setClickedArticle]}>
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
    </MyContext.Provider>
  );
}


