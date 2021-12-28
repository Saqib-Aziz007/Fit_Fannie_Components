import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import AppIconButton from '../../components/AppIconButton';
import {colors} from '../../components/constants/constants';

const HealthDisclaimer = () => {
  const [checkboxSelect, setCheckboxSelect] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: colors.APP_COLOR_LIGHT1}}>
      <View
        style={{
          backgroundColor: colors.APP_COLOR_LIGHT2,
          width: '100%',
          height: 440,
          borderRadius: 50,
        }}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          style={{position: 'absolute', left: 30, top: 50}}
        />
      </View>
      <View
        style={{alignItems: 'center', marginTop: 50, paddingHorizontal: 30}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: colors.APP_SECONDARY_COLOR,
          }}>
          To continue, please read and agree to
        </Text>
        <Text>
          our
          <Text
            style={{
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              color: colors.APP_SECONDARY_COLOR,
            }}>
            {' Health & Medical Disclaimer'}
          </Text>
          <View>
            {checkboxSelect ? <Image /> : <Image />} <Text></Text>
          </View>
        </Text>
      </View>
    </View>
  );
};

export default HealthDisclaimer;
