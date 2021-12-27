import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import MembershipScreen from './app/screens/MemberShip';
import SignUp from './app/screens/Sign_Up';
import DoneScreen from './app/screens/DoneScreen';
import AppButton from './app/components/AppButton';
import {Alert, FlatList, SafeAreaView, Text} from 'react-native';
import AppIconButton from './app/components/AppIconButton';
import AppSocialButton from './app/components/AppSocialButton.js';
import {
  colors,
  images,
  Questions,
  videos,
} from './app/components/constants/constants';
import AppText from './app/components/AppText/index.js';
import AppVideoCard from './app/components/AppVideoCard';
import AppCustomButton from './app/components/CustomButton';
import Divider from './app/components/Divider';
import ErrorMessage from './app/components/FormErrorMessage';
import MembershipCard from './app/components/MembershipCard';
import ProfileTextCard from './app/components/ProfileTextCard';
import QuestionCard from './app/components/QuestionCard';
import AppSlider from './app/components/Slider';
import Home from './app/screens/Home';
import Login1 from './app/screens/Login1';
import Profile from './app/screens/Profile';

const App = () => {
  const [value, setValue] = useState();
  return (
    // <AppButton
    //   title={'SUBMIT'}
    //   isOutlined={true}
    //   disabled={true}
    //   onPress={() => Alert.alert('alert!')}

    // />
    // <AppIconButton
    //   icon={'chevron-left'}
    //   backgroundColor="red"
    //   iconColor="green"
    // />

    // <AppText>Muhammad Saqib AZIZ</AppText>

    // <MembershipScreen />

    // <Login1 />

    // <SignUp />

    // <>

    // <SafeAreaView>
    //   <FlatList
    //     data={videos}
    //     keyExtractor={video => video.id}
    //     renderItem={video => (
    //       <AppVideoCard
    //         video={video}
    //         onPressIcon={() => Alert.alert('Alert', 'ICON Button Pressed!')}
    //         onPressCard={() => Alert.alert('Alert!', 'CARD clicked!')}
    //       />
    //     )}
    //   />
    // </SafeAreaView>

    // <SafeAreaView>
    //   <AppCustomButton onPress={value => Alert.alert('Alert!', value)} />
    // </SafeAreaView>

    // <SafeAreaView>
    //   <Divider text={'or join with'} />
    // </SafeAreaView>

    // <SafeAreaView style={{margin: 20}}>
    //   <MembershipCard />
    // </SafeAreaView>

    // <SafeAreaView>
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
    // </SafeAreaView>

    // <SafeAreaView>
    //   <ProfileTextCard
    //     name={'Email'}
    //     value={'saqib.aziz@pikessoft.com'}
    //     // profilePicture={images.APP_LOGO}
    //     // radio={true}
    //     onPress={value => Alert.alert('Alert!', 'Value = ' + value)}
    //   />
    // </SafeAreaView>
    // <SafeAreaView>
    //   {/* <QuestionCard /> */}
    //   <FlatList
    //     data={Questions}
    //     keyExtractor={item => item.id}
    //     horizontal={true}
    //     renderItem={question => (
    //    // console.log(question, 'aaaaaaaa'),
    //       (
    //         <QuestionCard
    //           question={question}
    //           totalQuestion={Questions.length}
    //           onPress={value => Alert.alert('Alert!', value)}
    //         />
    //       )
    //     )}
    //   />
    // </SafeAreaView>

    // <SafeAreaView style={{flex: 1}}>
    //   <AppSlider
    //     minimumValue={18}
    //     maximumValue={100}
    //     onValueChange={setValue}
    //     renderValue={value}
    //   />
    // </SafeAreaView>

    // <SafeAreaView>
    //   <AppSocialButton icon={'google'} size={25} />
    //   <AppSocialButton
    //     // icon={'google'}
    //     title={'Google'}
    //     size={50}
    //     color={colors.APP_COLOR_BLACK}
    //   />
    //   <AppSocialButton
    //     title={'Sign Up With Google'}
    //     icon={'google'}
    //     size={100}
    //   />
    // </SafeAreaView>

    //<>
    //   <DividerContainer text={'Join Us'} />
    //   <DividerContainer text={'or'} />
    // <DividerContainer text={'Contact Us'} />
    // </>

    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

    // <DoneScreen />

    // <Home />

    // <Login1 />

    // <MembershipScreen />

    // <SignUp />
  );
};

export default App;
