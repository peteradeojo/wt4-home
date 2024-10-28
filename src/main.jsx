import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './App.jsx';
import {
	Route,
	Router,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route>
			<Route index element={<App />} />
		</Route>
	)
);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
);
