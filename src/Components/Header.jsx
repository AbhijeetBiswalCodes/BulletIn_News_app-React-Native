import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{ backgroundColor:'#010d21' , height:64 }}>
      <View style={{margin: 17}}>
        <Text style={{fontSize: 17, fontFamily:'Gilroy-Bold' , color: '#434ba1'}}>
          BulletIn
        </Text> 
        <Text style={{ fontFamily:'Gilroy-Medium' , fontSize:13 }} >Get Instant News</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
