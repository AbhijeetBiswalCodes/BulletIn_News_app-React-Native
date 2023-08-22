import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SwipeGuide = ({onClose}) => {
  return (
    <View style={styles.container} onPress={onClose}>
      <View style={styles.guideContainer}>
        <View style={styles.leftGuide}>
          <Icon name="arrow-undo-outline" size={80} />
          <Text style={styles.text}>Swipe left</Text>
          <Text style={styles.text}> for next</Text>
        </View>

        <View style={styles.rightGuide}>
          <Icon name="arrow-redo-outline" size={80} />
          <Text style={styles.text}>Swipe right</Text>
          <Text style={styles.text}> for previous</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onClose}
        style={{
          marginTop: 100,
          backgroundColor: '#434ba1',
          height: 28,
          width: 80,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: 'Gilroy-Medium', color: '#ffff'}}>Okay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  guideContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between', // Separates the guides to left and right
    paddingHorizontal: 20,
    width: '100%', // Adjust the width as needed
    alignSelf: 'center',
  },
  leftGuide: {
    alignItems: 'flex-start', // Adjusted this line
    paddingLeft: 4, // Adjusted this line
  },
  rightGuide: {
    alignItems: 'flex-end', // Adjusted this line
    paddingRight: 4, // Adjusted this line
  },
  text: {
    color: '#ffff',
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
  },
});

export default SwipeGuide;
