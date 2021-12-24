import React from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import AppVideoCard from './app/components/VideoCard';
import Button from './app/components/Button';
import {colors, videos} from './app/components/constants/constants';

const App = () => {
  return (
    <FlatList
      data={videos}
      keyExtractor={video => video.id}
      renderItem={video => (
        <AppVideoCard
          video={video}
          onPress={() => Alert.alert('Alert!', JSON.stringify(video))}
        />
      )}
    />
    // <AppVideoCard video={videos[0]} />
  );
};

export default App;
