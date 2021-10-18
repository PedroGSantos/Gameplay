import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform, Modal, FlatList} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { styles } from './styles';
import { BackgroundDegrade } from '../../components/backgroundDegrade';
import { theme } from '../../styles/theme';
import ArrowSVG from '../../assets/arrow.svg';
import { Header } from '../../components/header';
import { ListCategories } from '../../components/listCategories';
import { ListHeader } from '../../components/listHeader';
import { Date } from '../../components/date';
import { Errors } from '../../components/errors';
import { PictureGame } from '../../components/pictureGame';

type ServerProps = {
	id: number
	name: string, 
	icon: null | string,
	owner: boolean
}

export function Scheduling({ navigation }){
	const schema = Yup.object().shape({
		day: Yup.number()
			.label('day')
			.required('Não é permitido deixar o campo dia vazio')
			.min(1, 'Dia incorreto')
			.max(31, 'Dia incorreto'),
		month: Yup.number()
			.label('month')
			.required('Não é permitido deixar o campo mês vazio')
			.min(1, 'Mês incorreto')
			.max(12, 'Mês incorreto'),
		hour: Yup.number()
			.label('hour')
			.required('Não é permitido deixar o campo hora vazio')
			.min(0, 'Hora incorreta')
			.max(24, 'Hora incorreta'),
		minute: Yup.number()
			.label('minute')
			.required('Não é permitido deixar o campo minuto vazio')
			.min(0, 'Minuto incorreto')
			.max(59, 'Minuto incorreto'),
		description: Yup.string()
			.label('description')
			.required('Não é permitido deixar o campo descrição vazio')
	});
	const data = [
		{
			id: 1,
			name: 'Rumo ao topo', 
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			owner: true
		},
		{
			id: 2,
			name: 'Bora queimar tudo', 
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			owner: false
		},
		{
			id: 3,
			name: 'Yeah, Boy', 
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			owner: true
		},
		{
			id: 4,
			name: 'Valorosos', 
			icon: 'https://avatars.githubusercontent.com/u/63265629?v=4',
			owner: true
		},
	];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedServer, setSelectedServer] = useState<ServerProps>({} as ServerProps);
	function handleOpenModal(){
		setIsModalOpen(!isModalOpen);
	}

	function handleSelectedServer(item : ServerProps){
		setSelectedServer(item);
		handleOpenModal();
	}

	function Line(){
		return (
			<View style={styles.line} />
		);
	}

	return(
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<ScrollView>
				<BackgroundDegrade
					firstColor={theme.colors.secondary80}
					secondColor={theme.colors.secondary100}
				>
					<View style={styles.container}>
						<Header title='Agendar Partida'/>
						<View style={styles.content}>
							<Text style={styles.title}>Categoria</Text>
							<ListCategories />
							<TouchableOpacity style={styles.modalServers} onPress={handleOpenModal}>
								{selectedServer.icon ?
									<Image
										source={{uri: selectedServer.icon}}
										style={styles.image}
										resizeMode='stretch'
									/>
									: 
									<View style={styles.box} />
								}
								<Text 
									style={[styles.title, {marginBottom: 0, marginHorizontal: 0, flex: 1, textAlign: 'center'}]}
								>
									{selectedServer.name ? selectedServer.name : 'Selecione um servidor'}
								</Text>
								<ArrowSVG width={styles.arrowWidth} height={styles.arrowHeight} style={styles.arrow} />
							</TouchableOpacity>
							<Formik
								initialValues={{ day: '', month: '', hour: '', minute: '', description: ''}}
								validationSchema={schema}
								onSubmit={async (data, { setSubmitting, setErrors, setStatus, resetForm }) => {
                            
								}}
							>
								{(formikProps) => (
									<>
										<View style={styles.containerDate}>
											<View style={styles.date}>
												<Text style={[styles.title, {marginHorizontal: 0}]}>Dia e Mês</Text>
												<View style={styles.boxDate}>
													<Date 
														value={formikProps.day}
														onChangeText={formikProps.handleChange('day')}
														onBlur={formikProps.handleBlur('day')}
														placeholder='24'
														placeholderTextColor='#757575'
													/>
													<Text style={styles.separateDate}>/</Text>
													<Date 
														value={formikProps.month}
														onChangeText={formikProps.handleChange('month')}
														onBlur={formikProps.handleBlur('month')}
														placeholder='11'
														placeholderTextColor='#757575'
													/>
												</View>
											</View>
											<View style={styles.date}>
												<Text style={[styles.title, {marginHorizontal: 0}]}>Horário</Text>
												<View style={styles.boxDate}>
													<Date 
														value={formikProps.hour}
														onChangeText={formikProps.handleChange('hour')}
														onBlur={formikProps.handleBlur('hour')}
														placeholder='13'
														placeholderTextColor='#757575'
													/>
													<Text style={styles.separateDate}>:</Text>
													<Date
														value={formikProps.minute}
														onChangeText={formikProps.handleChange('minute')}
														onBlur={formikProps.handleBlur('minute')}
														placeholder='02'
														placeholderTextColor='#757575'
													/>
												</View>
											</View>
										</View>
										<Errors 
											errorMessage={formikProps.touched.day && formikProps.errors.day}
										/>
										<Errors 
											errorMessage={formikProps.touched.month && formikProps.errors.month}
										/>
										<Errors 
											errorMessage={formikProps.touched.hour && formikProps.errors.hour}
										/>
										<Errors 
											errorMessage={formikProps.touched.minute && formikProps.errors.minute}
										/>
										<ListHeader title='Descrição' message='Max 100 caracteres' marginTop={styles.marginDescription}/>
										<TextInput 
											value={formikProps.description}
											onChangeText={formikProps.handleChange('description')}
											onBlur={formikProps.handleBlur('description')}
											placeholder='Treinem antes, será difícil!'
											placeholderTextColor='#757575'
											style={styles.inputDescription}
											maxLength={100}
											multiline
										/>
										<Errors 
											errorMessage={formikProps.touched.description && formikProps.errors.description}
										/>
										<TouchableOpacity
											style={styles.button}
										>
											<Text style={styles.textButton}>Agendar</Text>
										</TouchableOpacity>
									</>
								)}
							</Formik>
						</View>
						<Modal 
							visible={isModalOpen}
							animationType='slide'
							transparent
							statusBarTranslucent
						>
							<View style={styles.modalContainer}>
								<BackgroundDegrade 
									moreStyles={styles.modalContent}
									firstColor={theme.colors.secondary100}
									secondColor={theme.colors.secondary80}
								>
									<View style={styles.bar}/>
									<FlatList 
										data={data}
										keyExtractor={(item) => String(item.id)}
										ItemSeparatorComponent={Line}
										ListFooterComponent={Line}
										ListHeaderComponent={Line}
										ListHeaderComponentStyle={styles.headerList}
										renderItem={({ item }) => (
											<TouchableOpacity 
												style={styles.serverContainer}
												onPress={() => handleSelectedServer(item)}
											>
												<PictureGame url={item.icon} showBackground={false} />
												<View style={styles.serverDetails}>
													<Text style={[styles.title, {marginHorizontal: 0, marginBottom: 0}]}>{item.name}</Text>
													<Text style={styles.message}>{item.owner ? 'Administrador' : 'Convidado'}</Text>
												</View>
												<ArrowSVG width={styles.arrowWidth} height={styles.arrowHeight} style={[styles.arrow, {alignSelf: 'center'}]}/>
											</TouchableOpacity>
										)}
									/>
								</BackgroundDegrade>
							</View>
						</Modal>
					</View>
				</BackgroundDegrade>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}