import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function AddAlbumForm({ addAlbum }) {
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      toast.error('Please enter album title'); // Show error notification if title is empty
      return;
    }
    try {
      await addAlbum({ title });
      setTitle('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="add-album-form" style={{display:'flex', justifyContent:'center' }}>
      <input type="text" placeholder="Album title" value={title} onChange={handleInputChange} />
      <button type="submit">Add Album</button>
    </form>
    </>
  );
}

export default AddAlbumForm;
