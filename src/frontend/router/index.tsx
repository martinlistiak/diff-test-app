import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react';
import {
	Route,
	Switch,
} from 'react-router-dom';
import MainLayout from 'src/frontend/layouts/Main/MainLayout';
import Index from 'src/frontend/pages/Index/IndexPage';
import NotFound from 'src/frontend/pages/NotFound/NotFoundPage';
import {
	history,
} from 'src/frontend/store';

const Router = () => (
	<ConnectedRouter
		history={history}
	>
		<MainLayout />
		<Switch>
			<Route
				path="/"
				component={Index}
			/>
			<Route
				path="*"
				component={NotFound}
				status={404}
			/>
		</Switch>
	</ConnectedRouter>
);

export default Router;
