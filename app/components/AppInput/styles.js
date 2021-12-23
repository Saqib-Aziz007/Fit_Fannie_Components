import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  label: {
    color: colors.APP_SECONDARY_COLOR,
    fontSize: 15,
    marginTop: 13,
  },
  input: {
    backgroundColor: colors.APP_COLOR_WHITE,
    borderRadius: 5,
    borderColor: colors.APP_COLOR_LIGHT1,
    borderWidth: 1,
    fontSize: 20,
    color: colors.APP_SECONDARY_COLOR,
    paddingHorizontal: 10,
  },
});
