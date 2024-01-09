import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../Screens/IntroScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
