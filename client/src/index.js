import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
	uri: 'http://andleo-001-site1.dtempurl.com/attendance-usat-server/',
	// uri: 'http://localhost:5000/',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
