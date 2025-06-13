import React from 'react';

export default function MovieList({ movies }) {
  return (
    <table
      border="1"
      cellPadding="10"
      cellSpacing="0"
      style={{ width: '100%', textAlign: 'left' }}
    >
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
