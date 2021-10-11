import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

const Stack = createNativeStackNavigator();

export function Routes(){

	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName='Login'
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: 'transparent'
					}
				}}
			>
				<Stack.Screen name='Login' component={Login}/>
				<Stack.Screen name='Home' component={Home}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}