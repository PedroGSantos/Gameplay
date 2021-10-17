import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Background from '../../assets/backgroundGameDetails.png';
import { DiscordButton } from '../../components/discordButton';
import { styles } from './styles';
import { BackgroundDegrade } from '../../components/backgroundDegrade';
import { theme } from '../../styles/theme';
import { ListHeader } from '../../components/listHeader';
import { ProfilePicture } from '../../components/profilePicture';
import CircleSVG from '../../assets/circle.svg';
import ShareSVG from '../../assets/share.svg';
import { Header } from '../../components/header';

export function GameDetails({ navigation }){

	const players = [
		{
			id: 1,
			name: 'Thiago Luchtenberg',
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			status: 'Disponível'
		},
		{
			id: 2,
			name: 'Rodrigo Gonçalves',
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			status: 'Ocupado'
		},
		{
			id: 3,
			name: 'Diego Fernandes',
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			status: 'Ocupado'
		},
	];

	return(
		<BackgroundDegrade
			firstColor={theme.colors.secondary80}
			secondColor={theme.colors.secondary100}
		>
			<View style={styles.container}>
				<Header 
					title='Detalhes'
					actionRight={
						<TouchableOpacity>
							<ShareSVG width={styles.shareWidth} height={styles.shareHeight}/>
						</TouchableOpacity>
					} 
				/>
				<Image 
					source={Background}
					style={styles.backgroundImage}
					resizeMode='stretch'
				/>
				<Text style={styles.title}>Lendários</Text>
				<Text style={styles.description}>É hoje que vamos chegar ao challenger sem perder uma partida de md10</Text>
				<View style={styles.content}>
					<ListHeader title='Jogadores' message='Total 3' />
					<FlatList 
						data={players}
						keyExtractor={(item) => String(item.id)}
						renderItem={({ item }) => (
							<View style={styles.containerFlat}>
								<ProfilePicture url={'https://avatars.githubusercontent.com/u/63265629?v=4'}/>
								<View style={styles.infoPlayers}>
									<Text style={styles.playerName}>{item.name}</Text>
									<View style={styles.status}>
										<CircleSVG fill={item.status === 'Disponível' ? theme.colors.on : theme.colors.primary} width={styles.widthCircle} height={styles.heightCircle} />	
										<Text style={styles.statusMessage}>{item.status}</Text>
									</View>
								</View>
							</View>
						)}
					/>
				</View>
				<DiscordButton title='Entrar na Partida'/>
			</View>
		</BackgroundDegrade>
	);
}