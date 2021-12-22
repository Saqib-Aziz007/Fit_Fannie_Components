import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconicIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../components/constants/constants';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={colors.APP_PRIMARY_COLOR}
      inactiveColor={colors.APP_SECONDARY_COLOR}
      barStyle={{backgroundColor: colors.APP_COLOR_WHITE}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color = colors.APP_PRIMARY_COLOR}) => (
            <MaterialCommunityIcon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color = colors.APP_PRIMARY_COLOR}) => (
            <MaterialIconicIcon name="person" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({color = colors.APP_PRIMARY_COLOR}) => (
            <MaterialIconicIcon name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
