import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  SecondaryAppButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: colors.secondary2,
    marginVertical: 10,
  },
  SecondaryAppButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
  },
  PrimaryAppButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: colors.primarydark3,
    marginVertical: 10,
  },
  PrimaryAppButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
  },
  PrimayOutlinedButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderColor: colors.primarydark3,
    borderWidth: 3,
    marginVertical: 10,
  },
  PrimayOutlinedButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primarydark3,
  },
  SecondaryOutlinedButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderColor: colors.secondary2,
    borderWidth: 3,
    marginVertical: 10,
  },
  SecondaryOutlinedButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.secondary2,
  },
});
