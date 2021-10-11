import React, { ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { BackgroundDegrade } from './backgroundDegrade';
import { theme } from '../styles/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
	title: string;
    svg:  ReactNode;
    check?: boolean,
}

export function Categories({ title, svg, check = false } : Props){
	return(
		<BackgroundDegrade 
			firstColor={theme.colors.secondary50}
			secondColor={theme.colors.secondary60}
			moreStyles={styles.container}
		>
			<View style={[styles.content, {opacity: check ? 1 : 0.4}]}>
				<BackgroundDegrade
					firstColor={theme.colors.secondary40} 
					secondColor={theme.colors.secondary70}
					moreStyles={styles.containerBackground}
				>
					{svg}
					<Text style={styles.message}>{title}</Text>
				</BackgroundDegrade>
			</View>
		</BackgroundDegrade>
	);
}

const styles = StyleSheet.create({
	container: {
		width: wp('27.7%'),
		height: hp('14.7%'),
		borderRadius: 8,
		marginRight: wp('2.8%'),
		alignItems: 'center', 
		justifyContent: 'center'
	},

	containerBackground: {
		alignItems: 'center', 
		justifyContent: 'center',
		borderRadius: 8
	},

	content: {
		width: wp('26.8%'),
		height: hp('14.3%'),
		borderRadius: 8
	},
    
	message: {
		color: '#FFF',
		fontFamily: theme.fonts.title700,
		fontSize: 15,
		marginTop: hp('1.9%')
	}
});