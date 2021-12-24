import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  AppButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: colors.APP_PRIMARY_COLOR,
  },
  AppButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.APP_COLOR_WHITE,
  },
  OutlinedButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderColor: colors.APP_PRIMARY_COLOR,
    borderWidth: 3,
  },
  OutlinedButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.APP_PRIMARY_COLOR,
  },
});
