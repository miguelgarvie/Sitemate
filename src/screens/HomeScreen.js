import React, { useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [articles, setArticles] = useState([]);

  const searchApi = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: '794220d5dfc44f148556698ecb1b811b',
          q: term
        }
      });
      setArticles(response.data.articles);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <NewsList articles={articles} />
    </View>
  );
};

export default HomeScreen;
