import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.db);

export const Query = <T = any>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		pool.query(query, values, (err, results) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(results);
			}
		});
	});
};