import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import MembershipScreen from './app/screens/MemberShip';
import SignUp from './app/screens/Sign_Up';

const App = () => {
  return (
    // <MembershipScreen />
    // <Login1 />
    // <SignUp />
    // <>
    //   <FlatList
    //     data={videos}
    //     keyExtractor={video => video.id}
    //     renderItem={video => <AppVideoCard video={video} />}
    //   />
    //   <AppButton title={'SIGN UP'} />
    //   <AppIconButton icon={'google'} size={25} />
    //   <AppIconButton
    //     icon={'google'}
    //     size={50}
    //     color={colors.APP_PRIMARY_COLOR}
    //   />
    //   <AppIconButton
    //     icon={'google'}
    //     size={75}
    //     backgroundColor={colors.APP_PRIMARY_COLOR}
    //     onPress={() => Alert.alert('Alert!', 'BackButton Pressed!')}
    //   />

    //   <AppSocialButton icon={'google'} size={25} />
    //   <AppSocialButton
    //     icon={'google'}
    //     size={50}
    //     color={colors.APP_COLOR_BLACK}
    //   />
    //   <AppSocialButton title={'Sign Up With Google'} size={75} />

    //   <DividerContainer text={'Join Us'} />
    //   <DividerContainer text={'or'} />
    // <DividerContainer text={'Contact Us'} />
    // </>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
