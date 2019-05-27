import React from 'react';

function Header(props) {
	return (
		<div style={styles.containerStyle}>
			<p style={styles.fontStyle}>{props.headerText}</p>
		</div>
	);
}

const styles = {
	containerStyle: {
		height: 70,
		backgroundColor: '#282c34',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6
	},
	fontStyle: {
		fontFamily: 'Lobster',
		fontSize: 40,
		color: '#ffffff'
	}
};

export default Header;
