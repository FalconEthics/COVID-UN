import { ImageBackground, ScrollView } from "react-native";
import bg from "../assets/bg.jpg";
import Search from "../components/Search";
import { StatusBar } from "expo-status-bar";
import Status from "../components/Status";
import News from "../components/News";
import MyContext from "../store/MyContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  //to store the stats data
  const [data, setData] = useState({});
  // to store the country code
  const [country, setCountry] = useState('IN');
  // to store the news data
  const [news, setNews] = useState([{}]);
  // to store the search query
  const [query, setQuery] = useState('covid');
  // to store the loading state of the news
  const [loading, setLoading] = useState(false);
  // to store the clicked article id
  const [clickedArticle, setClickedArticle] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      // to fetch the stats data
      const options = {
        method: 'GET',
        url: `https://coronavirus-smartable.p.rapidapi.com/stats/v1/${country}/`,
        headers: {
          'X-RapidAPI-Key': '6984c64f32mshfce0d19c79c79c5p141bb2jsn87e9f22b561d',
          'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
        }
      };
      try {
        // to set the loading state to true
        const response = await axios.request(options);
        setData(response.data.stats);
      }
      catch (error) {
        console.error(error);
      }
    }
    async function fetchNews() {
      // to fetch the news data
      const options = {
        method: 'GET',
        url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
        params: {
          // to set the query to the country name
          q: query,
          lang: 'en',
          // to set the country code from the state
          country: country,
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': '6984c64f32mshfce0d19c79c79c5p141bb2jsn87e9f22b561d',
          'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
        }
      };
      try {
        // to set the loading state to true
        setLoading(true);
        const response = await axios.request(options);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        // to set the loading state to false and show the error message
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
    // to fetch the data every time the country code and query changes
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


