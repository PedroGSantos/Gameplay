import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';
import { api } from '../services';
import { CLIENT_ID, REDIRECT_URI, SCOPE, RESPONSE_TYPE, CDN_IMAGE } from 'react-native-dotenv';

type Props = {
    children: ReactNode,
}

type userData = {
    id: string;
	username: string;
	firstName: string;
	avatar: string;
	email: string;
	token: string
}
 
type UserContext = {
    user: userData,
	loading: boolean,
	signIn: () => Promise<void>,
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
	params: {
		access_token?: string;
	}
}

const AuthContext = createContext({} as UserContext);

export function AuthStore({ children } : Props){
	const [user, setUser] = useState<userData>({} as userData);
	const [loading, setLoading] = useState(false);

	async function signIn(){
		try {
			setLoading(true);
			const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
			const { type, params }= await AuthSession.startAsync({authUrl}) as AuthorizationResponse;	
			console.log(response);
			if (type === 'success'){
				console.log('test');
				api.defaults.headers.authorization = `Bearer ${params.access_token}`;

				const userInfo = await api.get('/users/@me');
				const firstName = userInfo.data.username.split(' ')[0];
				userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

				console.log(userInfo);
				const userData = {
					...userInfo.data,
					firstName,
					token: params.access_token
				};

				setUser(userData);
				setLoading(false);
			} else {
				console.log('teste');
				setLoading(false);
			}
			
		} catch (error) {
			throw new Error('Não foi possível autenticar');
		}
	}

	return(
		<AuthContext.Provider
			value={{
				user,
				signIn,
				loading
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth(){
	const { user, signIn, loading } = useContext(AuthContext);

	return { user, signIn, loading };
}