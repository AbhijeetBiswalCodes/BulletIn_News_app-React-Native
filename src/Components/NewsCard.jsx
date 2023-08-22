import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useFetch from '../Hooks/UseFetch';
import LinearGradient from 'react-native-linear-gradient';

const NewsCard = ({item}) => {
  const publishedAtDate = new Date(item?.publishedAt).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const publishedAtTime = new Date(item?.publishedAt).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
  }); 

  console.log(item)

  return (
    <View
      style={{
        marginRight: 18,
        marginLeft: 18,
        marginTop: 28,
        height: 540,
        width: 328,
        borderColor: '#434ba1', 
        borderWidth: 2,
        borderRadius: 15,
      }}>
      <ImageBackground
        style={{height: 370, width: '100%'}}
        source={{uri: item?.urlToImage}}
        imageStyle={{borderTopLeftRadius: 13, borderTopRightRadius: 13}}>
        <LinearGradient
          colors={['rgba(4, 21, 45, 0)', '#010d21']} // Colors array with the gradient
          locations={[0, 0.809]} // Locations array that corresponds to the colors array
          style={styles.blendOverlay}>
          <View style={{marginRight: 10, marginLeft: 10, marginTop: 'auto'}}>
            <Text style={{color: '#5f66b0', fontFamily: 'Gilroy-Medium'}}>
              {item?.source?.name}
            </Text>
            <Text
              style={{fontSize: 18, marginTop: 4, fontFamily: 'Gilroy-Bold'}}>
              {item?.title}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
        <Text
          style={{fontSize: 15, color: '#636363', fontFamily: 'Gilroy-Medium'}}
          numberOfLines={5}
         >
          {item?.description}
        </Text>
      </View>
      <View style={{marginTop: 'auto', marginBottom: 28, marginLeft: 10 , marginRight: 13 , flexDirection:'row' , justifyContent:'space-between'}}> 
      <View>
        <Text style={{fontFamily: 'Gilroy-Medium'}}>{publishedAtTime}</Text>
        <Text style={{fontFamily: 'Gilroy-Medium'}}>{publishedAtDate}</Text>  
        </View>
        <View style={{ marginTop:'auto' }} >
          <TouchableOpacity style={{ backgroundColor:'#5f66b0' , height:25 , width:80 , alignItems:'center' , justifyContent:'center' , borderRadius:4}} >
            <Text style={{fontFamily: 'Gilroy-Medium' , fontSize:11}} >Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  blendOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%', // Adjust the height as per your requirement for the blending effect
  },
});
