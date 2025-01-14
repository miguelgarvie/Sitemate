import React from 'react';
import { View, Text, Image } from 'react-native';

const NewsItem = ({ article }) => {
  return (
    <View>
      <Image source={{ uri: article.urlToImage }} style={{ width: 100, height: 100 }} />
      <Text>{article.title}</Text>
      <Text>{article.description}</Text>
    </View>
  );
};

export default NewsItem;
