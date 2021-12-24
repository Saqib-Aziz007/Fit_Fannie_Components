import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  containerStyle: {},
  trackstyle: {
    backgroundColor: colors.backbuttonColor,
    height: 10,
    borderRadius: 5,
  },
  trackThumbComponent: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: colors.secondary2,
  },
  textContainer: {alignItems: 'center', justifyContent: 'center'},
  thumbText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: 24,
    color: 'black',
  },
});
