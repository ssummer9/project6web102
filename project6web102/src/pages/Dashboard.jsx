import givenGhibliData from "../data/givenGhibliData";
import Sidebar from "../components/Sidebar";
import FilmTable from "../components/FilmTable";
import FilmsByYear from "../components/charts/FilmsByYear";
import ScoresByTrend from "../components/charts/ScoresByTrend";
import "../Dashboard.css";

export default function Dashboard() {
  const films = givenGhibliData();

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Studio Ghibli Dashboard</h1>

        <div className="charts-row">
          <FilmsByYear films={films} />
          <ScoresByTrend films={films} />
        </div>

        <FilmTable films={films} />
      </div>
    </div>
  );
}
