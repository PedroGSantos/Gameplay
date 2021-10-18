import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
    errorMessage: undefined | string | boolean 
}

export function Errors({ errorMessage } : Props) {
	return (
		errorMessage === undefined ? <View></View> :
			<View style={styles.containerError}>
				<Text style={styles.messageError}>{errorMessage}</Text>
			</View>
	);
}

const styles = StyleSheet.create({
	containerError: {
		flexWrap: 'wrap',
		marginTop: hp('0.9%'),
		marginHorizontal: wp('6.6%'),
		
	},

	messageError: {
		width: wp('81.3%'),
		color: '#FAFF03',
	}
});