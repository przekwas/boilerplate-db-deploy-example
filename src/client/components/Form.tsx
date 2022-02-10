import * as React from 'react';
import { useState } from 'react';
import { GiGClef, GiSparkles } from 'react-icons/gi';

interface FormProps {
	setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
	trigger: boolean;
}

const Form = ({ setTrigger, trigger }: FormProps) => {
	const [email, setEmail] = useState<string>('');

	const submitUser = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		fetch('/api/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		})
			.then(res => {
				if (res.ok) {
					setEmail('');
					setTrigger(!trigger);
					return;
				} else {
					throw new Error('submit failed');
				}
			})
			.catch(e => alert(e.message));
	};

	return (
		<>
			<h2 className="text-center navbar-text bard-text text-primary">
				<GiGClef /> Learn the Magic of Song <GiSparkles />
			</h2>
			<form className="p-4 border shadow-lg border-3 border-primary rounded-3 form-group">
				<label htmlFor="email">Email</label>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type="email"
					placeholder="scanlan_shorthalt@voxmachina.com"
					className="mt-2 form-control"
				/>
				<div className="mt-3 d-flex justify-content-end">
					<button onClick={submitUser} className="btn btn-primary btn-lg">
						Sign Me Up!
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;
