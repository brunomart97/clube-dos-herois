import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Badge } from '../screens/Badge';
import { Profile } from '../screens/Profile';

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal'
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Badge"
        component={Badge}
      />
      <Screen
        name="Profile"
        component={Profile}
      />
    </Navigator>
  )
}