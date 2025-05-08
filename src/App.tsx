import React from "react";
import { SafeAreaView,Text,View,TouchableOpacity ,StyleSheet,FlatList,ScrollView,Image,Dimensions} from "react-native";
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
        <Text style={style.headerText}>News</Text>
        <FlatList data={newsData} renderItem={RenderNews} 
          keyExtractor={(item)=> item.u_id.toString()} 
          ListHeaderComponent={()=>(
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newsBannerData.map(banner => (
              <Image style={style.image}
                key={banner.id} 
                source={{ uri: banner.imageUrl}} 
              />
            ))}
          </ScrollView>
          )}/>
    </SafeAreaView>
   
  );
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f8ff",
  },
  image:{
    height:Dimensions.get('window').height/5,
    width:Dimensions.get('window').width/2,
  },
  headerText:{
    fontSize:30,
    fontWeight:"bold",
    marginLeft:10,
  }
}
);
export default News;