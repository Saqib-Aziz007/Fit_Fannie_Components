import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/constants';
import {styles} from './styles';
const AppSocialButton = ({
  title,
  icon,
  onPress,
  style,
  iconStyle,
  titleStyle,
  size = 50,
  color = colors.secondary2,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            ...styles.socialbutton,
            borderRadius: size / 2,
            height: size,
            width: size * 3,
          },
          style,
        ]}>
        {icon && (
          <Icon name={icon} size={size / 2} color={color} style={iconStyle} />
        )}
        {title && (
          <Text style={[styles.socialbuttontitle, titleStyle]}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppSocialButton;
