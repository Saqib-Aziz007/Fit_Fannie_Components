import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../components/constants/constants';

const Login1 = () => {
  return (
    <ImageBackground
      source={images.login1background}
      style={{flex: 1}}></ImageBackground>
  );
};

export default Login1;
