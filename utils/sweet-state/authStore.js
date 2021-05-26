import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
	initialState: {
		user: null,
	},
	actions: {
		login: (user, session, data) => ({ setState }) => {
			console.log('Signing in: ', user);
			setState({
				user,
				session,
				data,
			});
		},
		name: 'auth',
	},
});

export const useAuth = createHook(Store);
