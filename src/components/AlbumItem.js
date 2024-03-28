import React, { useState } from "react";
import "./AlbumItem.css";
import EditAlbumForm from "./EditAlbumForm";
import 'animate.css';

function AlbumItem({  album, updateAlbum, deleteAlbum }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (updatedAlbumData) => {
    updateAlbum(album.id, updatedAlbumData);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteAlbum(album.id);
  };

  return (
    <>
      <div className="album-item card animate__animated animate__bounceInUp">
          <>
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="succes-svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  {isEditing ? (
          <EditAlbumForm
            album={album}
            onSave={handleSaveClick}
            onCancel={() => setIsEditing(false)}
          />
        ):<div className="success-prompt-wrap">
        <p className="success-prompt-heading">Album </p>
        <div className="success-prompt-prompt">
          <p>{album.title}</p>
        </div>
        <div className="success-button-container">
          <button
            className="success-button-main"
            type="button"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className="success-button-secondary"
            type="button"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>}
                  
                </div>
              </div>
            </div>
          </>
      </div>
    </>
  );
}

export default AlbumItem;
