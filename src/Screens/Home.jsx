import {
  Animated,
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from '../Hooks/UseFetch';
import Header from '../Components/Header';
import NewsCard from '../Components/NewsCard';
import Categories from './Categories';
import Swiper from 'react-native-swiper';
import SwipeGuide from '../Components/SwipeGuide';
import BottomBar from '../Components/BottomBar';

const Home = () => {
  const {data, isLoading, refetch} = useFetch('top-headlines?country=in');
  const [refreshing, setRefreshing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const closeGuide = () => {
    setShowGuide(false);
  };

  const refreshData = async () => {
    setRefreshing(true);
    try {
      // Fetch new data using your fetch function
      const newData = await refetch();

      if (newData.length > 0) {
        setData(newData);
      }
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={{backgroundColor: '#010d21', height: '100%'}}> 
      <Swiper
        loop={false}
        showsPagination={false}
        // onIndexChanged={(index) => {
        //   // Handle index change if needed
        // }}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.swiperSlide}>
            <NewsCard item={item} isLoading={isLoading} />
          </View>
        ))}
      </Swiper>
      {showGuide && <SwipeGuide onClose={closeGuide} />}

      <RefreshControl
        refreshing={refreshing}
        onRefresh={refreshData}
        colors={['blue']} // Set the color of the refresh circle
        progressBackgroundColor={'black'} // Set the background color
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  swiperSlide: {
    flex: 1,
    alignItems: 'center',
  },
  swiperContainer: {
    flexDirection: 'row',
  },
});

export default Home;
