import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import AppVideoCard from './app/components/AppVideoCard';
import Button from './app/components/Button';
import {colors, videos} from './app/components/constants/constants';

const App = () => {
  return (
    // <FlatList
    //   data={videos}
    //   keyExtractor={video => video.id}
    //   renderItem={video => <AppVideoCard video={video} />}
    // />
    // <>
    //   <AppIconButton icon={'google'} size={25} />
    //   <AppIconButton icon={'google'} size={50} color={colors.secondary2} />
    //   <AppIconButton
    //     icon={'google'}
    //     size={75}
    //     backgroundColor={colors.secondary2}
    //     onPress={() => Alert.alert('Alert!', 'BackButton Pressed!')}
    //   />
    // </>
    <View style={{padding: 30}}>
      {/* <AppSocialButton icon={'google'} size={25} />
      <AppSocialButton icon={'google'} size={50} color="black" />
      <AppSocialButton title={'Sign Up With Google'} size={75} /> */}
      <Button
        title={'primary'}
        buttonType="primary"
        isOutlined={false}
        onPress={() => Alert.alert('Alert!', 'Primary Button Pressed!')}
      />
      <Button
        title={'primary-isOutlined'}
        buttonType="primary"
        isOutlined={true}
        onPress={() =>
          Alert.alert('Alert!', 'primary-outlined Button Pressed!')
        }
      />
      <Button
        title={'secondary-enabled'}
        buttonType="secondary"
        isOutlined={false}
        onPress={() => Alert.alert('Alert!', 'secondary Button Pressed!')}
        disabled={false}
      />
      <Button
        title={'secondary-disabled'}
        buttonType="secondary"
        isOutlined={false}
        onPress={() => Alert.alert('Alert!', 'secondary Button Pressed!')}
        disabled={true}
      />
      <Button
        title={'secondary-isOutlined'}
        buttonType="secondary"
        isOutlined={true}
        onPress={() =>
          Alert.alert('Alert!', 'secondary-Outlined Button Pressed!')
        }
        style={{width: '50%'}}
      />
    </View>
  );
};

export default App;
