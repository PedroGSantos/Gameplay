import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Categories } from '../components/categories';
import { categories } from '../utils';


export function ListCategories(){
	const [categorySelected, setCategorySelected] = useState('');

	function handleCategorySelected(categoryName: string){
		categorySelected === categoryName ? setCategorySelected('') : setCategorySelected(categoryName);
	}

	return(
		<ScrollView
			horizontal
			style={styles.scroll}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.categories}
		>
			{categories.map((category) => (
				<TouchableOpacity
					key={category.id}
					activeOpacity={0.7}
					onPress={() => handleCategorySelected(category.name)}
				>
					<Categories 
						title={category.name}
						svg={category.icon}
						check={category.name === categorySelected}
					/>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scroll: {
		minHeight: hp('14.7%'),
		maxHeight: hp('14.7%')
	},

	categories: {
		paddingLeft: wp('6.4'),
		height: hp('14.7%'),
	},
});