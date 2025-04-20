import NavBar from '../../components/NavBar/NavBar';
import './SplashScreenPage.css';
import { Link } from 'react-router-dom';

function SplashScreenPage() {
	return (
		<section className="page page-splash">
			<Link to="/all-events">
				<section className="page-splash__main-content">
					<figure className="main-content__img-container">
						<img
							className="main-content__img"
							src="../src/assets/logo.svg"
							alt="Logo for ticket app"
						/>
					</figure>
					<h1 className="page__header">Where It's @</h1>
					<h2 className="page__sub-header">Ticketing made easy</h2>
				</section>
			</Link>
			<NavBar />
		</section>
	);
}

export default SplashScreenPage;
