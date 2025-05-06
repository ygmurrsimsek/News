import React from "react";
import {View,Text,Image} from "react-native";
import styles from "./NewsCard.style";

  const NewsCard = ({news}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri:news.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
        <Text>{news.publishedAt}</Text>
      </View>
    );
  }
  



export default NewsCard;