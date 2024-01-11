import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../Screens/IntroScreen';
import RegisterScreen from '../Screens/Auth/RegisterScreen';
import VerificationScreen from '../Screens/Auth/VerificationScreen';
import OtpVerifiedScreen from '../Screens/Auth/OtpVerifiedScreen';
import ChildInfoScreen from '../Screens/ChildDetails/ChildInfoScreen';
import ChildReviewScreen from '../Screens/ChildDetails/ChildReviewScreen';
import GroupScreen from '../Screens/GroupCreation/GroupScreen';
import InvitationScreen from '../Screens/GroupCreation/InvitationScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpVerifiedScreen"
        component={OtpVerifiedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChildInfoScreen"
        component={ChildInfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChildReviewScreen"
        component={ChildReviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InvitationScreen"
        component={InvitationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
