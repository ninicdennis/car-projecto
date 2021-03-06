import Head from 'next/head';
import Link from 'next/link';
import { Routes } from './routes';
import { AppBar, Button, Typography } from '@material-ui/core';
export default function Home() {
	return (
		<>
			<Head>
				<title>Car Projecto</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AppBar
				position='sticky'
				style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 10, alignItems: 'center' }}
			>
				<Typography variant='h5'>Car Projecto</Typography>
				<div>
					<Link href='/auth/signUp'>
						<Button color='inherit'>Sign Up</Button>
					</Link>
					<Link href='/auth/login'>
						<Button color='inherit'>Login</Button>
					</Link>
				</div>
			</AppBar>
			<Routes />
		</>
	);
}
