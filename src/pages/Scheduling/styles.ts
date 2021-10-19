import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	content: {
		marginTop: hp('3.9%'),
	},

	title: {
		fontFamily: theme.fonts.title700,
		fontSize: 18,
		color: theme.colors.heading,
		marginBottom: hp('2.2%'),
		marginHorizontal: wp('6.6%')
	},

	modalServers: {
		marginTop: hp('4%'),
		marginBottom: hp('3.4%'),
		width: wp('90%'),
		height: hp('8.3%'),
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderRadius: 8,
		borderColor: theme.colors.secondary50,
		overflow: 'hidden'
	},

	contentServer: {
		flex: 1,
		alignItems: 'flex-start',
		paddingLeft: wp('5.3%'),
		paddingVertical: hp('1.4%')
	},

	game: {
		fontFamily: theme.fonts.text400,
		fontSize: 13,
		color: theme.colors.highlight
	},

	box: {
		backgroundColor: theme.colors.secondary40,
		height: hp('8.3%'),
		width: wp('17.7%'),
		borderWidth: 1,
		borderRadius: 8,
		borderColor: theme.colors.secondary50,
	},

	image: {
		height: hp('8.3%'),
		width: wp('17.7%'),
		borderRadius: 8,
	},

	arrowWidth: wp('1.5%'),

	arrowHeight: hp('1%'),

	arrow: {
		marginRight: wp('6.9%')
	},

	containerDate: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	date: {
		marginHorizontal: wp('6.6%'),
	},

	boxDate: {
		flexDirection: 'row'
	},

	separateDate: {
		color: theme.colors.heading,
		alignSelf: 'center',
		fontSize: 15,
		fontFamily: theme.fonts.text500,
		marginHorizontal: wp('1%'),
	},

	marginDescription: {
		marginTop: hp('3.4%')
	},

	inputDescription: {
		width: wp('90%'),
		height: hp('11.6%'),
		marginTop: hp('2.2%'),
		padding: wp('3%'),
		color: theme.colors.heading,
		backgroundColor: theme.colors.secondary40,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: theme.colors.secondary50,
		alignSelf: 'center',
		textAlignVertical: 'top'
	},

	button: {
		width: wp('90%'),
		height: hp('6.8%'),
		marginTop: hp('6.8%'),
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: hp('4.8%'),
	},

	textButton: {
		fontFamily: theme.fonts.text500,
		fontSize: 15,
		color: theme.colors.heading,
	},

	modalContainer: {
		flex: 1,
		backgroundColor: theme.colors.overlay
	},

	modalContent: {
		marginTop: hp('8.8%')
	},

	bar: {
		marginTop: hp('1.6%'),
		height: hp('0.2%'),
		width: wp('10.8%'),
		backgroundColor: theme.colors.secondary30,
		alignSelf: 'center'
	},

	headerList: {
		paddingTop: hp('12.6%')
	},
	
	footerList: {
		paddingBottom: hp('2.6%')
	},

	serverContainer: {
		flexDirection: 'row',
		marginLeft: wp('6.6%'),
		marginVertical: hp('1.4%')
	},

	serverDetails: {
		flex: 1,
		marginLeft: wp('5.5%'),
		justifyContent: 'center',
	},

	message: {
		fontFamily: theme.fonts.text400,
		color: theme.colors.highlight,
		fontSize: 13
	},

	line: {
		backgroundColor: theme.colors.secondary40,
		width: wp('74.1%'),
		height: 1,
		alignSelf: 'flex-end',
	}
});