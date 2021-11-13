import React, { useState } from 'react';
import { 
	View, 
	FlatList, 
	Text, 
	TouchableOpacity,
} from 'react-native';

import { ProfilePicture } from '../../components/profilePicture';
import { styles } from './styles';
import { ListHeader } from '../../components/listHeader';
import CalendarSVG from '../../assets/calendar.svg';
import PlayerSVG from '../../assets/player.svg';
import { theme } from '../../styles/theme';
import { PictureGame } from '../../components/pictureGame';
import { BackgroundDegrade } from '../../components/backgroundDegrade';
import { ListCategories } from '../../components/listCategories';
import { useAuth } from '../../store/authStore';

export function Home({ navigation }){
	const dataFlat = [
		{id: 1, title: 'Lendários', category: 'Ranqueada', status: 'Anfitrião', date: '18/06 às 21:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 2, title: 'Yeah, boy', category: 'Diversão', status: 'Visitante', date: '23/06 às 19:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 3, title: 'Rumo ao topo', category: '1x1', status: 'Anfitrião', date: '20/06 às 09:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 4, title: 'Bora queimar tudo', category: 'Ranqueada', status: 'Anfitrião', date: '20/06 às 14:20h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 5, title: 'Valorosos', category: 'Diversão', status: 'Anfitrião', date: '18/06 às 21:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 6, title: 'Valorosos', category: 'Diversão', status: 'Anfitrião', date: '18/06 às 21:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 7, title: 'Valorosos', category: 'Diversão', status: 'Anfitrião', date: '18/06 às 21:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
		{id: 8, title: 'Valorosos', category: 'Diversão', status: 'Anfitrião', date: '18/06 às 21:00h', icon: 'https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fgoogle-oauth2%7C112881243283626187963/1515813413151.photo.jpg'},
	];

	const { user } = useAuth();

	return(
		<BackgroundDegrade
			firstColor={theme.colors.secondary80}
			secondColor={theme.colors.secondary100}
		>
			<View style={styles.container}>
				<View style={styles.header}>
					<ProfilePicture url={user.avatar}/>
					<View style={styles.headerText}>
						<Text style={styles.title}>
							Olá, <Text style={styles.titleBold}>{user.firstName}</Text>
						</Text>
						<Text style={styles.message}>Hoje é dia de vitória</Text>
					</View>
					<TouchableOpacity 
						style={styles.buttonHeader}
						activeOpacity={0.7}
						onPress={() => navigation.navigate('Scheduling')}
					>
						<Text style={styles.buttonText}>+</Text>
					</TouchableOpacity>
				</View>
				<ListCategories />
				<View style={styles.content}>
					<ListHeader title='Partidas Agendadas' message='Total 6'/>
				</View>
				<FlatList 
					data={dataFlat}
					keyExtractor={(item) => String(item.id)}
					contentContainerStyle={styles.footerList}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => navigation.navigate('GameDetails')}>
							<View style={styles.containerFlat}>
								<PictureGame url={item.icon} showBackground />
								<View style={styles.infoGame}>
									<View style={styles.headerGame}>
										<Text style={styles.titleGame}>{item.title}</Text>
										<Text style={styles.categoryGame}>{item.category}</Text>
									</View>
									<View style={styles.contentGame}>
										<View style={styles.specificInfoGameContainer}>
											<CalendarSVG 
											/>
											<Text style={styles.dateGame}>{item.date}</Text>
										</View>
										<View style={styles.specificInfoGameContainer}>
											<PlayerSVG 
												fill={item.status === 'Visitante' ? theme.colors.on : theme.colors.primary}
											/>
											<Text style={styles.statusGame}>{item.status}</Text>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					)}
					
				/>
			</View>
		</BackgroundDegrade>
	);
}