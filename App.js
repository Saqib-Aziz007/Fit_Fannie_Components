import React, {useState} from 'react';
import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import AppVideoCard from './app/components/VideoCard';
import Button from './app/components/Button';
import {colors, images, videos} from './app/components/constants/constants';
import AppSlider from './app/components/Slider';
import ProfileScreen from './app/screens/ProfileScreen';
import ProfileTextCard from './app/components/ProfileTextCard';

const App = () => {
  return (
    <SafeAreaView>
      <ProfileTextCard
        name={'Name'}
        value={'Muhammad Saqib'}
        onPress={value =>
          console.log('Alert! 1', `Change Button Pressed! ${value}`)
        }
      />
      <ProfileTextCard
        name={'Email'}
        value={'saqib.aziz@pikessoft.com'}
        onPress={value =>
          console.log('Alert! 2', `Change Button Pressed! ${value}`)
        }
      />
      <ProfileTextCard
        name={'Password'}
        value={'Change'}
        onPress={value =>
          console.log('Alert! 3', `Change Button Pressed! ${value}`)
        }
      />
      <ProfileTextCard
        name={'Profile Picture'}
        profilePicture={require('./assets/images/image1.png')}
        onPress={value =>
          console.log('Alert! 4', `Change Button Pressed! ${value}`)
        }
      />
      <ProfileTextCard
        name={'Motivational Notifications'}
        radio={true}
        rightTextStyle={{width: '30%'}}
        leftTextStyle={{width: '70%'}}
        onPress={value =>
          console.log('Alert! 5', `Change Button Pressed! ${value}`)
        }
      />
    </SafeAreaView>
  );
};

export default App;
