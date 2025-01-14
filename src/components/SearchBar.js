import React from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <TextInput
        style={styles.input}
        placeholder="Search News"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <Button title="Search" onPress={onTermSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    margin: 15,
    padding: 10,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
