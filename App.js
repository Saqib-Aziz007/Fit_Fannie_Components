import React from 'react';
import {Alert, FlatList} from 'react-native';
import AppButton from './app/components/AppButton';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import AppVideoCard from './app/components/AppVideoCard';
import {colors, videos} from './app/components/constants/constants';
import AppCustomButton from './app/components/CustomButton';

const App = () => {
  return (
    <AppCustomButton
      onPress={value => console.warn('Button pressed!', value)}
    />
    // <>s
    //  <FlatList
    //   data={videos}
    //   keyExtractor={video => video.id}
    //   renderItem={video => <AppVideoCard video={video} />}
    // />
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

    //   <AppSocialButton icon={'google'} size={25} />
    //   <AppSocialButton icon={'google'} size={50} color="black" />
    //   <AppSocialButton icon={'google'} title={'Sign Up With Google'} size={75} />
    // </>
  );
};

export default App;
