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
    backgroundColor: colors.APP_SECONDARY_COLOR,
  },
  dividertext: {
    color: colors.primaryTextColor,
    fontSize: 16,
    fontWeight: '400',
  },
});
