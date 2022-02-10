import * as React from 'react';
import { GiLyre } from 'react-icons/gi';

interface BrandProps {}

const Brand = (props: BrandProps) => {
	return (
		<>
			<nav className="py-1 mb-3 shadow-lg navbar text-light bg-primary sticky-top">
				<div className="container-fluid d-flex align-items-center justify-content-around">
					<h1 className="navbar-text text-secondary">
						<GiLyre />
					</h1>
					<h1 className="navbar-text bard-text">
						<b>Bard's College</b>
					</h1>
					<h1 className="navbar-text text-secondary">
						<GiLyre />
					</h1>
				</div>
			</nav>
		</>
	);
};

export default Brand;
