import React from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

function App() {
	return (
		<div style={{ margin: 'auto', width: '50vw' }}>
			<Header headerText="Albums" />
			<AlbumList />
		</div>
	);
}

export default App;
