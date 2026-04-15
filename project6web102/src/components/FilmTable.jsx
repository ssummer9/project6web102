import { Link } from "react-router-dom";

export default function FilmTable({ films }) {
  return (
    <table className="film-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        {films.map(film => (
          <tr key={film.id}>
            <td>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </td>
            <td>{film.release_date}</td>
            <td>{film.rt_score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
