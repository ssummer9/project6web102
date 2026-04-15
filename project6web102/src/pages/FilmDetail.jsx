import { useParams } from "react-router-dom";
import useGhibliData from "../data/givenGhibliData";
import Sidebar from "../components/Sidebar";
import "../Detail.css";

export default function FilmDetail() {
  const { id } = useParams();
  const films = useGhibliData();
  const film = films.find(f => f.id === id);

  if (!film) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <Sidebar />

      <div className="detail-content">
        <h1>{film.title}</h1>

        <p><strong>Director:</strong> {film.director}</p>
        <p><strong>Producer:</strong> {film.producer}</p>
        <p><strong>Release Year:</strong> {film.release_date}</p>
        <p><strong>Running Time:</strong> {film.running_time} minutes</p>
        <p><strong>Rotten Tomatoes Score:</strong> {film.rt_score}</p>

        <h3>Description</h3>
        <p>{film.description}</p>
      </div>
    </div>
  );
}
