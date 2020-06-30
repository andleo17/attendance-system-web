import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter } from 'react-router-dom';

const client = new ApolloClient({
	uri: 'http://andleo-001-site1.dtempurl.com/attendance-usat-server/',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<HashRouter basename={process.env.PUBLIC_URL}>
		<ApolloProvider client={client}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ApolloProvider>
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
