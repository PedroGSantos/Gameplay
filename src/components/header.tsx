import React, { ReactNode } from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import BackSVG from '../assets/back.svg';
import { theme } from '../styles/theme';
import { BackgroundDegrade } from './backgroundDegrade';
import { useNavigation } from '@react-navigation/core';

type Props = {
	title: string
    actionRight?: ReactNode
}

export function Header({title, actionRight} : Props){
	const navigation = useNavigation();
    
	return(
		<View style={styles.container}>
			<BackgroundDegrade
				firstColor={theme.colors.secondary70}
				secondColor={theme.colors.secondary40}
				moreStyles={styles.headerContent}
		    >
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<BackSVG width={styles.widthBack} height={styles.heightBack} />
				</TouchableOpacity>
				<Text style={styles.title}>{title}</Text>
				{actionRight}
			</BackgroundDegrade>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: hp('12.8%'),
	},

	headerContent: {
		flexDirection: 'row',
		paddingHorizontal: wp('5.5%'),
		paddingTop: getStatusBarHeight(),
		alignItems: 'center',
		justifyContent: 'center',
	},

	widthBack: wp('4.4%'),

	heightBack: hp('1.8%'),

	title:{
		flex: 1,
		textAlign: 'center',
		fontFamily: theme.fonts.title700,
		fontSize:20,
		color: '#FFF'
	}


});