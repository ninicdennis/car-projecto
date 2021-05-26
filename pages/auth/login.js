import { useState, useEffect } from 'react';
import { Button, Typography, TextField, Container } from '@material-ui/core';
import { supabase } from '../../utils/initSupabase';
import { useAuth } from '../../utils/sweet-state/authStore';
import { useRouter } from 'next/router';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState({ error: false });
	const [state, actions] = useAuth();
	const router = useRouter();

	useEffect(() => {
		state.user ? router.push('/') : null;
	}, []);

	const signIn = async () => {
		setErr({ error: false });
		console.log(email, password);
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password,
		});
		// console.log(user, session, error);
		if (error) {
			setErr({ msg: error.message, error: true });
		} else {
			actions.login(user, session);
			router.push('/');
		}
	};

	return (
		<>
			<Typography>Log In</Typography>
			<Container maxWidth='sm' style={{ display: 'flex', flexDirection: 'column' }}>
				{err.error ? err.msg : null}
				<TextField id='standard-basic' label='username' onChange={e => setEmail(e.target.value)} />
				<TextField id='standard-basic' label='password' onChange={e => setPassword(e.target.value)} />
				<Button onClick={signIn}>Sign In!</Button>
			</Container>
		</>
	);
};

export default Login;
