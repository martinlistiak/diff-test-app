import axios from 'axios';
import React from 'react';
import {
	Router as ReactRouter,
	Route,
	IndexRoute,
} from 'react-router';
import ReactGA from '@src/helpers/react-ga';
import config from '@config';
import {
	history,
	store,
} from '@src/store';
import actions from '@src/actions';
import LayoutMain from '@src/components/layouts/main';
import Index from '@src/pages/Index';

const scrollToTop = () => window.scrollTo(0, 0);

const Router = storeState => (
	<ReactRouter
		onUpdate={() => {
			scrollToTop();
		}}
		history={history}
	>
		<Route
			path="/"
			component={LayoutMain}
		>
			<IndexRoute component={Index} />
			<Route
				path="/"
				component={Index}
			/>
			<Route
				path="*"
				component={NotFound}
				status={404}
			/>
		</Route>
	</ReactRouter>
);

export default Router;
