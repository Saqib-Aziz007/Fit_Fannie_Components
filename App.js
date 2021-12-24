import React from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
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
        alignItems: 'center',
      }}>
      <Text>defult</Text>
      <AppSocialButton
        // title={'Google'}
        icon={'google'}
        //primaryColor="dodgerblue"
      />
      <Text>primaryColor = dodgerblue</Text>
      <AppSocialButton
        title={'facebook'}
        icon={'facebook'}
        primaryColor="dodgerblue"
      />
      <Text>iconColor=red</Text>
      <Text>primaryColor=dodgerblue</Text>
      <AppSocialButton title={'Google'} icon={'google'} size={70} />
      <Text>iconColor=red</Text>
      <Text>primaryColor=dodgerblue</Text>
      <AppSocialButton
        title={'Google'}
        icon={'google'}
        iconColor="red"
        primaryColor="dodgerblue"

        //primaryColor="dodgerblue"
      />
      <Text>iconColor=red</Text>
      <Text>primaryColor=dodgerblue</Text>
      <Text>titleStyle=color:black</Text>
      <Text>style = borderColor:orange</Text>
      <AppSocialButton
        title={'Google'}
        icon={'google'}
        iconColor="red"
        primaryColor="dodgerblue"
        titleStyle={{color: 'black'}}
        style={{borderColor: 'orange'}}
        //primaryColor="dodgerblue"
      />
    </View>
  );
};

export default App;
