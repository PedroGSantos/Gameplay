import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { BackgroundDegrade } from './src/components/backgroundDegrade';
import { theme } from './src/styles/theme';
import { Routes } from './src/navigation/routes';
import { AuthStore } from './src/store/authStore';

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular, Inter_500Medium, Rajdhani_500Medium, Rajdhani_700Bold
	});
	if (!fontsLoaded)
		return <AppLoading />;
	else 
		return (
			<BackgroundDegrade
				firstColor={theme.colors.secondary80}
				secondColor={theme.colors.secondary100}
			>
				<StatusBar 
					barStyle='light-content'
					backgroundColor='transparent'
					translucent
				/>
				<AuthStore>
					<Routes />
				</AuthStore>
			</BackgroundDegrade>
		);
}