import React from 'react';

const ArtPieceDisplay = ({ art }) => {

  return (
    // <p>Displayed</p>
    <div className='artPiece'>
      <h2>{art.title}</h2>
      <p>{art.longTitle}</p>
      <img src={art.webImage.url} alt={art.longTitle} />
    </div>
  );
}

export default ArtPieceDisplay;
