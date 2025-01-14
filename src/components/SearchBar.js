import React from 'react';
import { TextInput, Button, View } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View>
      <TextInput
        placeholder="Search News"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <Button title="Search" onPress={onTermSubmit} />
    </View>
  );
};

export default SearchBar;
