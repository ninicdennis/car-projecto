import { DashboardPage } from './dashboardPage/dashboardPage';
import { HomePage } from './homePage/homePage';

export const Routes = () => {
	const user = false;

	return user ? <DashboardPage /> : <HomePage />;
};
