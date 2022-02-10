import * as React from 'react';
import * as moment from 'moment';
import type { IUser } from '../App';

interface ListProps {
    users: IUser[]
}

const List = ({ users }: ListProps) => {
	return (
		<>
			<ul className="list-group">
				{users.map(user => (
					<li
						key={`user-${user.id}`}
						className="py-3 d-flex align-items-center justify-content-between list-group-item">
						<span>{user.email}</span>
						<span>{moment(user.created_at).format('MMM Do, YYYY')}</span>
					</li>
				))}
			</ul>
		</>
	);
};

export default List;
