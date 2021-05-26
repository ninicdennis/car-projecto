import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
	initialState: {
		user: null,
	},
	actions: {
		login: (user, session) => ({ setState }) => {
			console.log('Signing in: ', user);
			setState({
				user,
				session,
			});
		},
		name: 'auth',
	},
});

export const useAuth = createHook(Store);
