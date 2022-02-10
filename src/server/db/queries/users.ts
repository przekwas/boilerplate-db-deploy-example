import { Query } from '../pool';

interface UsersTable {
	id?: number;
	email?: string;
	created_at?: Date;
}

const all = () => Query<[UsersTable[], { insertId: number }]>('CALL spGetUsers()');
const insert = (values: { email: string }) => Query('INSERT INTO users SET ?', values);

export default {
	all,
	insert
};
