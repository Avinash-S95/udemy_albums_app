import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Button({ url }) {
	return (
		<button className="btn btn-dark">
			<a href={url} rel="noopener noreferrer" target="_blank" style={styles.linkStyle}>
				Buy Now
			</a>
		</button>
	);
}

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color: 'white'
	}
};

export default Button;
