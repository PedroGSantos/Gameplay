import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: hp('6.8%'),
		marginBottom: hp('4.9%'),
		paddingHorizontal: wp('6.4')
	},

	headerText: {
		flex: 1,
		marginLeft: wp('5.6%'),
		flexDirection: 'column'
	},

	title: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.title500,
		fontSize: 24
	},

	titleBold: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.title700,
		fontSize: 24
	},

	message: {
		color: theme.colors.highlight,
		fontFamily: theme.fonts.text400,
		fontSize: 13
	},

	buttonHeader: {
		backgroundColor: theme.colors.primary,
		width: wp('12.8%'),
		height: hp('5.9%'),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},

	buttonText: {
		color: '#FFF',
		fontFamily: theme.fonts.title700,
		fontSize: 24
	},

	content: {
		marginTop: hp('3.6%')
	},

	containerFlat: {
		flexDirection: 'row',
		marginTop: hp('4%'),
		paddingLeft: wp('6.4')
	},

	infoGame: {
		flex: 1,
		justifyContent: 'space-between',
		marginLeft: wp('5.3%'),
		paddingBottom: hp('1%'),
		borderColor: theme.colors.secondary40,
		borderBottomWidth: 1
	},

	headerGame: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: wp('6.4')
	},

	titleGame: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.title700,
		fontSize: 18
	},

	categoryGame: {
		color: theme.colors.highlight,
		fontFamily: theme.fonts.text400,
		fontSize: 13
	},

	contentGame: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: wp('6.4')
	},

	specificInfoGameContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	dateGame: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.text500,
		marginLeft: wp('1%')
	},

	statusGame: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.text500,
		marginLeft: wp('1%')
	}
});