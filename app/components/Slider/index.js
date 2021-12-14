import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Slider from 'react-native-slider';
import {colors} from '../constants/constants';
import {styles} from './styles';

const AppSlider = ({
  Value = 18,
  minimumValue = 18,
  maximumValue = 100,
  thumbStyle = styles.trackThumbComponent,
  trackstyle = styles.trackstyle,
  minimumTrackTintColor = colors.backbuttonColor,
  maximumTrackTintColor,
}) => {
  const [value, setValue] = useState(18);
  return (
    <View
      style={{
        padding: 30,
      }}>
      <Slider
        value={Value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        onValueChange={value => setValue(Math.floor(value))}
        trackStyle={trackstyle}
        thumbStyle={thumbStyle}
      />
      <View style={styles.textContainer}>
        <Text style={styles.thumbText}>{value}</Text>
      </View>
    </View>
  );
};

export default AppSlider;
