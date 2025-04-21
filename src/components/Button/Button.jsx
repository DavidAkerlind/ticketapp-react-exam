import './Button.css';

function Button({ text, onClick, variant = 'normal' }) {
	if (variant === 'normal') {
		return (
			<button className="button" aria-label={text} onClick={onClick}>
				{text}
			</button>
		);
	}

	if (variant === 'remove') {
		return (
			<button
				className="button button--remove"
				aria-label={text}
				onClick={onClick}>
				{text}
			</button>
		);
	}

	return (
		<button className="button" aria-label={text} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
