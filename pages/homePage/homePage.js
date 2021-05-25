import Image from 'next/image';

import { Container, Typography, Grid } from '@material-ui/core';

export const HomePage = () => {
	return (
		<>
			<Container
				maxWidth='md'
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '80vh',
					alignContent: 'center',
					justifyContent: 'center',
					backgroundColor: '#c3c3c3',
				}}
			>
				<Typography variant='h3' style={{ alignSelf: 'center', marginTop: 10, textAlign: 'center' }}>
					Car Projecto
				</Typography>
				<Typography variant='subtitle1' style={{ alignSelf: 'center', textAlign: 'center' }}>
					A Website for car enthusiests
				</Typography>
			</Container>
			<Container
				maxWidth='sm'
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'center',
					justifyContent: 'center',
					backgroundColor: '#a2a2a2',
					paddingTop: 20,
					paddingBottom: 20,
				}}
			>
				<Typography variant='h6' style={{ alignSelf: 'center', textAlign: 'center' }}>
					Have you ever wanted a custom website for your ride?
				</Typography>
				<Typography variant='body1' style={{ alignSelf: 'center', textAlign: 'center' }}>
					Well, with this website, your dream can become a reality! No longer do you have to rely on slow, old websites to upload your pictures,
					with Car Projecto, you can upload images of your car, and have some control on how you want things displayed!
				</Typography>
			</Container>
			<Container
				maxWidth='md'
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'center',
					justifyContent: 'center',
					backgroundColor: '#b4b4b4',
				}}
			>
				<Grid container wrap spacing='3' justify='center' alignItems='center'>
					<Grid item xs='6'>
						<Typography style={{ textAlign: 'center' }}>Upload your own Header and Profile Picture</Typography>
					</Grid>
					<Grid item xs='6'>
						<Image src='/media/placeholder-bg.png' width={200} height={200} />
					</Grid>
					<Grid item xs='6'>
						<Typography style={{ textAlign: 'center' }}>Update your Vehicle Modification Page </Typography>
					</Grid>
					<Grid item xs='6'>
						<Image src='/media/placeholder-bg.png' width={200} height={200} />
					</Grid>
					<Grid item xs='6'>
						<Typography style={{ textAlign: 'center' }}>Follow some of your favorite project cars!</Typography>
					</Grid>
					<Grid item xs='6'>
						<Image src='/media/placeholder-bg.png' width={200} height={200} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
