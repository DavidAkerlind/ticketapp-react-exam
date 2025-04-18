import NavItem from '../NavItem/NavItem';
import './NavBar.css';

function NavBar() {
	const navItems = [
		{
			text: 'Home',
			link: '/',
		},
		{
			text: 'Events',
			link: '/all-events',
		},
		{
			text: 'Tickets',
			link: '/tickets',
		},
	];

	return (
		<nav className="nav">
			<ul className="nav__list">
				{navItems.map((item, index) => (
					<NavItem key={index} text={item.text} link={item.link} />
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
