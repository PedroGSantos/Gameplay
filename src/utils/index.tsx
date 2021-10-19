import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Ranked from '../assets/ranked.svg';
import Duel from '../assets/duel.svg';
import Fun from '../assets/fun.svg';
import Training from '../assets/training.svg';


export const categories = [
	{ id: 1, name: 'Ranqueada', icon: <Ranked width={wp('12.8%')} height={hp('5.9%')}/> },
	{ id: 2, name: 'Duelo 1x1', icon: <Duel width={wp('12.8%')} height={hp('5.9%')}/> },
	{ id: 3, name: 'Diversão', icon: <Fun width={wp('12.8%')} height={hp('5.9%')}/> },
	{ id: 4, name: 'Treinamento', icon: <Training width={wp('12.8%')} height={hp('5.9%')}/> }
];