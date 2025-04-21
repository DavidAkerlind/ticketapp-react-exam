import './NavItem.css';
import { Link } from 'react-router-dom';

function NavItem({ text, link }) {
	return (
		<li className="nav__list-item">
			<Link aria-label={`Go to ${text} page`} to={link}>
				{text}
			</Link>
		</li>
	);
}

export default NavItem;
