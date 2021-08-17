import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { Login } from './src/pages/Login';
import { BackgroundDegrade } from './src/components/backgroundDegrade';

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular, Inter_500Medium, Rajdhani_500Medium, Rajdhani_700Bold
	});

	if (!fontsLoaded)
		return <AppLoading />;
	else 
		return (
			<BackgroundDegrade>
				<StatusBar 
					barStyle='light-content'
					backgroundColor='transparent'
					translucent
				/>
				<Login/>
			</BackgroundDegrade>
		);
}