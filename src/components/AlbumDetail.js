import React from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

function AlbumDetail(props) {
	return (
		<Card>
			<CardSection>
				<div>
					<img
						src={props.album.thumbnail_image}
						style={{ width: '100px', height: '100px' }}
						alt="Taylor swift"
					/>
				</div>
				<div style={styles.fontStyle}>
					<p>{props.album.title}</p>
					<p>{props.album.artist}</p>
				</div>
			</CardSection>
			<CardSection>
				<img src={props.album.image} style={styles.imageStyle} alt="taylor stunning images" />
			</CardSection>
			<CardSection>
				<div style={styles.buttonStyle}>
					<Button url={props.album.url} />
				</div>
			</CardSection>
		</Card>
	);
}
const styles = {
	imageStyle: {
		margin: '0 auto',
		borderRadius: 4,
		boxShadow: '0 10px 6px -6px #777'
	},
	fontStyle: {
		fontFamily: 'Cursive',
		letterSpacing: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 20
	},
	buttonStyle: {
		margin: '0px auto'
	}
};

export default AlbumDetail;
