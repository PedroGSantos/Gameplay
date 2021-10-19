import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},


	shareWidth: wp('6.6%'),

	shareHeight: hp('2.9%'),

	backgroundImage: {
		width: wp('100%'),
		height: hp('28.8%'),
	},

	title: {
		position: 'absolute',
		marginTop: hp('27.5%'),
		marginLeft: wp('6.4'),
		color: theme.colors.heading,
		fontFamily: theme.fonts.title700,
		fontSize: 28
	},

	description: {
		position: 'absolute',
		marginTop: hp('33.4%'),
		marginLeft: wp('6.4'),
		color: theme.colors.heading,
		fontFamily: theme.fonts.text400,
		fontSize: 13,
	},

	content: {
		marginTop: hp('2.9%')
	},

	containerFlat: {
		flexDirection: 'row',
		marginTop: hp('4%'),
		paddingLeft: wp('6.4')
	},

	infoPlayers: {
		flex: 1,
		justifyContent: 'space-between',
		marginLeft: wp('5.3%'),
		paddingBottom: hp('1%'),
		borderColor: theme.colors.secondary40,
		borderBottomWidth: 1
	},

	playerName: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.title700,
		fontSize: 18,
		marginBottom: hp('0.5%')
	},

	status: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	widthCircle: wp('2.1%'),

	heightCircle: hp('0.9%'),

	statusMessage: {
		color: theme.colors.heading,
		fontFamily: theme.fonts.text400,
		marginLeft: wp('2.1%')
	}
});