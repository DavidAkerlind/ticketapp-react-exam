import './Button.css';

function Button({ text, onClick }) {
	return (
		<button className="button" aria-label={text} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
