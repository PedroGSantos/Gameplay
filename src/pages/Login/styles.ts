import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	backgroundImage: {
		width: wp('100%'),
		marginTop: hp('14.10%'),
		height: hp('37.4%')
	},

	content: {
		marginTop: -hp('3%'),
		alignItems: 'center'
	},

	title: {
		textAlign: 'center',
		fontSize: 40,
		fontFamily: theme.fonts.title700,
		color: theme.colors.heading,
		lineHeight: 40,
	},

	message: {
		marginTop: hp('1.7%'),
		textAlign: 'center',
		fontSize: 15,
		fontFamily: theme.fonts.text400,
		color: theme.colors.heading,
		lineHeight: 25,
	},


});

