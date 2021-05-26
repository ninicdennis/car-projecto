import { useState, useEffect } from 'react';
import { Button, Typography, TextField, Container } from '@material-ui/core';
import { supabase } from '../../utils/initSupabase';
import { useAuth } from '../../utils/sweet-state/authStore';
import { useRouter } from 'next/router';
const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [err, setErr] = useState({ error: false });
	const [state, actions] = useAuth();
	const router = useRouter();

	useEffect(() => {
		state.user ? router.push('/') : null;
	}, []);

	const signUp = async () => {
		setErr({ error: false });
		if (username.length <= 6) {
			setErr({ error: true, msg: 'Username must be longer than 6 characters.' });
			return;
		} else if (username.length >= 12) {
			setErr({ error: true, msg: 'Username must be shorter than 12 characters.' });
			return;
		}
		const { data } = await supabase.from('users').select().filter('username', 'eq', username);
		if (data.length !== 0) {
			setErr({ error: true, msg: 'Username is already taken.' });
		} else {
			const { user, session, error } = await supabase.auth.signUp({
				email,
				password,
			});
			if (error) {
				setErr({ msg: error.message, error: true });
			} else {
				const { data, error } = await supabase.from('users').insert([{ user_id: user.id, username }]);
				if (error) {
					setErr({ error: true, msg: 'Something went wrong. Please try again.' });
				} else {
					actions.login(user, session, data[0]);
					router.push('/');
				}
			}
		}
	};
	return (
		<Container maxWidth='lg' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
			<Container
				maxWidth='sm'
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#c3c3c3', height: '40vh' }}
			>
				<Typography variant='h6'>Sign Up</Typography>

				<Typography style={{ color: 'red' }}>{err.error ? err.msg : null}</Typography>
				<TextField id='standard-basic' label='email' onChange={e => setEmail(e.target.value)} />
				<TextField id='standard-basic' type='password' label='password' onChange={e => setPassword(e.target.value)} />
				<TextField id='standard-basic' label='username' onChange={e => setUsername(e.target.value)} />
				<Button variant='contained' style={{ marginTop: 20 }} onClick={signUp}>
					Sign up!
				</Button>
			</Container>
		</Container>
	);
};

export default SignUp;
