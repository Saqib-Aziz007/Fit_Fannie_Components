import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const AppButton = ({
  title,
  isOutlined = false,
  onPress,
  disabled = false,
  style,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={disabled ? 0.7 : 1}
      disabled={disabled}>
      <View
        style={[isOutlined ? styles.OutlinedButton : styles.AppButton, style]}>
        <Text
          style={[
            isOutlined ? styles.OutlinedButtonTitle : styles.AppButtonTitle,
            titleStyle,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
