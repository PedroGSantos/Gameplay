import React from 'react';
import { View, Text, Image } from 'react-native';

import Background from '../../assets/backgroundLogin.png';
import { DiscordButton } from '../../components/discordButton';
import { styles } from './styles';

export function Login(){
	return(
		<View style={styles.container}>
			<Image 
				source={Background} 
				style={styles.backgroundImage}
				resizeMode='stretch'
			/>
			<View style={styles.content}>
				<Text style={styles.title}>
					Conecte-se {'\n'}
					e organize suas {'\n'}
					jogatinas
				</Text>
				<Text style={styles.message}>
					Crie grupos para jogar seus games {'\n'}
					favoritos com seus amigos
				</Text>
				<DiscordButton 
					title={'Entrar com Discord'}
				/>
			</View>
		</View>
	);
}