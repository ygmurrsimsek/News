import React from "react";
import { SafeAreaView,Text,View,TouchableOpacity ,StyleSheet,FlatList} from "react-native";
import newsData from "./data/news_data.json";
const News = () => {

  console.log(newsData);
  return(
    <SafeAreaView style={style.container}>
      <FlatList data={newsData} renderItem={({item})=> <Text>{item.author}</Text>} keyExtractor={(item)=> item.toString()} />
    </SafeAreaView>
  );
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f8ff",
  }
}
);
export default News;