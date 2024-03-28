import React, { useState } from 'react';

function EditAlbumForm({ album, onSave, onCancel }) {
  const [title, setTitle] = useState(album.title);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveClick = () => {
    onSave({ title });
  };

  return (
    <div className="edit-album-form">
      <input type="text" value={title} onChange={handleInputChange} />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditAlbumForm;
