import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { BackgroundDegrade } from './backgroundDegrade';
import { theme } from '../styles/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
	url: string,
}

export function ProfilePicture({ url } : Props){
	return(
		<View style={styles.container}>
			<BackgroundDegrade 
				firstColor={theme.colors.secondary50} 
				secondColor={theme.colors.secondary60} 
				moreStyles={styles.degrade}
			>
				<Image 
					source={{uri: url}}
					style={styles.profile}
					resizeMode="stretch"
				/>
			</BackgroundDegrade>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: wp('12.8%'),
		height: hp('5.9%'),
	},

	degrade: {
		alignItems: 'center', 
		justifyContent: 'center',
		borderRadius: 8
	},

	profile: {
		width: wp('12.2%'),
		height: hp('5.6%'),
		borderRadius: 32
	},


});