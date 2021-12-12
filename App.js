import React from 'react';
import {Alert, FlatList} from 'react-native';
import AppButton from './app/components/AppButton';
import VideoCard from './app/components/AppCard';
import AppIconButton from './app/components/AppIconButton';
import {colors, videos} from './app/components/constants/constants';

const App = () => {
  return (
    <FlatList
      data={videos}
      keyExtractor={video => video.id}
      renderItem={video => <VideoCard video={video} />}
    />
    // <>
    //   <AppIconButton icon={'google'} size={25} />
    //   <AppIconButton icon={'google'} size={50} color={colors.secondary2} />
    //   <AppIconButton
    //     icon={'google'}
    //     size={75}
    //     backgroundColor={colors.secondary2}
    //     onPress={() => Alert.alert('Alert!', 'BackButton Pressed!')}
    //   />
    // </>
  );
};

export default App;
