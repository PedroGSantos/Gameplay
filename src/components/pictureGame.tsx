import React from "react";
import { Image, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import { theme } from "../styles/theme";
import { BackgroundDegrade } from "./backgroundDegrade";

type Props = {
    showBackground: boolean,
    url: string
}

export function PictureGame({ url, showBackground } : Props){
    return (
        showBackground ? 
            <View style={styles.container}>
                <BackgroundDegrade
                    firstColor={theme.colors.secondary50}
                    secondColor={theme.colors.secondary60}
                    moreStyles={styles.containerBackground}
                >
                    <Image 
                        source={{uri: url}}
                        style={styles.imageGame}
                        resizeMode='stretch'
                    />
                </BackgroundDegrade>
            </View>
        :
            <Image 
                source={{uri: url}}
                style={styles.imageGame}
                resizeMode='stretch'
            />
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp('17.6%'),
        height: hp('8.6%'),
        borderRadius: 8,
    },

    containerBackground: {
		alignItems: 'center', 
		justifyContent: 'center',
		borderRadius: 8
	},
    
    imageGame: {
		width: wp('17%'),
		height: hp('8.3%'),
		borderRadius: 40
	},
});