import * as React from 'react';
import { useState, useEffect } from 'react';
import { Brand, List, Form } from './components';

interface AppProps {}

export interface IUser {
	id: number;
	email: string;
	created_at: Date;
}

const App = (props: AppProps) => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [trigger, setTrigger] = useState<boolean>(false);

	useEffect(() => {
		fetch('/api/users')
			.then(res => res.json())
			.then(users => setUsers(users))
			.catch(e => alert(e.message));
	}, [trigger]);

	return (
		<>
			<Brand />
			<main className="container">
				<section className="row align-items-center justify-content-center">
					<div className="col-md-3">
						<img src="/images/bard-guy.png" className="img-fluid" alt="bard guy" />
					</div>
					<div className="col-md-6">
						<Form setTrigger={setTrigger} trigger={trigger} />
					</div>
				</section>
				<section className="row justify-content-center">
					<div className="offset-md-1 col-md-7">
						<List users={users} />
					</div>
				</section>
			</main>
		</>
	);
};

export default App;
