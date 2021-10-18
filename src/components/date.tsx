import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, TextInput, TextInputProps } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../styles/theme';


export function Date( {...rest} : TextInputProps){

	return(
		<TextInput 
			style={styles.container}
			maxLength={2}
			keyboardType="numeric"
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		width: wp('13.3%'),
		height: hp('5.9%'),
		borderRadius: 8,
		borderWidth: 1,
		borderColor: theme.colors.secondary50,
		backgroundColor: theme.colors.secondary40,
		color: theme.colors.heading,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	}
});