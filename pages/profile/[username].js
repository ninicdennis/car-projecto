import { useRouter } from 'next/router';

const UserProfile = () => {
	const router = useRouter();
	const { username } = router.query;

	return <p>User: {username}</p>;
};

export default UserProfile;
