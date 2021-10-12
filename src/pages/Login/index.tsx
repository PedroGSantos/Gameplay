import React from 'react';
import { View, Text, Image } from 'react-native';

import Background from '../../assets/backgroundLogin.png';
import { DiscordButton } from '../../components/discordButton';
import { styles } from './styles';
import { BackgroundDegrade } from '../../components/backgroundDegrade';
import { theme } from '../../styles/theme';

export function Login({ navigation }){
	return(
		<BackgroundDegrade
			firstColor={theme.colors.secondary80}
			secondColor={theme.colors.secondary100}
		>
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
						onPress={() => navigation.navigate('Home')}
						title={'Entrar com Discord'}
					/>
				</View>
			</View>
		</BackgroundDegrade>
	);
}