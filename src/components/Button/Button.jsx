import './Button.css';

function Button({ text, onClick, variant = 'normal', color = 'green' }) {
	if (variant === 'normal') {
		return (
			<button
				className="button"
				aria-label={text}
				onClick={onClick}
				style={{
					backgroundColor: `var(--${color})`,
					border: '#85282c;',
					borderColor: '#85282c',
				}}>
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
