import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: colors.secondary1,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '500',
  },
  buttonconditionContainer2: {
    backgroundColor: colors.primarydark2,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcondition2: {
    fontSize: 20,
    color: colors.white,
  },
});
