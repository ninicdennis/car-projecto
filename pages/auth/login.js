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
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password,
		});
		if (error) {
			setErr({ msg: error.message, error: true });
		} else {
			const { data, error } = await supabase.from('users').select().filter('user_id', 'eq', user.id);
			if (error) {
				setErr({ error: true, msg: 'Something went wrong. Please try again.' });
			} else {
				actions.login(user, session, data[0]);
				router.push('/');
			}
		}
	};

	return (
		<Container maxWidth='lg' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
			<Container
				maxWidth='sm'
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#c3c3c3', height: '40vh' }}
			>
				<Typography variant='h6'>Log In</Typography>
				<Typography style={{ color: 'red' }}>{err.error ? err.msg : null}</Typography>
				<TextField id='standard-basic' label='email' onChange={e => setEmail(e.target.value)} />
				<TextField id='standard-basic' label='password' type='password' onChange={e => setPassword(e.target.value)} />
				<Button variant='contained' style={{ marginTop: 20 }} onClick={signIn}>
					Sign In!
				</Button>
			</Container>
		</Container>
	);
};

export default Login;
