import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { Redirect, useHistory } from 'react-router';

const LOGIN_QUERY = gql`
	query LoginQuery($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			name
			lastname
			cardId
		}
	}
`;

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [login, { loading, data, error }] = useLazyQuery(LOGIN_QUERY);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;
	if (data && data.login) {
		return <Redirect to='/' />;
	}
	return (
		<div className='row justify-content-center inputEmpleado pt-5 mb-5 '>
			<div className='row mb-5'> </div>
			<form className='border-0 rounded inputLogin pt-5'>
				
				<h1 className='h1Inicio mt-5'>
					<em>I</em>
					<em>N</em>
					<em class="planet left">I</em>
					<em>C</em>
					<em class="planet right">I</em>
					<em>O</em>
				</h1>

				<div className='form-group mt-5'>
					<label htmlFor='username' className='text-white'>Usuario</label>
					<input
						className='form-control '
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type='text'
						name='username'
						id='username'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password' className='text-white'>Contraseña</label>
					<input
						className='form-control '
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
						// type='text'
						name='password'
						id='password'
					/>
				</div>
				<div className='flex-end'>
				<button
					type='button'
					className='btn degradado text-white '
					onClick={() =>
						login({
							variables: { username, password },
						})
					}
				>
					Ingresar
			</button>
				</div>
				
			</form>

		</div>

	);
}
