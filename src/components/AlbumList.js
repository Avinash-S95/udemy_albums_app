import React, { Component } from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };
	componentWillMount() {
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => this.setState({ albums: response.data }));
	}
	renderListOfAlbums() {
		return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album} />);
	}

	render() {
		return <div>{this.renderListOfAlbums()}</div>;
	}
}
export default AlbumList;
