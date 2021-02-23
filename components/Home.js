import React, { useState, useCallback } from 'react';
import { Text, View, Button, Image,ImageBackground,StyleSheet } from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

import List from './List'
const Home = ({navigation}) => {

  // local state
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);

  
    
  

  return(
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require("../image/watermelon.jpg" )}style={styles.bg}>
      <Button title="플레이리스트로이동"onPress={() => navigation.navigate(List)}>
      </Button>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="검색"
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>         
        
    </ImageBackground>
    </View>
  )


}
const styles = StyleSheet.create({

  bg: {width: '100%', height: '100%'},
});

export default Home;