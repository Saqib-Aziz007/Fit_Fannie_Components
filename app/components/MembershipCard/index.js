import React from 'react';
import {Text, View} from 'react-native';
import AppSocialButton from '../AppSocialButton.js';
import AppText from '../AppText';
import {styles} from './styles';

const MembershipCard = () => {
  return (
    <View style={styles.membershipCard}>
      <View style={styles.amountContainerStyle}>
        <View style={{justifyContent: 'center'}}>
          <AppText>Monthly Plan</AppText>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            7-Day Free Trial
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <AppText>$7.99</AppText>
          <Text style={{fontSize: 14, fontWeight: '400'}}>+ tax</Text>
        </View>
      </View>
      <Text style={{paddingVertical: 30}}>* Unlimited 5 minute workouts</Text>
      <View style={{alignItems: 'center'}}>
        <AppSocialButton title={'SELECT'} />
      </View>
    </View>
  );
};

export default MembershipCard;
