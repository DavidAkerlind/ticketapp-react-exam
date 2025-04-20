import './Button.css';

function Button({ text, onclick }) {
	return (
		<button className="button" aria-label={text} onclick={onclick}>
			{text}
		</button>
	);
}

export default Button;
