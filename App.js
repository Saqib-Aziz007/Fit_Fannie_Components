import React, {useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import AppVideoCard from './app/components/VideoCard';
import Button from './app/components/Button';
import {colors, videos} from './app/components/constants/constants';
import AppSlider from './app/components/Slider';

const App = () => {
  const [value, setValue] = useState(18);
  return (
    <>
      <AppSlider
        minimumValue={18}
        maximumValue={100}
        onValueChange={setValue}
        renderText={
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '400',
              fontSize: 24,
              color: 'black',
            }}>
            {Math.floor(value)}
          </Text>
        }
      />
    </>
  );
};

export default App;
