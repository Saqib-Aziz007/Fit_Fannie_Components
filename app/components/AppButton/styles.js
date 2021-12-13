import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  AppButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: colors.secondary2,
  },
  AppButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
  },
  OutlinedButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderColor: colors.secondary2,
    borderWidth: 3,
  },
  OutlinedButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.secondary2,
  },
});
