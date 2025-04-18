import './NavItem.css';
import { Link } from 'react-router-dom';

function NavItem({ text, link }) {
	return (
		<li className="nav__list-item">
			<Link to={link}>{text}</Link>
		</li>
	);
}

export default NavItem;
