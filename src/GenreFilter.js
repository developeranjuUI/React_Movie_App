import React from 'react';

export default function GenreFilter({ genres, onSelectGenre }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelectGenre(genre)}
          style={{
            margin: '5px',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
