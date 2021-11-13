import React from 'react';
import { 
	View, 
	Text, 
	Image, 
	Alert, 
	ActivityIndicator 
} from 'react-native';

import Background from '../../assets/backgroundLogin.png';
import { DiscordButton } from '../../components/discordButton';
import { styles } from './styles';
import { BackgroundDegrade } from '../../components/backgroundDegrade';
import { theme } from '../../styles/theme';
import { useAuth } from '../../store/authStore';

export function Login({ navigation }){

	const { user, signIn, loading } = useAuth();

	async function handleSignIn(){
		try {
			await signIn();
			navigation.navigate('Home');
		} catch (error) {
			Alert.alert(error);
		}
	}
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
					{
						loading ? 
							<ActivityIndicator color={theme.colors.primary} />
							:
							<DiscordButton 
								onPress={handleSignIn}
								title={'Entrar com Discord'}
							/>
					}
				</View>
			</View>
		</BackgroundDegrade>
	);
}