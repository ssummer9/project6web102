import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Ghibli Dashboard</h2>
      <Link to="/">Dashboard</Link>
    </div>
  );
}
