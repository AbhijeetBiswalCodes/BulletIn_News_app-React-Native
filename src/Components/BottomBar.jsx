import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const BottomBar = () => {
  const [clicked, setClicked] = useState(false); 
  const navigation = useNavigation();

  const toggleClicked = () => {
    setClicked(!clicked); 
    navigation.navigate('Categories')
  };  

  const preicon = () => {
    setClicked(false)
  }

  const handleIconPress = () => {
    if (clicked) {
      navigation.goBack(); 
    } else {
      toggleClicked(); 
    } 
    if(!clicked) {
      setClicked(false)
    }
  }; 

  return (
    <View style={{height: 55, width: '100%', backgroundColor: '#010d21'}}>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 18,
          marginLeft: 18,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12}}>
            Top-Headlines
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 12,
              color: '#5f66b0',
            }}>
            India
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleIconPress} 
          style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 7}}>
              <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12}}>
                Explore by
              </Text>
              <Text
                style={{
                  fontFamily: 'Gilroy-Medium',
                  fontSize: 12,
                  color: '#5f66b0',
                }}>
                Categories
              </Text>
            </View>
            <View style={{}}>
            <Icon
                name={clicked ? 'close-outline' : 'apps-outline' } // Change the icon based on the clicked state
                size={25}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({});
