import React from 'react';
import { FlatList } from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
  return (
    <FlatList
      data={articles}
      keyExtractor={(article) => article.url}
      renderItem={({ item }) => <NewsItem article={item} />}
    />
  );
};

export default NewsList;
