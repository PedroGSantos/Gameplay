import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
	children: ReactNode,
	firstColor: string,
	secondColor: string,
	moreStyles?: Record<string, unknown>
}

export function BackgroundDegrade({ children, firstColor, secondColor, moreStyles } : Props){
	return(
		<LinearGradient
			style={[styles.container, moreStyles]}
			colors={[firstColor, secondColor]}
		>
			{children}
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});