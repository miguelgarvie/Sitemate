import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
      const loadHistory = async () => {
        try {
          const savedHistory = await AsyncStorage.getItem('searchHistory');
          if (savedHistory) setHistory(JSON.parse(savedHistory));
        } catch (err) {
          console.error('Failed to load search history', err);
        }
      };
      loadHistory();
    }, []);

  const saveSearchTerm = async (searchTerm) => {
    const updatedHistory = [searchTerm, ...history];
    setHistory(updatedHistory);
    await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const searchApi = async () => {
    try {
      await saveSearchTerm(term);
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: '794220d5dfc44f148556698ecb1b811b',
          q: term
        }
      });
      setArticles(response.data.articles);
    } catch (err) {
      Alert.alert('Error', 'Something went wrong while fetching the news items.');
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
