import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  dividercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    height: 3,
    width: '35%',
    backgroundColor: colors.secondary1,
  },
  dividertext: {
    color: colors.primaryTextColor,
    fontSize: 15,
  },
});
