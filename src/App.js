import React, { useState, useEffect } from 'react';
import AlbumList from './components/AlbumList';
import AddAlbumForm from './components/AddAlbumForm';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  //Fetch albums
  const fetchAlbums = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!response.ok) {
        throw new Error('Failed to fetch albums');
      }
      const data = await response.json();
      setAlbums(data.slice(0, 25)); // setting no. of albums limit
    } catch (error) {
      console.error(error);
    }
  };

  
  // POST request to add album -> dummy request
  const addAlbum = async (albumData) => {
    try {
      // Fetch the last album ID from the state and increment it by 1
      const lastAlbumId = albums.length > 0 ? albums[albums.length - 1].id : 0;
      const newAlbum = { ...albumData, id: lastAlbumId + 1 }; 
  
      // Update state with the new album
      setAlbums([...albums, newAlbum]);
  
      // Make a POST request to the API to add the new album
      const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAlbum),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add album');
      }
      toast.success('Album added successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add album'); 
    }
  };
  
  

  
  //PUT request to update album --> (dummy request)
  const updateAlbum = async (albumId, updatedAlbumData) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAlbumData),
      });
      if (!response.ok) {
        throw new Error('Failed to update album');
      }
  
      setAlbums(prevAlbums => {
        return prevAlbums.map(album => {
          if (album.id === albumId) {
            return { ...album, ...updatedAlbumData };
          } else {
            return album;
          }
        });
      });
  
      toast.success('Album updated successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update album');
    }
  };
  

  
//DELETE request to delete album --> (dummy request)
const deleteAlbum = async (albumId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete album');
    }
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));
    toast.success('Album deleted successfully');
  } catch (error) {
    console.error(error);
    toast.error('Failed to delete album');
  }
};



  return (
    <div className="app">
      <h1>Album Manager</h1>
      <AddAlbumForm addAlbum={addAlbum} />
      <AlbumList albums={albums}  updateAlbum={updateAlbum} deleteAlbum={deleteAlbum} /> 
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
