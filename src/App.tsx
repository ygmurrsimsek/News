import React from "react";
import { SafeAreaView,Text,View,TouchableOpacity ,StyleSheet,FlatList,ScrollView,Image} from "react-native";
import newsData from "./data/news_data.json";
import NewsCard from "./Components/NewsCard/NewsCard.jsx";
import newsBannerData from "./data/news_banner_data.json";
const News = () => {
  console.log(NewsCard);

  const RenderNews=({item})=> {
    return(
      <NewsCard news={item}/>
    )
  }

  console.log(newsData);
  return(
    <SafeAreaView style={style.container}>
      <View>
        <ScrollView>
          {newsBannerData.map(banner => (
            console.log(banner.id),
            console.log(banner.imageUrl),

            <Image 
              key={banner.id} 
              source={{ uri: banner.imageUrl }} 
            />
          ))}
        </ScrollView>
        <FlatList data={newsData} renderItem={RenderNews} 
          keyExtractor={(item)=> item.u_id.toString()} />
      </View>
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