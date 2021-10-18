import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { theme } from '../styles/theme';

type Props = {
	title: string,
    message: string,
	marginTop?: ViewStyle
}

export function ListHeader({ title, message, marginTop } : Props){
	return(
		<View style={[styles.container, marginTop]}>
			<Text style={styles.title}>{ title }</Text>
			<Text style={styles.message}>{ message }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: wp('6.4')
	},

	title: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.title700,
		fontSize: 18
	},

	message: {
		color: theme.colors.highlight,
		fontFamily: theme.fonts.text400,
		fontSize: 13
	}
});