import { DashboardPage } from './dashboardPage/dashboardPage';
import { HomePage } from './homePage/homePage';
import { useAuth } from '../utils/sweet-state/authStore';

export const Routes = () => {
	const [state] = useAuth();
	const user = state.user ? true : false;

	return user ? <DashboardPage /> : <HomePage />;
};
