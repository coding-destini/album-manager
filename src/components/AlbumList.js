import React from 'react';
import AlbumItem from './AlbumItem';
import './albumList.css'

function AlbumList({ albums, updateAlbum, deleteAlbum }) {
  return (
    <div className="album-list">
      <div className='my-album'>
      {albums.map((album) => (
       <AlbumItem key={album.id} album={album} updateAlbum={updateAlbum} deleteAlbum={deleteAlbum} />

      ))}
      </div>
    </div>
  );
}

export default AlbumList;
