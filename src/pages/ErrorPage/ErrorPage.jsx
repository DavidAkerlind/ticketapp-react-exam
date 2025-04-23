import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './errorPage.css';

function ErrorPage() {
	return (
		<section className="page page-error">
			<figure className="main-content__img-container">
				<img
					className="main-content__img"
					src={logo}
					alt="Logo for ticket app"
				/>
			</figure>

			<h1 className="page__header">This is not Where its @ </h1>
			<h2 className="page__sub-header">
				The page was not found
				<br /> Check the link or go back to the home page.
			</h2>

			<Link to="/" className="button">
				Go to homepage
			</Link>
		</section>
	);
}

export default ErrorPage;
