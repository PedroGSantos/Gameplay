import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, View} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import DiscordSVG from '../assets/discord.svg';
import { theme } from '../styles/theme';

type Props = TouchableOpacityProps & {
	title: string
}

export function DiscordButton({title, ...rest} : Props){
	return(
		<TouchableOpacity 
			style={styles.button}
			activeOpacity={0.6}
			{...rest}
		>
			<View style={styles.imageContainer}>
				<DiscordSVG width={styles.discordWidth} height={styles.discordHeight}/>
			</View>
			
			<Text style={styles.textButton}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		marginTop: 48,
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		width: wp('73%'),
		height: hp('6.8%'),
		alignItems: 'center',
		alignSelf: 'center',
	},

	discordWidth: wp('6.4%'),

	discordHeight: hp('2.2%'),

	imageContainer: {
		width: wp('14.9%'),
		height: hp('6.8%'),
		alignItems: 'center',
		justifyContent: 'center',
		borderRightWidth: 1,
		borderColor: theme.colors.line
	},

	discordImage: {
		width: wp('4.8%'),
		height: hp('2.9%')
	},

	textButton: {
		flex: 1,
		color: theme.colors.heading,
		fontSize: 15,
		fontFamily: theme.fonts.text500,
		textAlign: 'center'
	}
});