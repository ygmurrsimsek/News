import React from "react";
import { SafeAreaView,Text,View,TouchableOpacity ,StyleSheet,FlatList} from "react-native";
import newsData from "./data/news_data.json";
import NewsCard from "./Components/NewsCard/NewsCard.jsx";
const News = () => {

  return(
    <SafeAreaView style={style.container}>
      <FlatList data={newsData} renderItem={({item})=> 
         <NewsCard news={item}/>} 
         keyExtractor={(item)=> item.u_id.toString()} />
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