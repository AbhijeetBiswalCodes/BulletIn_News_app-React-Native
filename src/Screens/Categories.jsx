import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Category} from '../utils/Constants';

const Categories = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        {Category.map((item, i) => (
          <View key={i} style={styles.imageContainer}>
            <ImageBackground style={styles.image} source={{uri: item.image}}>
              <LinearGradient
                colors={['rgba(4, 21, 45, 0)', '#010d21']}
                locations={[0, 0.809]}
                style={styles.overlay}>
                <Text style={styles.text}>{item.name}</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010d21',
    height: '100%',
  },
  cardcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 18,
    marginTop: 0,
    marginLeft: 10,
  },
  imageContainer: {
    width: '48%', // Adjust as needed for spacing
    marginVertical: 10,
    marginTop: 10,
  },
  image: {
    height: 170,
    width: 130,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
  },
});
