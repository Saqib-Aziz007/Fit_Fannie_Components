import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import AppVideoCard from './app/components/AppVideoCard';
import Button from './app/components/Button';
import {colors, videos} from './app/components/constants/constants';

const App = () => {
  return (
    <View
      style={{
        padding: 30,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <AppIconButton
        icon={'google'}
        size={25}
        onPress={() => Alert.alert('Alert!', 'Button Pressed!')}
      />
      <AppIconButton
        icon={'google'}
        size={50}
        color="red"
        onPress={() => Alert.alert('Alert!', 'Button Pressed!')}
      />
      <AppIconButton
        icon={'google'}
        size={70}
        iconColor="black"
        onPress={() => Alert.alert('Alert!', 'Button Pressed!')}
      />
      <AppIconButton
        icon={'arrow-left'}
        size={85}
        color="black"
        onPress={() => Alert.alert('Alert!', 'Button Pressed!')}
      />
    </View>
  );
};

export default App;
