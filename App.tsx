import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular, Inter_500Medium, Rajdhani_500Medium, Rajdhani_700Bold
	});
	if (!fontsLoaded)
		return <AppLoading />;
	else 
		return (
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style='auto' />
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
